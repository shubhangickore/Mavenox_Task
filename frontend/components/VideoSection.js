// frontend/components/VideoSection.js
import React from 'react';

export default function VideoSection() {
  // TODO: Replace src with the video URL you extract from passionates.com (see instructions below)
  const embedSrc = "https://www.youtube.com/embed/REPLACE_WITH_VIDEO_ID";

  return (
    <section id="video" style={{ padding: '2rem', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h2>Watch the Video</h2>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src={embedSrc}
            title="Embedded video"
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              border: 0
            }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
