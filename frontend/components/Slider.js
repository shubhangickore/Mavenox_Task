// frontend/components/Slider.js
import React, { useEffect, useState } from 'react';

export default function Slider({ items = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 4000);
    return () => clearInterval(id);
  }, [items]);

  if (!items.length) return <div>No slides</div>;

  const curr = items[index];

  return (
    <div className="slider-wrapper">
      <button onClick={() => setIndex((index - 1 + items.length) % items.length)}>‹</button>
      <div className="slide">
        {curr.image && <img src={curr.image} alt={curr.title} />}
        <div>
          <h4>{curr.title}</h4>
          <p>{curr.desc}</p>
        </div>
      </div>
      <button onClick={() => setIndex((index + 1) % items.length)}>›</button>
    </div>
  );
}
