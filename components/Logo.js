import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/voludyne-banner.svg'; // <-- passe den Pfad ggf. an!

export default function Logo() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log('scrollY:', scrollY);
      if (scrollY > 100) { // 👉 Kleiner Wert zum Testen!
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial aufrufen
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showLogo) return null; // Nur zeigen wenn scrollY > 100px

  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <div style={{
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        zIndex: 1000,
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div style={{
          height: '60px',
          width: 'auto',
          display: 'flex',
          alignItems: 'center',
        }}>
          <Image
            src={logo}
            alt="Voludyne Logo"
            height={60}
            style={{ width: 'auto', height: '100%' }}
            priority
          />
        </div>
      </div>
    </Link>
  );
}
