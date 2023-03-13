import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('<Footer />', () => {
  it('should render heading', () => {
    render(<Footer />);

    expect(
      screen.getByRole('heading', { name: /Footer/i })
    ).toBeInTheDocument();
  });
});
