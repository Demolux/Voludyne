// components/ScrollProgress.js
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      right: '1rem',
      top: '0',
      width: '4px',
      height: '100vh',
      backgroundColor: '#eee',
      zIndex: 999,
    }}>
      <div style={{
        width: '100%',
        height: `${scrollProgress}%`,
        backgroundColor: '#333',
        transition: 'height 0.2s ease',
      }} />
    </div>
  );
}
