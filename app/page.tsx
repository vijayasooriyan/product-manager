"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getProducts, saveProducts } from "./utils/storage";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [editProduct, setEditProduct] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const addProduct = (product: any) => {
    const updated = [...products, product];
    setProducts(updated);
    saveProducts(updated);
    setDialogOpen(false);
    toast.success("Product added successfully! ✨");
  };

  const deleteProduct = (id: number) => {
    const productName = products.find(p => p.id === id)?.name || "Product";
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveProducts(updated);
    toast.success(`${productName} deleted successfully 🗑️`);
  };

  const updateProduct = (updatedProduct: any) => {
    const updated = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(updated);
    saveProducts(updated);
    setEditProduct(null);
    setDialogOpen(false);
    toast.success("Product updated successfully! ✅");
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleEditProduct = (product: any) => {
    setEditProduct(product);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Product Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setDark(!dark)}>
              {dark ? "☀️ Light" : "🌙 Dark"}
            </Button>
            <Dialog 
              open={dialogOpen} 
              onOpenChange={(open) => {
                setDialogOpen(open);
                if (!open) setEditProduct(null);
              }}
            >
              <DialogTrigger asChild>
                <Button>+ New Product</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>
                  {editProduct ? "Edit Product" : "Add New Product"}
                </DialogTitle>
                <ProductForm
                  addProduct={addProduct}
                  editProduct={editProduct}
                  updateProduct={updateProduct}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Search */}
        <Input
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* List */}
        <ProductList
          products={filteredProducts}
          deleteProduct={deleteProduct}
          setEditProduct={handleEditProduct}
        />
      </div>
    </div>
  );
}