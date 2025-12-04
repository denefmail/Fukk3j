import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('');

  async function generate() {
    setStatus('Generating...');
    const res = await fetch('/autoapp-builder/api/generate', { method: 'POST' });
    const data = await res.json();
    setStatus(JSON.stringify(data, null, 2));
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1>Autoapp Builder</h1>
      <p>A small UI to generate starter projects from templates.</p>
      <button onClick={generate}>Generate nextjs-app</button>
      <pre style={{ whiteSpace: 'pre-wrap', marginTop: 16 }}>{status}</pre>
    </div>
  );
}