import React, { useEffect, useState } from "react";
import client from "../api/shopifyApi";
import ProductList from "../components/ProductList";
import SearchField from "../components/SearchField";
import LoadingHandle from "../components/LoadingHandle";
import "../styles/pages/Home/home.css";

const PRODUCT_COUNT = 50;

function Home() {
  const [products, setProducts] = useState<ShopifyBuy.Product[]>([]);
  const [term, setTerm] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    client.product
      .fetchAll(PRODUCT_COUNT)
      .then((res) => {
        setProducts(res);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  useEffect(() => {
    setIsOpen(isError || isLoading);
  }, [isError, isLoading]);

  return (
    <div className="home">
      {isOpen ? (
        <LoadingHandle isError={isError} />
      ) : (
        <>
          <SearchField term={term} setTerm={setTerm} />
          <ProductList
            products={
              term.length > 1
                ? products.filter((product) => {
                    return product.title
                      .toLowerCase()
                      .includes(term.toLowerCase());
                  })
                : products
            }
          />
        </>
      )}
    </div>
  );
}

export default Home;
