import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Card from '../Card/Card';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartForm = () => {
  const [chartType, setChartType] = useState('bar');
  const [label, setLabel] = useState('');
  const [data, setData] = useState('');
  const [chartData, setChartData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataArray = data.split(',').map(Number);
    setChartData({
      labels: label.split(','),
      datasets: [
        {
          label: 'My Dataset',
          data: dataArray,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <div>
      <button onClick={() => setChartData(null)}>Add Chart</button>
      {!chartData && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Chart Type:</label>
            <input type="text" value={chartType} onChange={(e) => setChartType(e.target.value)} />
          </div>
          <div>
            <label>Label:</label>
            <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
          </div>
          <div>
            <label>Data:</label>
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
          </div>
          <button type="submit">Create Chart</button>
        </form>
      )}
      {chartData && (
        <Card>
          <Bar data={chartData} />
        </Card>
      )}
    </div>
  );
};

export default ChartForm;
