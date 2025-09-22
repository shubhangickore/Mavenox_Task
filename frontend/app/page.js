"use client";

import { useEffect, useState } from "react";
import API from "../utils/api";
import "./page.css";

export default function Home() {
  const [sliders, setSliders] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [video, setVideo] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Fetch sliders dynamically
    API.get("/api/sliders").then((res) => setSliders(res.data));
    API.get("/api/blogs").then((res) => setBlogs(res.data));
    API.get("/api/videos").then((res) => setVideo(res.data[0]));

    // Show popup after 3 seconds
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {/* Hero Slider Section */}
      <header className="hero">
        <div className="hero-sliders">
          {sliders.map((slide) => (
            <div key={slide.id} className="slide">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Video Section */}
      {video && (
        <section className="video-section">
          <h2>{video.title}</h2>
          <div className="video-container">
            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* League-style Popup Contact Form */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-league">
            <button
              className="popup-close"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>
            <h3>Contact Us</h3>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      )}

      {/* Blogs Section */}
      <footer className="blogs">
        <h2>Latest Blogs</h2>
        <div className="blog-list">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-item">
              <h4>{blog.title}</h4>
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
