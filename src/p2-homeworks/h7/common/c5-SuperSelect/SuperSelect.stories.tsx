import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import SuperSelect, { SuperSelectPropsType } from './SuperSelect';

export default {
  title: 'HW/SuperSelect',
  component: SuperSelect,
  args: {
    onChangeOption: action('Value SuperSelect changed'),
  },
} as Meta;

const Template: Story<SuperSelectPropsType> = (args) => (
  <SuperSelect {...args} />
);

export const SuperSelectExample = Template.bind({});
SuperSelectExample.args = {
  options: ['default', 'dark', 'red', 'some'],
};
