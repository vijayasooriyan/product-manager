"use client";

import { useEffect, useState } from "react";
import { getProducts, saveProducts } from "./utils/storage";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [editProduct, setEditProduct] = useState<any>(null);
  const [dark, setdark] = useState(false);
  const [search,setSearch] = useState("");

  useEffect(()=> {
    document.documentElement.classList.toggle("dark", dark);
  },[dark])

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
      Product Management Dashboard
    </h1>
    <button
      onClick={() => setdark(!dark)}
      className="mb-6 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Toggle Dark Mode
    </button>
    
    <input
      placeholder="Search Products..."
      className="border p-2 w-full mb-4"
      onChange={(e) => setSearch(e.target.value)}
    />


    {/* Form */}
    <ProductForm 
      addProduct={addProduct}
      editProduct={editProduct}
      updateProduct={updateProduct}
    />

    {/* List */}
    <ProductList 
      products={filteredProducts} 
      deleteProduct={deleteProduct}
      setEditProduct={setEditProduct}
    />

    
  </div>
</div>
  );
}