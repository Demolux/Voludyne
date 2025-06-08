// components/Banner.js
import Image from 'next/image';
import banner from '../public/voludyne-banner.svg'; // oder passe deinen Dateinamen an!

export default function Banner() {
  return (
    <div style={{
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image
        src={banner}
        alt="Voludyne Banner"
        height={120}  // Höhe fixiert
        style={{ width: 'auto', height: '120px' }}
        priority
      />
    </div>
  );
}
