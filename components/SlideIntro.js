import Image from 'next/image';
import introBanner from '../public/voludyne-banner.svg';
import introVideo from '../public/intro-video.mp4';

export default function SlideIntro() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
        src="/intro-video.mp4"
        type="video/mp4"
      />

      {/* Banner Logo */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
      }}>
        <Image
          src={introBanner}
          alt="Voludyne Banner"
          height={150}
          style={{ width: 'auto', height: '150px' }}
          priority
        />
      </div>

      {/* Scroll Down Testindikator */}
		<div style={{
		  position: 'absolute',
		  bottom: '2rem',
		  left: '50%',
		  transform: 'translateX(-50%)',
		  zIndex: 10000,
		  textAlign: 'center',
		  color: 'red',
		  backgroundColor: 'white',
		  padding: '1rem',
		  fontSize: '1.5rem',
		}}>
		  👇 SCROLL
		</div>
    </section>
  );
}
