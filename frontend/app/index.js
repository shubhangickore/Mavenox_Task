import { useEffect, useState } from "react";

export default function Home() {
  const [sliders, setSliders] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/sliders")
      .then(res => res.json())
      .then(data => setSliders(data));

    fetch("http://localhost:5000/api/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      <h1>Hero Section (Slider)</h1>
      <div>
        {sliders.map(s => (
          <div key={s.id}>
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      <h1>Video Section</h1>
      <video width="400" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>

      <h1>Footer (Blogs)</h1>
      {blogs.map(b => (
        <div key={b.id}>
          <h3>{b.title}</h3>
          <p>{b.content}</p>
        </div>
      ))}
    </div>
  );
}
