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
      }}>
        <Image src={logo} alt="Voludyne Logo" width={60} height={60} />
      </div>
    </Link>
  );
}
