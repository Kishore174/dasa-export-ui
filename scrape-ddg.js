const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

const products = [
  { id: 'millet-products', query: 'premium organic millet grains macro food photography' },
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
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed ${url}: ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => { fileStream.close(); resolve(); });
      fileStream.on('error', (err) => { fs.unlink(filepath, () => reject(err)); });
    });
    req.on('error', reject);
    req.setTimeout(5000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
};

async function main() {
  console.log('Starting DDG image scraping...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  for (const product of products) {
    console.log(`Searching: ${product.query}`);
    try {
      await page.goto(`https://duckduckgo.com/?q=${encodeURIComponent(product.query)}&t=h_&iar=images&iax=images&ia=images`, { waitUntil: 'networkidle2' });
      
      // Wait for images to load
      await page.waitForSelector('.tile--img__img', { timeout: 10000 }).catch(() => {});
      
      // Extract image URLs from DDG (DDG uses data-src)
      const imageUrls = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('.tile--img__img'));
        // DDG images are often passed as data-src which looks like //external-content.duckduckgo.com/iu/?u=...
        return imgs.map(img => img.getAttribute('src') || img.getAttribute('data-src')).filter(src => src && src.includes('http'));
      });
      
      console.log(`Found ${imageUrls.length} images`);
      let downloaded = 0;
      
      for (const url of imageUrls) {
        if (downloaded >= 3) break;
        // The URL is usually like //external-content... so we might need to prepend https:
        let actualUrl = url.startsWith('//') ? 'https:' + url : url;
        
        const filename = `${product.id}-${downloaded + 1}.jpg`;
        const filepath = path.join(galleryDir, filename);
        
        try {
          await downloadImage(actualUrl, filepath);
          console.log(`  Saved: ${filename}`);
          downloaded++;
        } catch (e) {
          console.log(`  Failed downloading ${filename}`);
        }
      }
    } catch (e) {
      console.error(`Error searching ${product.query}:`, e.message);
    }
  }
  
  await browser.close();
  console.log('Done!');
}

main();
