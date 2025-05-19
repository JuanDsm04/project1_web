import { fn } from '@storybook/test';
import Display from './CalculatorDisplay';

export default {
  title: 'Calculator/Display',
  component: Display,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
  },
  args: {
    value: '0',
  },
};

const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '0',
};

export const ShowingNumber = Template.bind({});
ShowingNumber.args = {
  value: '12345',
};

export const ShowingError = Template.bind({});
ShowingError.args = {
  value: 'ERROR',
};