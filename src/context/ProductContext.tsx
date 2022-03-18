import React, { FC, useState } from "react";
import IProductContext, { Product } from "../model/model";

const defaultState = {
  products: [],
};

const ProductContext = React.createContext<IProductContext>(defaultState);

export const ProductProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(defaultState.products);

  const addProducts = (products: Product[]) => {
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
