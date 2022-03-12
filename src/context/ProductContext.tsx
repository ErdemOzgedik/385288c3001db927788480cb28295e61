import React, { FC, useState } from "react";
import Product, { IProductContext } from "../model/model";

const defaultState = {
  products: [],
};

const ProductContext = React.createContext<IProductContext>(defaultState);

export const ProductProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<ShopifyBuy.Product[]>(
    defaultState.products
  );

  const addProducts = (products: ShopifyBuy.Product[]) => {
    setProducts([...products]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
