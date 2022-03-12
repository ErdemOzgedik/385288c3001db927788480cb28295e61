interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
  vendor: string;
  product_type: string;
  status: string;
  tags: string;
}

export interface IProductContext {
  products: ShopifyBuy.Product[];
  addProducts?(products: ShopifyBuy.Product[]): void;
}

export default Product;
