import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

 
export default function CartButton() {
  const cart = useSelector((state: RootState) => state.cart);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <button className="hover:bg-emerald-500 text-emerald-500 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
      <FontAwesomeIcon className="fill-current w-6 h-6 mr-2" icon={faCartShopping} />
      <Link href={"/cart"}>
        <p>Cart ({getItemsCount()})</p> 
      </Link>
    </button>
  );
}