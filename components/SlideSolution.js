// components/SlideSolution.js
export default function SlideSolution() {
  return (
    <section style={{
      height: '100vh',
      scrollSnapAlign: 'start',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '5%',
      backgroundColor: '#0e0e0e',
      color: 'white'
    }}>
      <div style={{ flex: 1, paddingRight: '5%' }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>
          What if you didn’t have to choose?
        </h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '1.2rem' }}>
          Voludyne was engineered to maximize all three: detail, speed, and size.
          Without compromise.
        </p>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8em' }}>
          <li>Extreme acceleration, not just travel speed</li>
          <li>Segmented bed & dynamic leveling – first layer perfection</li>
          <li>Print tiny features in massive builds</li>
          <li>Small nozzles, high-tech polymers, open-source control</li>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        {/* Placeholder Animation or Exploded View */}
        <Image
          src="/voludyne-exploded.png"
          alt="Exploded view of printer"
          width={600}
          height={500}
          style={{ borderRadius: '12px', boxShadow: '0 0 30px rgba(0,255,255,0.2)' }}
        />
      </div>
    </section>
  );
}
