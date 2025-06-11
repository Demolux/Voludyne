// components/SlideComparison.js
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

export default function SlideComparison() {
  const data = {
    labels: [
      'Build Volume',
      'Throughput',
      'Resolution',
      'Reliability',
      'Design Freedom'
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
          color: '#ddd',
        },
        grid: {
          color: '#333',
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
      justifyContent: 'center',
      padding: '5%',
      backgroundColor: '#101010',
      color: 'white'
    }}>
      <div style={{ maxWidth: '650px', width: '100%' }}>
        <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '1rem' }}>
          We don't just compete – we outperform.
        </h2>
        <Radar data={data} options={options} />
      </div>
    </section>
  );
}
