import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Sample sliders
const sliders = [
  { id: 1, title: "Welcome to Mavenox", description: "Full-stack development made easy." },
  { id: 2, title: "Innovation & AI", description: "Building smarter solutions every day." },
  { id: 3, title: "Join Our Team", description: "Be part of our journey." },
];

// Sample blogs
const blogs = [
  { id: 1, title: "Latest Tech Trends", description: "Stay updated with new technologies." },
  { id: 2, title: "AI in 2025", description: "How AI is changing the industry." },
  { id: 3, title: "Full-Stack Guide", description: "Tips for becoming a full-stack developer." },
];

// Sample videos
const videos = [
  {
    id: 1,
    title: "DD.NYC Intro Video",
    url: "https://www.youtube.com/embed/0s8-R3z7H1k", // sample video link
  },
];

app.get("/api/sliders", (req, res) => res.json(sliders));
app.get("/api/blogs", (req, res) => res.json(blogs));
app.get("/api/videos", (req, res) => res.json(videos));

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
