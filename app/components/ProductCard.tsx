import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
    <Card className="p-4 hover:shadow-lg transition">
      <h2 className="font-bold text-lg mb-2">{product.name}</h2>
      <p className="text-xl font-semibold text-green-600 mb-2">${product.price}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>

      <div className="flex gap-2 mt-4">
        <Button
          variant="outline"
          onClick={() => setEditProduct(product)}
          className="flex-1"
        >
          Edit
        </Button>
        <Button
          variant="destructive"
          onClick={() => deleteProduct(product.id)}
          className="flex-1"
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}