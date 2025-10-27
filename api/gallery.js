const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const categories = ['rings', 'bracelets', 'pendants', 'earrings'];
    
    // Path to public directory - In Vercel, check both dist and public
    // First try dist (production build), then fall back to public (development)
    let publicDir;
    if (fs.existsSync(path.join(process.cwd(), 'client', 'dist'))) {
      publicDir = path.join(process.cwd(), 'client', 'dist');
    } else {
      publicDir = path.join(process.cwd(), 'client', 'public');
    }

    const readCategory = (category) => {
      const categoryDir = path.join(publicDir, category);
      try {
        const files = fs.readdirSync(categoryDir, { withFileTypes: true });
        const imageFiles = files
          .filter(
            (entry) =>
              entry.isFile() &&
              /\.(png|jpe?g|webp|gif|avifs?)$/i.test(entry.name)
          )
          .map((entry) => `/${category}/${entry.name}`);
        return imageFiles;
      } catch (err) {
        // If category folder missing, return empty list
        return [];
      }
    };

    const data = categories.reduce((acc, category) => {
      acc[category] = readCategory(category);
      return acc;
    }, {});

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error building gallery list:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to list gallery images'
    });
  }
};

