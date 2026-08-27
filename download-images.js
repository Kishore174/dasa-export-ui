const fs = require('fs');
const path = require('path');
const https = require('https');

const products = [
  { id: 'millet-products', name: 'Organic Millet Powders & Grains', visual: 'mixed millet grains and flours, healthy ancient grains' },
  { id: 'ragi-millet', name: 'Finger Millet (Ragi) Powder', visual: 'dark brown finger millet flour, ragi powder, with raw brown ragi grains' },
  { id: 'foxtail-millet', name: 'Foxtail Millet Flour', visual: 'yellowish foxtail millet grains and finely milled yellow flour' },
  { id: 'bajra-millet', name: 'Pearl Millet (Bajra) Powder', visual: 'greyish-green pearl millet flour, bajra powder, with raw bajra grains' },
  { id: 'jowar-millet', name: 'Sorghum (Jowar) Flour', visual: 'creamy white sorghum jowar flour with raw jowar grains' },
  { id: 'tomato-powder', name: 'Premium Tomato Powder', visual: 'vibrant bright red tomato powder with fresh red tomatoes' },
  { id: 'moringa-powder', name: 'Moringa Powder', visual: 'vibrant green moringa leaf powder with fresh green moringa leaves' },
  { id: 'turmeric-powder', name: 'Turmeric Powder', visual: 'vibrant bright yellow turmeric powder with raw turmeric roots' },
  { id: 'beetroot-powder', name: 'Beetroot Powder', visual: 'deep vibrant dark red purple beetroot powder with sliced raw red beetroots' },
  { id: 'onion-powder', name: 'Onion Powder', visual: 'creamy white onion powder with whole fresh red onions and white onions' },
  { id: 'garlic-powder', name: 'Garlic Powder', visual: 'fine white garlic powder with fresh raw whole garlic bulbs and cloves' }
];

const galleryDir = path.join(__dirname, 'public', 'products', 'gallery');

if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
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
    }).on('error', reject);
  });
};

const getPrompts = (visualDesc) => {
  let basePrompt = `premium food photography of ${visualDesc}, extremely accurate color, high resolution, photorealistic, studio lighting`;
  return [
    encodeURIComponent(`${basePrompt}, in a beautiful rustic wooden bowl on a slate table, macro shot, highly detailed`),
    encodeURIComponent(`${basePrompt}, raw ingredients scattered around the powder, natural daylight, professional export quality`),
    encodeURIComponent(`${basePrompt}, elegant export packaging context, dark moody background, cinematic lighting`)
  ];
};

async function main() {
  console.log('Starting image generation and download...');
  for (const product of products) {
    console.log(`Processing: ${product.name}`);
    const prompts = getPrompts(product.visual);
    
    for (let i = 0; i < prompts.length; i++) {
      const prompt = prompts[i];
      // Note: Added a random seed at the end of the prompt to ensure unique images
      const url = `https://image.pollinations.ai/prompt/${prompt}?width=800&height=800&nologo=true&seed=${Math.floor(Math.random() * 100000)}`;
      const filename = `${product.id}-${i + 1}.jpg`;
      const filepath = path.join(galleryDir, filename);
      
      try {
        console.log(`  Downloading image ${i + 1}/3 for ${product.id}...`);
        await downloadImage(url, filepath);
        console.log(`  Saved: ${filename}`);
      } catch (err) {
        console.error(`  Error downloading ${filename}:`, err.message);
      }
      
      // Delay to avoid hitting rate limits too hard
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  console.log('Done!');
}

main();
