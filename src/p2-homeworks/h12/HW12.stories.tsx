import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import HW12 from './HW12';
import { ReduxStoreProviderDecorator } from '../../stories/ReduxStoreProviderDecorator';

export default {
  title: 'HW/Theme',
  component: HW12,
  decorators: [ReduxStoreProviderDecorator],
} as Meta;

const Template: Story = (args) => <HW12 {...args} />;

export const ThemeExample = Template.bind({});
ThemeExample.args = {};
