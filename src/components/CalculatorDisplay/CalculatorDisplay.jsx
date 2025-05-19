import styles from './CalculatorDisplay.module.css';

export default function Display({ value }) {
  return (
    <div className={styles.display}>
      {value}
    </div>
  );
}