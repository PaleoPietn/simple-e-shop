import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

export default function CheckoutButtonProps () {
  const cart = useSelector((state: RootState) => state.cart);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  const handleCheckout = () => {
    const totalPrice = getTotalPrice();
    console.log(`Total price: $${totalPrice}`);
  };

  return (
    <button 
      className="bg-emerald-500 text-white px-5 py-2 rounded-lg mt-5 float-right focus:outline-none hover:bg-emerald-600"
      onClick={handleCheckout}
    >
      Checkout
    </button>
  );
}