import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function SlideProblem() {
  const data = {
    labels: [
      'Build Volume',
      'Print Throughput',
      'Print Resolution',
      'Reliability',
      'Design Freedom',
    ],
    datasets: [
      {
        label: 'Voludyne',
        data: [4, 4, 5, 5, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
      {
        label: 'FDM Competitor',
        data: [1, 2, 2, 3, 4],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Pellet Printer',
        data: [5, 5, 1, 3, 1],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
          display: false,
        },
        pointLabels: {
          font: {
            size: 16,
          },
          color: '#eee',
        },
        grid: {
          color: '#444',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#eee',
          font: {
            size: 14,
          },
        },
      },
    },
  };

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
          Large-scale 3D printing without trade-offs
        </h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '1.2rem' }}>
          Most solutions for industrial-scale prints force you to choose:
        </p>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8em' }}>
          <li>Fine details → extremely long print times</li>
          <li>Fast prints → coarse resolution and limited design</li>
          <li>Pellet extrusion → fast but unreliable and imprecise</li>
          <li>High travel speed ≠ high throughput</li>
          <li>Maintenance-heavy and time-consuming setup</li>
        </ul>
      </div>

      <div style={{ flex: 1, maxWidth: '600px' }}>
        <Radar data={data} options={options} />
      </div>
    </section>
  );
}
