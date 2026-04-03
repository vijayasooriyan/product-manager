import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

interface ProductListProps {
  products: Product[];
  deleteProduct: (id: number) => void;
  setEditProduct: (product: Product) => void;
}

export default function ProductList({ products, deleteProduct, setEditProduct }: ProductListProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {products.map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
          setEditProduct={setEditProduct}
        />
      ))}
    </div>
  );
}