const https = require('https');

https.get('https://images.search.yahoo.com/search/images?p=turmeric+powder', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const urls = [];
    // Yahoo images stores original image url in a data attribute or json
    const regex = /imgurl=(https?:\/\/[^&]+)/g;
    let match;
    while ((match = regex.exec(data)) !== null && urls.length < 5) {
      urls.push(decodeURIComponent(match[1]));
    }
    console.log("Found URLs:", urls);
  });
}).on('error', console.error);
