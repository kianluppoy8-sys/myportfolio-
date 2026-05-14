import React, { useEffect, useState } from 'react';
import './Zh3nPage.css';

export default function Zh3nPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="zh3n-root">
      <div className={`zh3n-content ${visible ? 'zh3n-visible' : ''}`}>
        <p className="zh3n-line">
          And when I am consumed by the corruption and the darker side of myself,
        </p>
        <p className="zh3n-line zh3n-line-2">
          I hope you will not tolerate me.
        </p>
      </div>
      <a href="/" className="zh3n-back">← back</a>
    </div>
  );
}
