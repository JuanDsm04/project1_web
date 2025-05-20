import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Display from './CalculatorDisplay'

test('muestra correctamente el valor recibido por props', () => {
  render(<Display value="12345" />)
  expect(screen.getByText('12345')).toBeInTheDocument()
})