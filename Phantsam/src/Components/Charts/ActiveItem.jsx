import React, { useEffect, useRef } from 'react';
import Chart from 'chart .js';
const BarChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [
            {
              label: 'Data',
              data: [10, 20, 30], // Example data
              backgroundColor: 'rgba(75, 192, 192, 0.6)', // Example color
            },
          ],
        },
        options: {
          // Chart options
        },
      });
    }, []);
  
    return <canvas ref={chartRef} />;
  };
  
  export default BarChart;
  