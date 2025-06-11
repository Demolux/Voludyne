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
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src="/intro-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay Text */}
      <div className="intro-title">
        <h1>Unmatched Speed. Uncompromised Detail.</h1>
        <p>Voludyne delivers large-format FDM printing with record throughput — without going coarse.</p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">⬇</div>

      <style jsx>{`
        .intro-title {
          position: absolute;
          z-index: 1000;
          top: 32%;
          width: 100%;
          text-align: center;
          color: white;
          text-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
          padding: 0 2rem;
        }

        .intro-title h1 {
          font-size: 3rem;
          font-family: 'Share Tech Mono', monospace;
          margin: 0;
          letter-spacing: 0.03em;
        }

        .intro-title p {
          font-size: 1.5rem;
          font-weight: 300;
          margin-top: 1rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10000;
          font-size: 3.5rem;
          animation: bounce 2s infinite;
          color: white;
          opacity: 0.85;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
          transition: opacity 0.3s;
        }

        .scroll-indicator:hover {
          opacity: 1;
        }

        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 20px); }
        }
      `}</style>
    </section>
  );
}
