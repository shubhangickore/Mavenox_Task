// frontend/components/Footer.js
import React, { useEffect, useState } from 'react';

export default function Footer({ apiBase }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${apiBase}/blogs`)
      .then(res => res.json())
      .then(data => setBlogs(data.blogs || []))
      .catch(err => console.error(err));
  }, [apiBase]);

  return (
    <footer style={{ padding: '2rem', background: '#0b1220', color: 'white' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h3>Blogs & News</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem' }}>
          {blogs.map(b => (
            <article key={b.id} style={{ background: '#091022', padding: '1rem', borderRadius: 6 }}>
              <h4 style={{ margin: '0 0 .5rem 0' }}>{b.title}</h4>
              <p style={{ margin: 0, opacity: 0.85 }}>{b.excerpt}</p>
              <small style={{ display: 'block', marginTop: '.5rem', opacity: .7 }}>{b.date}</small>
            </article>
          ))}
        </div>
        <p style={{ marginTop: '1rem', opacity: .8 }}>© {new Date().getFullYear()} Your Company</p>
      </div>
    </footer>
  );
}
