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
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No products found 🚫
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
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