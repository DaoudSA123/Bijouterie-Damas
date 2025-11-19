const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample jewelry data
const jewelryData = {
  collections: [
    {
      id: 1,
      name: "Elegant Rings",
      description: "Beautiful handcrafted rings for every occasion",
      image: "/images/rings-collection.jpg"
    },
    {
      id: 2,
      name: "Necklaces",
      description: "Stunning necklaces that complement your style",
      image: "/images/necklaces-collection.jpg"
    },
    {
      id: 3,
      name: "Earrings",
      description: "Delicate earrings to enhance your beauty",
      image: "/images/earrings-collection.jpg"
    }
  ],
  about: {
    title: "About Our Jewelry Store",
    description: "We are passionate about creating beautiful, high-quality jewelry that tells your unique story. With over 20 years of experience in the industry, our skilled artisans craft each piece with love and attention to detail.",
    values: [
      "Handcrafted Excellence",
      "Ethical Sourcing",
      "Timeless Design",
      "Personal Service"
    ]
  }
};

// Routes
app.get('/api/jewelry', (req, res) => {
  res.json(jewelryData);
});

app.get('/api/collections', (req, res) => {
  res.json(jewelryData.collections);
});

app.get('/api/about', (req, res) => {
  res.json(jewelryData.about);
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error sending your message. Please try again.' 
    });
  }
});

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Gallery endpoint: lists images grouped by category folders located in client/public
app.get('/api/gallery', async (req, res) => {
  try {
    const categories = ['rings', 'bracelets', 'pendants', 'earrings'];
    const publicDir = path.join(__dirname, 'client', 'public');

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
          .map((entry) => `/${category}/${entry.name}`)
          .sort();
        return imageFiles;
      } catch (err) {
        // If category folder missing, return empty list
        return [];
      }
    };

    const data = categories.reduce((acc, category) => {
      let images = readCategory(category);
      // Shuffle earrings, keep others sorted alphabetically
      if (category === 'earrings') {
        images = shuffleArray(images);
      }
      acc[category] = images;
      return acc;
    }, {});

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error building gallery list:', error);
    res.status(500).json({ success: false, message: 'Failed to list gallery images' });
  }
});

// Catch all handler for undefined routes
app.get('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'API endpoint not found' 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
