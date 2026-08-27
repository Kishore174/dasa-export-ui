const Scraper = require('images-scraper');
const fs = require('fs');
const path = require('path');
const https = require('https');

const google = new Scraper({
  puppeteer: {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

const products = [
  { id: 'millet-products', query: 'premium organic millet grains macro photography' },
  { id: 'ragi-millet', query: 'premium finger millet ragi flour food photography' },
  { id: 'foxtail-millet', query: 'premium foxtail millet grains photography' },
  { id: 'bajra-millet', query: 'premium pearl millet bajra powder food photography' },
  { id: 'jowar-millet', query: 'premium sorghum jowar flour photography' },
  { id: 'tomato-powder', query: 'premium tomato powder spice photography' },
  { id: 'moringa-powder', query: 'premium organic moringa powder photography' },
  { id: 'turmeric-powder', query: 'premium turmeric powder in bowl photography' },
  { id: 'beetroot-powder', query: 'premium beetroot powder food photography' },
  { id: 'onion-powder', query: 'premium dehydrated onion powder photography' },
  { id: 'garlic-powder', query: 'premium garlic powder spice photography' }
];

const galleryDir = path.join(__dirname, 'public', 'products', 'gallery');

if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }

      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => reject(err));
      });
    });
    
    req.on('error', reject);
    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
};

async function main() {
  console.log('Starting image scraping...');
  
  for (const product of products) {
    console.log(`Searching for: ${product.query}`);
    try {
      const results = await google.scrape(product.query, 10);
      let downloaded = 0;
      
      for (const res of results) {
        if (downloaded >= 3) break;
        if (!res.url.startsWith('https://')) continue;
        
        const filename = `${product.id}-${downloaded + 1}.jpg`;
        const filepath = path.join(galleryDir, filename);
        
        try {
          await downloadImage(res.url, filepath);
          console.log(`  Saved: ${filename}`);
          downloaded++;
        } catch (e) {
          // Ignore and try next
        }
      }
    } catch (e) {
      console.error(`Error scraping ${product.query}:`, e);
    }
  }
  
  console.log('Done!');
}

main();
