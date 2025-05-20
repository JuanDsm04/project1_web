import { fn } from '@storybook/test'
import Button from './Button'

export default {
  title: 'Calculator/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    onClick: fn(),
  },
}

export const Digit = {
  args: {
    label: '7',
  },
}

export const Operator = {
  args: {
    label: '+',
  },
}

export const Action = {
  args: {
    label: 'AC',
  },
}