import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import Keyboard from './Keyboard'

test('renderiza todos los botones del teclado', () => {
  render(<Keyboard onButtonClick={() => {}} />)

  expect(screen.getByText('%')).toBeInTheDocument()
  expect(screen.getByText('9')).toBeInTheDocument()
  expect(screen.getByText('6')).toBeInTheDocument()
  expect(screen.getByText('2')).toBeInTheDocument()
  expect(screen.getByText('=')).toBeInTheDocument()
})

test('ejecuta onButtonClick con el label del botón clickeado', () => {
  const handleClick = vi.fn()
  render(<Keyboard onButtonClick={handleClick} />)

  const button = screen.getByText('AC')
  fireEvent.click(button)

  expect(handleClick).toHaveBeenCalledWith('AC')
})