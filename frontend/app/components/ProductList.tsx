import Card from "./Card";

interface ProductListProps {
  products: Product[];
}

export default function ProductList (props: ProductListProps) {
  return (
    <div>
      {props.products && props.products.map((product => (
        <Card key={product.id} product={product} />
      )))}
    </div>
  );
};
