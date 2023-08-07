import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';

import Cart from './page';
import { RootState } from "../redux/store";

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

type CartItemType = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  description: string;
};

describe('Cart Component', () => {
  it('should show "Your Cart is Empty!" message when cart is empty', () => {
    (useSelector as jest.Mock).mockImplementation((callback: (state: RootState) => CartItemType[]) => {
      return callback({ cart: [] });
    });
    render(Cart());
    expect(screen.getByText('Your Cart is Empty!')).toBeInTheDocument();
  });
});
