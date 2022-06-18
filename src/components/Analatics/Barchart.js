import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
const BarChart1 = ({ cities, field }) => {
  console.log(cities);
  const data = cities.transactions.map((city) => {
    return city.Name;
  });

  const values =
    field === 1
      ? cities.transactions.map((city) => {
          return city.rain;
        })
      : cities.transactions.map((city) => {
          return city.days;
        });

  console.log(data, "adta");
  return (
    <div
      style={{
        backgroundColor: "#E7F6FC",
        marginTop: "20px",
        marginLeft: "10px",
      }}
    >
      <Bar
        data={{
          labels: data,
          datasets: [
            {
              label: field === 1 ? "RainFall (in mm)" : "Days",
              data: values,
              backgroundColor: [
                "rgba(172,196,255, 1)",
                "rgba(172,196,255, 1)",
                "rgba(172,196,255, 1)",
                "rgba(172,196,255, 1)",
                "rgba(172,196,255, 1)",
                "rgba(172,196,255, 1)",
              ],
              borderColor: [
                "rgba(172,196,255, 1)",
                "rgba(172,196,255, 1)",
                "rgba(172,196,255, 1)",
                "rgba(172,196,255, 1)",
                "rgba(172,196,255, 1)",
                "rgba(172,196,255, 1)",
              ],
              borderWidth: 1,
              borderRadius: 20,
            },
          ],
        }}
        height={38}
        width={60}
        options={{
          maintainAspectRatio: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                display: false,
              },
              grid: {
                display: false,
              },
            },
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart1;
