"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default function LineChart({ labels, values }: any) {
  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: "Trend",
            data: values,
            borderColor: "green",
          },
        ],
      }}
    />
  );
}
