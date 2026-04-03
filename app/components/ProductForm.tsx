"use client";
import { useState, useEffect, FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

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

    if (!form.name.trim()){
      toast.error("Product name is required");
      return;
    }
    if(!form.price || isNaN(Number(form.price))){
      toast.error("Valid price is required");
      return;
    }

    if (editProduct) {
      updateProduct({ ...form, id: editProduct.id });
      toast.success("Product updated successfully");
    } else {
      addProduct({ ...form, id: Date.now() });
      toast.success("Product added successfully");
    }

    setForm({ id: 0, name: "", price: "", description: "" });
  };

  return (
    <Card className="p-6 mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <Input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            step="0.01"
          />
        </div>
        <div>
          <textarea
            className="border border-input rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full">
          {editProduct ? "Update" : "Add"} Product
        </Button>
      </form>
    </Card>
  );
}