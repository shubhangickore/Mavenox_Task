// frontend/pages/index.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import ContactPopup from '../components/ContactPopup';
import Footer from '../components/Footer';

export default function Home() {
  const [sliders, setSliders] = useState([]);
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;


  useEffect(() => {
    fetch(`${API}/sliders`)
      .then(res => res.json())
      .then(data => setSliders(data.sliders || []))
      .catch(err => console.error('Error fetching sliders', err));
  }, [API]);

  return (
    <>
      <Head>
        <title>Landing Page — Your Company</title>
        <meta name="description" content="Landing page built as per assignment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph */}
        <meta property="og:title" content="Landing Page — Your Company" />
        <meta property="og:description" content="Landing page built as per assignment." />
        <meta property="og:type" content="website" />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Landing Page — Your Company",
              "url": "http://localhost:3000"
            })
          }}
        />
      </Head>

      <Hero sliders={sliders} />
      <VideoSection />
      <Footer apiBase={API} />
      <ContactPopup apiBase={API} />
    </>
  );
}
