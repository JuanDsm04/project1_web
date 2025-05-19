import Display from './components/Display'
import Keyboard from './components/Keyboard'
import useCalculator from './hooks/useCalculator'

export default function App() {
  const calc = useCalculator()

  return (
    <div className="calculator">
      <Display value={calc.display} />
      <Keyboard onButtonClick={calc.handleButtonClick} />
    </div>
  )
}