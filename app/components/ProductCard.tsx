interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  deleteProduct: (id: number) => void;
  setEditProduct: (product: Product) => void;
}

export default function ProductCard({ product, deleteProduct, setEditProduct }: ProductCardProps) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{product.name}</h2>
      <p>${product.price}</p>
      <p className="text-sm">{product.description}</p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => setEditProduct(product)}
          className="bg-yellow-400 px-2 py-1"
        >
          Edit
        </button>
        <button
          onClick={() => deleteProduct(product.id)}
          className="bg-red-500 text-white px-2 py-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
}