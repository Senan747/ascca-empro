import React, { useState, useEffect, useRef } from "react";
import ApexCharts from "react-apexcharts";
import data from "../../db.json";

const ChartComponent = () => {
  const chartRef = useRef(null);
  const [year, setYear] = useState(2023); // Set a default year or initialize it based on your requirements
  const [options, setOptions] = useState({
    chart: {
      type: "line",
    },
    series: [],
    xaxis: {
      categories: [
        "September",
        "October",
        "November",
        "December",
      ],
    },
  });

  const createChart = () => {
    const newOptions = {
      ...options,
      series: data.map((item) => ({
        name: item.car,
        data: item.year[year].visitedCount,
      })),
    };

    setOptions(newOptions);
  };

  useEffect(() => {
    createChart();
  }, [year]);

  return (
    <div className="card-body p-5 w-[700px]">
      <div>
        <label>Select Year:</label>
        <select
          onChange={(e) => setYear(parseInt(e.target.value))}
          value={year}
        >
          {/* Add options for available years */}
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div id="chart" className="chart-lg min-w-650">
        <ApexCharts
          options={options}
          series={options.series}
          type={options.chart.type}
          height={350} // Set height based on your design
          ref={chartRef}
        />
      </div>
    </div>
  );
};

export default ChartComponent;
