import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Pagination from "./Pagination";
import "../styles/components/ProductList/productList.css";

interface Props {
  products: ShopifyBuy.Product[];
}
const ProductList = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  const count: number = Math.round(products.length / 9);

  const handleClick = (index: number): void => {
    setCurrent(index);
  };

  useEffect(() => {
    setCurrent(0);
  }, [products]);

  return (
    <>
      <div className="product-list">
        {products.slice(current * 9, (current + 1) * 9).map((product) => (
          <ListItem key={product.id} product={product} />
        ))}
      </div>
      {products.length > 9 ? (
        <Pagination count={count} current={current} handleClick={handleClick} />
      ) : null}
    </>
  );
};

export default ProductList;
