// components/Banner.js
import { useEffect, useState } from 'react';
import Image from 'next/image';
import banner from '../public/voludyne-banner.svg'; // Passe den Dateinamen an!

export default function Banner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Sobald Komponente gemountet ist -> sichtbar (Trigger Animation)
    setVisible(true);
  }, []);

  return (
    <div style={{
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(-20px)',
      transition: 'opacity 1s ease, transform 1s ease',
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
