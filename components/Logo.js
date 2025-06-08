import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/voludyne-banner.svg';

export default function Logo() {
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
            height={60}  // Nur Höhe fixiert, Breite automatisch
            style={{ width: 'auto', height: '100%' }}
            priority
          />
        </div>
      </div>
    </Link>
  );
}
