// components/SlideSolution.js

export default function SlideSolution() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>💡 Unsere Lösung</h1>
      <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px' }}>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>✅ Hohe Druckgeschwindigkeit (1000 mm/s) und Beschleunigung (50.000 mm/s²)</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>✅ Bauvolumen über 4 Kubikmeter</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>✅ Segmentiertes, energieeffizientes Heizbett</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>✅ Modulare Erweiterbarkeit (z.B. Multi-Extruder, beheizter Bauraum)</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>✅ Materialvielfalt und Zukunftssicherheit durch skalierbare Kinematik</li>
      </ul>
    </section>
  );
}
