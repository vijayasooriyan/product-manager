"use client";

import { useEffect, useState } from "react";
import { getProducts, saveProducts } from "./utils/storage";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [editProduct, setEditProduct] = useState<any>(null);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const addProduct = (product: any) => {
    const updated = [...products, product];
    setProducts(updated);
    saveProducts(updated);
  };

  const deleteProduct = (id: number) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveProducts(updated);
  };

  const updateProduct = (updatedProduct: any) => {
    const updated = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(updated);
    saveProducts(updated);
    setEditProduct(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Manager</h1>

      <ProductForm
        addProduct={addProduct}
        editProduct={editProduct}
        updateProduct={updateProduct}
      />

      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        setEditProduct={setEditProduct}
      />
    </div>
  );
}