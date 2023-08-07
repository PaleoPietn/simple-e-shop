
interface AddToCartButtonProps {
  onClick: () => void;
}

export default function AddToCartButton (props: AddToCartButtonProps) {
  return (
    <button
      className="text-white bg-emerald-500 hover:bg-emerald-600 font-bold py-2 px-4 rounded focus:outline-none"
      onClick={e => {
        e.stopPropagation(); // prevent triggering card click
        props.onClick();
      }}
    >
      Add to Cart
    </button>
  );
};