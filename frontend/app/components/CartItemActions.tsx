import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cart.slice';

interface CartItemActionsProps {
  itemId: number;
}

export default function CartItemActions (props: CartItemActionsProps) {
  const dispatch = useDispatch();

  return (
    <div className="w-1/5 flex justify-between items-center">
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        onClick={() => dispatch(incrementQuantity(props.itemId))}
      >
        +
      </button>
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        onClick={() => dispatch(decrementQuantity(props.itemId))}
      >
        -
      </button>
      <button
        className="px-3 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600"
        onClick={() => dispatch(removeFromCart(props.itemId))}
      >
        x
      </button>
    </div>
  );
}