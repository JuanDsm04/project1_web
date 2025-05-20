import styles from './Button.module.css'

export default function Button({ label, onClick }) {
  let className = styles.button

  const operators = ['+', '-', '*', '/', '%', '+/-']
  const actions = ['C', 'AC']

  if (operators.includes(label)) {
    className += ` ${styles.operator}`
  } else if (actions.includes(label)) {
    className += ` ${styles.action}`
  }

  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  )
}