// backend/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' })); // allow frontend dev
app.use(express.json());

// Load data (simple JSON files)
const slidersData = require('./data/sliders.json'); // array of 5 slider groups
const blogsData = require('./data/blogs.json');     // array of blog items

// GET sliders
app.get('/api/sliders', (req, res) => {
  res.json({ sliders: slidersData });
});

// GET blogs
app.get('/api/blogs', (req, res) => {
  res.json({ blogs: blogsData });
});

// POST contact submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  // In production save to DB. For assignment, just reply success.
  res.json({ success: true, message: 'Contact received' });
});

// Optional: Add a blog (admin)
app.post('/api/blogs', (req, res) => {
  const blog = req.body;
  blogsData.unshift(blog); // push to memory array
  res.status(201).json(blog);
});

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
