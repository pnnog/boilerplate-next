import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Footer from '.';

describe('<Footer />', () => {
  it('should render heading', () => {
    renderWithTheme(<Footer />);

    expect(
      screen.getByRole('heading', { name: /Footer/i }).parentNode
    ).toHaveStyle({ background: '#FFFFFF' });
  });
});
