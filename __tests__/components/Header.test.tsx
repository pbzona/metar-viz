import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header', () => {
  it('renders the header with correct text and styling', () => {
    render(<Header />);
    const headerElement = screen.getByText('Airport Weather Alert System');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.parentElement).toHaveClass('container mx-auto');
  });
});
