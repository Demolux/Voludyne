import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/voludyne-banner.svg'; // Passe deinen Pfad an

export default function Logo() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.5;
      console.log(`scrollY: ${scrollY}, triggerPoint: ${triggerPoint}`); // ✅ Debug Ausgabe
      if (scrollY > triggerPoint) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    // Sicherstellen dass Event existiert:
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // einmal initial aufrufen, falls schon gescrollt
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Statt null, testweise leeres Div:
  if (!showLogo) {
    return <div style={{ height: '60px', width: '60px' }} />;
  }

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
