export default function Button({ label, onClick }) {
  let className = '';

  const operators = ['+', '-', '*', '/', '%', '+/-'];
  const actions = ['C', 'AC'];

  if (operators.includes(label)) {
    className = 'operator';
  } else if (actions.includes(label)) {
    className = 'action';
  }

  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}