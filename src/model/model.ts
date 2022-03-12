export default interface IProductContext {
  products: ShopifyBuy.Product[];
  addProducts?(products: ShopifyBuy.Product[]): void;
}