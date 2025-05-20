
import { fn } from '@storybook/test'
import Keyboard from './Keyboard'

export default {
  title: 'Calculator/Keyboard',
  component: Keyboard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onButtonClick: { action: 'button clicked' },
  },
  args: {
    onButtonClick: fn(),
  },
}

const Template = (args) => <Keyboard {...args} />

export const Default = Template.bind({})
Default.args = {
  onButtonClick: fn(),
}