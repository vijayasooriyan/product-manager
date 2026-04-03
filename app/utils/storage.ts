export const getProducts = () => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("products");
  return data ? JSON.parse(data) : [];
};

export const saveProducts = (products: any[]) => {
  localStorage.setItem("products", JSON.stringify(products));
};