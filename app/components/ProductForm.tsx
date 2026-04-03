"use client";
import { useState, useEffect, FormEvent } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

interface ProductFormProps {
  addProduct: (product: Product) => void;
  editProduct: Product | null;
  updateProduct: (product: Product) => void;
}

export default function ProductForm({ addProduct, editProduct, updateProduct }: ProductFormProps) {
  const [form, setForm] = useState<Product>({
    id: 0,
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (editProduct) setForm(editProduct);
  }, [editProduct]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editProduct) {
      updateProduct({ ...form, id: editProduct.id });
    } else {
      addProduct({ ...form, id: Date.now() });
    }

    setForm({ name: "", price: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-6">
      <input
        className="border p-2 w-full"
        placeholder="Product Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <textarea
        className="border p-2 w-full"
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button className="bg-blue-500 text-white px-4 py-2">
        {editProduct ? "Update" : "Add"} Product
      </button>
    </form>
  );
}