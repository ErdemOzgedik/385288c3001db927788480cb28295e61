import React, { useEffect, useState } from "react";
import client from "../api/shopifyApi";
import ProductList from "../components/ProductList";
import SearchField from "../components/SearchField";
import LoadingHandle from "../components/LoadingHandle";
import { Product, ProductsResponse } from "../model/model";
import "../styles/pages/Home/home.css";

const PRODUCT_COUNT = 50;

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [term, setTerm] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const getProducts = async () => {
      try {
        const response = await client.get<ProductsResponse>(
          `/products/${PRODUCT_COUNT}`
        );

        setProducts(response.data.products);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    getProducts();
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
