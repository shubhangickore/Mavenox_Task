// frontend/components/Hero.js
import React from 'react';
import Slider from './Slider';

export default function Hero({ sliders }) {
  return (
    <header>
      {/* Hero section (dd.nyc style) */}
      <div className="hero-text">
        <h1>MAVENOX</h1>
        <p>This was my first task</p>
      </div>

      {/* Sliders section */}
      <div style={{ padding: '1.5rem', background: '#fff' }}>
        <h2 style={{ marginBottom: '1rem' }}>Featured Sliders</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {sliders && sliders.length ? (
            sliders.slice(0, 5).map((group) => (
              <div key={group.id} style={{ border: '1px solid #eee', padding: '1rem' }}>
                <h3>{group.title}</h3>
                <Slider items={group.items || []} />
              </div>
            ))
          ) : (
            <p>Loading sliders...</p>
          )}
        </div>
      </div>
    </header>
  );
}
