import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto"; // Import Chart from 'chart.js/auto' instead of 'chart.js'

// Set global configuration
Chart.defaults.elements.line.tension = 0.4;
Chart.defaults.elements.point.radius = 0;
//eslint-disable-next-line
function GraphChart({ data, graphName }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, // Set this property to true to always start the y-axis from 0
        ticks: {
          stepSize: 5,
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        title: {
          display: false,
          text: "Time",
          align: "center",
          font: {
            weight: "bold",
            color: "black",
          },
        },
      },
    },
    plugins: {
      title: {
        display: false,
        text: "  ",
        align: "start",
        font: {
          size: 20,
          weight: "bold",
          color: "black",
        },
      },
      legend: {
        display: false, // Hide the legend labels
      },
      datalabels: {
        align: "center",
        anchor: "center",
        color: "#000",
        font: {
          weight: "bold",
        },
        formatter: (value) => value, // Display the actual value as the label
      },
    },
    elements: {
      line: {
        fill: "start", // Fill the area below the line
        backgroundColor: "rgba(39, 135, 95, 0.8)", // Shadow-like shade color
        borderColor: "rgba(39, 135, 95, 0)", // Hide the line border
        tension: 0,
      },
      point: {
        radius: 6, // Adjust the size of the dot marker as needed
        hoverRadius: 8, // Adjust the size of the dot marker on hover as needed
        pointStyle: "circle", // Use 'circle' for a dot marker
      },
    },
  };
  //eslint-disable-next-line
  //data.datasets[0].borderColor = "red";
  return (
    <div className="bg-white rounded-xl  px-0 sm:px-5 w-[100%] md:h-[17rem] sm:h-[15rem]">
      <Line data={data} options={options} />
    </div>
  );
}
export default GraphChart;
