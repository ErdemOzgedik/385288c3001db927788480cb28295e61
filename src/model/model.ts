export default interface IProductContext {
  products: Product[];
  addProducts?(products: Product[]): void;
}
export interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
}
export interface ProductsResponse {
  products: Product[];
}
export interface ProductResponse {
  product: Product;
}
