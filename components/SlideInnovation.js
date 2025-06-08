// components/SlideInnovation.js

export default function SlideInnovation() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>🛠️ Unsere Innovation</h1>
      <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px' }}>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🆕 Doppelschichtiges, masseoptimiertes H-Bot-System</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🆕 Skalierbare Kinematik für hohe Geschwindigkeiten</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🆕 Segmentiertes, verstellbares Heizbett zur Energieeinsparung</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🆕 Modulares Design: Erweiterungen einfach integrierbar</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🆕 Parametrische CAD-Modelle für verschiedene Bauvolumen</li>
      </ul>
    </section>
  );
}
