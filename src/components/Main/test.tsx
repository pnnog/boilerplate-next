import { render, screen } from '@testing-library/react';
import Main from '.';

const props = {
  title: 'Main Title'
};

describe('Main', () => {
  it('should render main title', () => {
    render(<Main {...props} />);
    expect(
      screen.getByRole('heading', {
        name: /Main Title/i
      })
    ).toBeInTheDocument();
  });

  it('should render title with blue color', () => {
    const { container } = render(<Main {...props} />);

    expect(screen.getByRole('heading', { name: props.title })).toHaveStyle({
      color: 'red'
    });

    expect(container.firstElementChild).toMatchSnapshot();
  });
});
