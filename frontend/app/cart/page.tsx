'use client'

import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";
import CartItemActions from '../components/CartItemActions';
import CheckoutButton from '../components/CheckoutButton';

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="container mx-auto mt-10 text-gray-900">
      {cart.length === 0 ? (
        <h1 className="text-center text-3xl">Your Cart is Empty!</h1>
      ) : (
        <>
          <div className="hidden md:flex items-center justify-around border-b-2 py-4">
            <h2 className="md:flex items-center justify-start w-2/5">Product</h2>
            <h2 className="w-1/5 text-center">Price</h2>
            <h2 className="w-1/5 text-center">Quantity</h2>
            <h2 className="w-1/5 text-center">Add / Remove</h2>
            <h2 className="w-1/5 text-center">Total Price</h2>
          </div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start md:flex-row justify-around py-4 border-b md:border-none"
            >              
              <div className="flex items-center justify-start w-full md:w-2/5 mb-4 md:mb-0">
                <img src={item.thumbnail} alt={item.title} className="w-12 h-12 object-cover mr-4" />
                <p>{item.title}</p>
              </div>
              <p className="w-full md:w-1/5 text-left md:text-center">$ {item.price}</p>
              <p className="w-full md:w-1/5 text-left md:text-center">{item.quantity}</p>
              <div className="w-full md:w-1/5 flex justify-start md:justify-center mb-4 md:mb-0">
                <CartItemActions itemId={item.id} />
              </div>
              <p className="w-full md:w-1/5 text-left md:text-center">$ {item.quantity * item.price}</p>
            </div>
          ))}
          <div className="my-4 mx-10">
            <h2 className="text-right text-xl">Grand Total: $ {getTotalPrice()}</h2>
            <CheckoutButton/>
          </div>
        </>
      )}
    </div>
  );
}
