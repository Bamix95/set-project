import { Bar } from "react-chartjs-2";
import style from "./charts.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
const Charts = ({ chartData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true, // Hide the x-axis
        grid: {
          drawBorder: false, // Remove y-axis border line
          drawOnChartArea: false, // Remove y-axis grid lines
        },
      },
      y: {
        display: false, // Hide the y-axis (numbers)
        grid: {
          drawBorder: false, // Remove y-axis border line
          drawOnChartArea: false, // Remove y-axis grid lines
        },
      },
    },
  };
  return (
    <div className={style.chartContainer}>
      <div className={style.chartActivity}>
        <p>Activity</p>
        <div className={style.chartTime}>
          <span>Day</span>
          <span>Week</span>
          <span>Month</span>
        </div>
      </div>
      <Bar
        data={chartData}
        options={options}
        height={180}
        className={style.bar}
      />
    </div>
  );
};

export default Charts;
