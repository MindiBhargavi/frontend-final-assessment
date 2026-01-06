"use client";

import { useState } from "react";
import styles from "./DataInputForm.module.css";

export default function DataInputForm({ setLabels, setValues }: any) {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [value, setValue] = useState("");

  const [tempLabels, setTempLabels] = useState<string[]>([]);
  const [tempValues, setTempValues] = useState<number[]>([]);

  const addData = () => {
    if (!year || !month || !value) return;

    const label = `${month} ${year}`;

    setTempLabels([...tempLabels, label]);
    setTempValues([...tempValues, Number(value)]);

    setYear("");
    setMonth("");
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
        {/* Year */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Year</label>
          <input
            className={styles.input}
            type="number"
            placeholder="e.g. 2024"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        {/* Month */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Month</label>
          <input
            className={styles.input}
            placeholder="e.g. Jan"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
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
