// components/SlideVision.js

export default function SlideVision() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>🚀 Unsere Vision</h1>
      <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px' }}>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🎯 Kurzfristig: Entwicklung und Markteintritt mit Flaggschiff-Modell</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🎯 EXIST-Förderung für Initialentwicklung und Aufbau der Marktpräsenz</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🎯 Langfristig: Technologieführer im Bereich großformatig FFF/FDM-Druck</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🎯 Aufbau eines flexiblen, modularen Produktportfolios</li>
        <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🎯 Internationale Expansion in wachstumsstarke Märkte</li>
      </ul>
    </section>
  );
}