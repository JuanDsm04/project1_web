import Button from '../Button/Button'
import styles from './Keyboard.module.css'

export default function Keyboard({ onButtonClick }) {
  const row1 = ['%', '+/-', 'C', 'AC']
  const row2 = ['7', '8', '9', '+']
  const row3 = ['4', '5', '6', '-']
  const row4 = ['1', '2', '3', '*']
  const row5 = ['0', '.', '=', '/']

  return (
    <div className={styles.keyboard}>
      <div className={styles.row}>{row1.map(b => <Button key={b} label={b} onClick={onButtonClick} />)}</div>
      <div className={styles.row}>{row2.map(b => <Button key={b} label={b} onClick={onButtonClick} />)}</div>
      <div className={styles.row}>{row3.map(b => <Button key={b} label={b} onClick={onButtonClick} />)}</div>
      <div className={styles.row}>{row4.map(b => <Button key={b} label={b} onClick={onButtonClick} />)}</div>
      <div className={styles.row}>{row5.map(b => <Button key={b} label={b} onClick={onButtonClick} />)}</div>
    </div>
  )
}