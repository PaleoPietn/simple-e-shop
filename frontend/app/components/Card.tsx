import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import AddToCartButton from './AddToCartButton';

interface CardProps {
  product: Product;
}

export default function Card(props: CardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(props.product));
    console.log(props.product.description);
  };

  return (
    <div className="flex bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden w-full my-8">
      <div className="w-1/4 h-50 object-cover">
        <img
          src={props.product.thumbnail}
          alt={props.product.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4 w-2/3 flex flex-col justify-between">
        <div>
          <h3 className="text-gray-900 font-semibold text-lg">{props.product.title}</h3>
          <p className="text-gray-600 mt-2 whitespace-normal">{props.product.description}</p>
        </div>
        <div>
          <p className="text-gray-900 text-xl">${props.product.price}</p>
          <div className="mt-4">
            <AddToCartButton onClick={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}
