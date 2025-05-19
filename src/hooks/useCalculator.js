import { useState } from 'react'

export default function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [acc, setAcc] = useState(null)
  const [op, setOp] = useState(null)
  const [clearNext, setClearNext] = useState(false)

  const isError = val => val < 0 || val > 999999999 || val.toString().length > 9

  const compute = (a, b, o) => {
    const result = {
      '+': a + b,
      '-': a - b,
      '*': a * b,
      '/': b === 0 ? 'ERROR' : a / b,
      '%': a % b
    }[o]
    return isError(result) ? 'ERROR' : result.toString().slice(0, 9)
  }

  const handleButtonClick = btn => {
    if (btn === '=') {
      if (acc !== null && op) {
        const result = compute(Number(acc), Number(display), op)
        setDisplay(result)
        setAcc(null)
        setOp(null)
        setClearNext(true)
      }
      return
    }

    if (btn === 'AC') {
      setDisplay('0')
      setAcc(null)
      setOp(null)
      setClearNext(false)
      return
    }

    if (btn === 'C') {
      setDisplay('0')
      setClearNext(false)
      return
    }


    if ('+-*/%'.includes(btn)) {
      if (acc !== null && op) {
        const result = compute(Number(acc), Number(display), op)
        setAcc(result === 'ERROR' ? null : Number(result))
        setDisplay(result)
        setClearNext(true)
      } else {
        setAcc(Number(display))
        setClearNext(true)
      }
      setOp(btn)
      return
    }

    if (btn === '+/-') {
      const negated = display.startsWith('-') ? display.slice(1) : '-' + display
      if (negated.length <= 9) setDisplay(negated)
      return
    }

    if (btn === '.') {
      if (!display.includes('.') && display.length < 9) setDisplay(display + '.')
      return
    }

    if (display === 'ERROR') {
      setDisplay(btn)
      setClearNext(false)
      return
    }

    if (clearNext) {
      setDisplay(btn)
      setClearNext(false)
    } else {
      if (display.length < 9) setDisplay(display === '0' ? btn : display + btn)
    }
  }

  return { display, handleButtonClick }
}