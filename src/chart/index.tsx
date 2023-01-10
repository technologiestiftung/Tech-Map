import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, RadialLinearScale, Filler, LineController, RadarController } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, RadialLinearScale, Filler, LineController, RadarController);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      type: 'line' as const,
      label: 'Programming Languages',
      data: [undefined, undefined, 200, -450, -600, 200, undefined, undefined],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      type: 'line' as const,
      label: 'Tools',
      data: [undefined, -100, -250, 0, 100, undefined, undefined],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      type: 'radar' as const,
      label: 'A',
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'black',
      backgroundColor: 'gray',
      borderWidth: 1,
    },
    {
      type: 'radar' as const,
      label: 'B',
      data: [400, 400, 400, 400, 400, 400, 400, 400],
      borderColor: 'black',
      backgroundColor: 'beige',
      borderWidth: 1,
    },
    {
      type: 'radar' as const,
      label: 'C',
      data: [600, 600, 600, 600, 600, 600, 600, 600],
      borderColor: 'black',
      backgroundColor: 'white',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    x: {
      beginAtZero: true,
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const Map = () => {
  return (
    <div>
      <h1>Here it comes</h1>
      <Chart type='line' data={data} options={options} />
    </div>
  );
};
