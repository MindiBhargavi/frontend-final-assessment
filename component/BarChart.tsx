"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function BarChart({ labels, values }: any) {
  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            label: "Dataset",
            data: values,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
          },
        ],
      }}
    />
  );
}
