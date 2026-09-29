import { products } from "../data/products";

export function searchProducts(searchTerm) {
  const search = searchTerm.trim().toLowerCase();

  if (!search) {
    return [];
  }

  return products.filter((product) =>
    product.name.toLowerCase().includes(search) ||
    product.category.toLowerCase().includes(search)
  );
}