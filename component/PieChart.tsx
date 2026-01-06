"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function PieChart({ labels, values }: any) {
  return (
    <Pie
      data={{
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: [
              "#ff6384",
              "#36a2eb",
              "#ffce56",
              "#4bc0c0",
            ],
          },
        ],
      }}
    />
  );
}
