import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

 
export default function HomeButton() {
  return (
    <button className="hover:bg-emerald-500 text-emerald-500 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
      <FontAwesomeIcon className="fill-current w-6 h-6 mr-2" icon={faShopify} />
      <Link href={"/"}>Online Shop</Link>
    </button>
  );
}