"use client";

import { useState } from "react";
import styles from "./DataInputForm.module.css";

export default function DataInputForm({ setLabels, setValues }: any) {
  const [monthYear, setMonthYear] = useState("");
  const [value, setValue] = useState("");

  const [tempLabels, setTempLabels] = useState<string[]>([]);
  const [tempValues, setTempValues] = useState<number[]>([]);

  const addData = () => {
    if (!monthYear || !value) return;

    // monthYear format: YYYY-MM
    const [year, month] = monthYear.split("-");

    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    const label = `${monthNames[Number(month) - 1]} ${year}`;

    setTempLabels([...tempLabels, label]);
    setTempValues([...tempValues, Number(value)]);

    setMonthYear("");
    setValue("");
  };

  const generateCharts = () => {
    setLabels(tempLabels);
    setValues(tempValues);
  };

  return (
    <div>
      <h2 className={styles.formTitle}>Enter Data</h2>

      <div className={styles.formRow}>
        {/* Month + Year */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Year & Month</label>
          <input
            className={styles.input}
            type="month"
            value={monthYear}
            onChange={(e) => setMonthYear(e.target.value)}
          />
        </div>

        {/* Value */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Value</label>
          <input
            className={styles.input}
            type="number"
            placeholder="e.g. 150"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button className={styles.button} onClick={addData}>
          Add Data
        </button>
      </div>

      <button
        className={`${styles.button} ${styles.generateBtn}`}
        onClick={generateCharts}
      >
        Generate Charts
      </button>
    </div>
  );
}
