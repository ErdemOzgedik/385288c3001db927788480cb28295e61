import React, { useEffect, useState } from "react";
import "../styles/pages/Home/home.css";
import ProductList from "../components/ProductList";
import SearchField from "../components/SearchField";
import client from "../api/shopifyApi";
import LoadingHandle from "../components/LoadingHandle";

function Home() {
  const [products, setProducts] = useState<ShopifyBuy.Product[]>([]);
  const [term, setTerm] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    client.product
      .fetchAll()
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
                    return product.title.toLowerCase().includes(term);
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
