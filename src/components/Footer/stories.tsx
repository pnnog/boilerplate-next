import { Meta, Story } from '@storybook/react';

import Footer from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    title: 'Título padrão para todos os stories caso nada seja passado',
    description:
      'Description padrão para todos os stories caso nada seja passado'
  }
} as Meta;

export const Basic: Story = (args) => <Footer {...args} />;
