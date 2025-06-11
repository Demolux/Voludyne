import Image from 'next/image';
import introBanner from '../public/voludyne-banner.svg';

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
          zIndex: 0
        }}
      >
        <source src="/intro-video.mp4" type="video/mp4" />
      </video>

      {/* Titel-Overlay */}
      <div className="intro-title">
        <h1>VOLUDYNE</h1>
        <p>High-Speed 3D Printing. Reinvented.</p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        ⬇
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          font-size: 3.5rem;
          animation: bounce 2s infinite;
          color: white;
          opacity: 0.9;
          text-shadow: 0 0 25px rgba(255, 255, 255, 1);
          transition: opacity 0.3s;
        }

        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 20px); }
        }

        .scroll-indicator:hover {
          opacity: 1;
        }

        .intro-title {
          position: absolute;
          z-index: 10;
          top: 35%;
          width: 100%;
          text-align: center;
          color: white;
          text-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
        }

        .intro-title h1 {
          font-size: 4.5rem;
          font-family: 'Share Tech Mono', monospace;
          margin: 0;
          letter-spacing: 0.08em;
        }

        .intro-title p {
          font-size: 2rem;
          font-weight: 300;
          margin-top: 1rem;
        }
      `}</style>
    </section>
  );
}
