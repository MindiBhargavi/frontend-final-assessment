"use client";

import { useState } from "react";
import styles from "./dashboard.module.css";

import DataInputForm from "../../component/DataInputForm";
import BarChart from "../../component/BarChart";
import PieChart from "../../component/PieChart";
import LineChart from "../../component/LineChart";

export default function DashboardPage() {
  const [labels, setLabels] = useState<string[]>([]);
  const [values, setValues] = useState<number[]>([]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📊 Dynamic Data Dashboard</h1>

      <div className={styles.card}>
        <DataInputForm setLabels={setLabels} setValues={setValues} />
      </div>

      {labels.length > 0 && (
        <div className={styles.chartGrid}>
          <div className={styles.card}>
            <BarChart labels={labels} values={values} />
          </div>

          <div className={styles.card}>
            <PieChart labels={labels} values={values} />
          </div>

          <div className={styles.card}>
            <LineChart labels={labels} values={values} />
          </div>
        </div>
      )}
    </div>
  );
}
