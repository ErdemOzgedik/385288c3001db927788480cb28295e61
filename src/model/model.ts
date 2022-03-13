export default interface IProductContext {
  products: ShopifyBuy.Product[];
  addProducts?(products: ShopifyBuy.Product[]): void;
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
