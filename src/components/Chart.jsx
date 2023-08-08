import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ arr = [], days }) {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    if (days === "24h") {
      date.push(new Date(arr[i][0]).toLocaleTimeString());
    } else {
      date.push(new Date(arr[i][0]).toLocaleDateString());
    }
    prices.push(arr[i][1]);
  }

  const colorByPriceChange = prices.map((price, index) => {
    if (index > 0) {
      return price > prices[index - 1] ? "green" : "red";
    }
    return "green"; // Default color for the first point
  });

  const chartData = {
    labels: date,
    datasets: [
      {
        label: "Price in Rupees",
        data: prices,
        borderColor: colorByPriceChange,
        backgroundColor: "transparent",
        pointBackgroundColor: colorByPriceChange,

      },
    ],
  };

  return (
    <Line
      options={{
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          line: {
            borderWidth: 2, // Increase line width for better visibility
            tension: 0.3, // Adjust line curve tension
          },
        },
        scales: {
          x: {
            ticks: {
              color: "white", // Change X-axis label color here
            },
            grid: {
              color: "rgba(255, 255, 255, 0.1)", // Change the grid line color
            },
          },
          y: {
            ticks: {
              color: "white", // Change Y-axis label color here
            },
            grid: {
              color: "rgba(255, 255, 255, 0.1)", // Change the grid line color
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Price Chart",
            color: "white",
            font: {
              size: 16,
            },
          },
          legend: {
            display: false,
          },
        },
      }}
      data={chartData}
    />
  );
}

export default Chart;
