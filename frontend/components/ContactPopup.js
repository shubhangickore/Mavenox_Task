// frontend/components/ContactPopup.js
import React, { useEffect, useState } from 'react';

export default function ContactPopup({ apiBase }) {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000); // show after 3s
    return () => clearTimeout(timer);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${apiBase}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setStatus('sent');
      setVisible(false);
      console.log('Contact response', data);
    } catch (err) {
      setStatus('error');
      console.error(err);
    }
  };

  if (!visible) return null;
  return (
    <div className="contact-overlay">
      <div className="contact-box">
        <h3>Contact us</h3>
        <form onSubmit={submit}>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
          />
          <input
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
          />
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Message"
          />
          <div className="actions">
            <button type="button" onClick={() => setVisible(false)}>Close</button>
            <button type="submit">Send</button>
          </div>
        </form>
        {status === 'sending' && <p>Sending...</p>}
      </div>
    </div>
  );
}
