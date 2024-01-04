import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Products from './products';

describe('<Products />', () => {
  test('it should mount', () => {
    render(<Products />);
    
    const products = screen.getByTestId('Products');

    expect(products).toBeInTheDocument();
  });
});