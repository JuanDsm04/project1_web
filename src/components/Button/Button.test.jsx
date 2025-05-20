import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import Button from './Button'

test('muestra el texto del label', () => {
  render(<Button label="+" onClick={() => {}} />)
  expect(screen.getByRole('button')).toHaveTextContent('+')
})

test('agrega clase "operator" si el label es un operador', () => {
  render(<Button label="*" onClick={() => {}} />)
  const button = screen.getByText('*')
  expect(button.className).toMatch(/operator/)
})

test('agrega clase "action" si el label es una acción', () => {
  render(<Button label="AC" onClick={() => {}} />)
  const button = screen.getByText('AC')
  expect(button.className).toMatch(/action/)
})