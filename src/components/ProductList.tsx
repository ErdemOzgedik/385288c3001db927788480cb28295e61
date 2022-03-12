import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Pagination from "./Pagination";
import "../styles/components/ProductList/productList.css";

const SHOW_COUNT = 9;

interface Props {
  products: ShopifyBuy.Product[];
}

const ProductList = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  const count: number = Math.round(products.length / SHOW_COUNT);

  const handleClick = (index: number): void => {
    setCurrent(index);
  };

  useEffect(() => {
    setCurrent(0);
  }, [products]);

  return (
    <>
      <div className="product-list">
        {products
          .slice(current * SHOW_COUNT, (current + 1) * SHOW_COUNT)
          .map((product) => (
            <ListItem key={product.id} product={product} />
          ))}
      </div>
      {products.length > SHOW_COUNT ? (
        <Pagination count={count} current={current} handleClick={handleClick} />
      ) : null}
    </>
  );
};

export default ProductList;
