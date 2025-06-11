// components/SlideProblem.js
import Image from 'next/image';

export default function SlideProblem() {
  return (
    <section style={{
      height: '100vh',
      scrollSnapAlign: 'start',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '5%',
      backgroundColor: '#111',
      color: 'white'
    }}>
      <div style={{ flex: 1, paddingRight: '5%' }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>
          Large-format 3D printing comes at a price.
        </h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '1.2rem' }}>
          If you want big, detailed parts – something's gotta give:
        </p>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8em' }}>
          <li>Fast printing? Detail suffers.</li>
          <li>High resolution? Print forever.</li>
          <li>Huge volume? Say goodbye to reliability.</li>
          <li>Pellet printers? Quick, but imprecise and messy.</li>
          <li>FDM? Clean – but tradeoffs everywhere.</li>
        </ul>
      </div>

      <div style={{ flex: 1, maxWidth: '600px' }}>
        {/* Placeholder Visual */}
        <Image
          src="/pain-splitview.png"
          alt="Tradeoff visual: resolution vs speed"
          width={600}
          height={500}
          style={{ borderRadius: '12px', boxShadow: '0 0 30px rgba(255,255,255,0.2)' }}
        />
      </div>
    </section>
  );
}