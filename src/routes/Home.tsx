import React, { useContext, useEffect, useState } from "react";
import "../styles/pages/Home/home.css";
import ProductList from "../components/ProductList";
import SearchField from "../components/SearchField";
import ProductContext from "../context/ProductContext";
import client from "../api/shopifyApi";

function Home() {
  const { products, addProducts } = useContext(ProductContext);
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    console.log("bos effect appts");

    const getProducts = async () => {
      try {
        client.product.fetchAll().then((res) => {
          addProducts!(res);
        });
      } catch (error: any) {
        console.log(error.message);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="home">
      <SearchField term={term} setTerm={setTerm} />
      <ProductList
        products={
          term.length > 1
            ? products.filter((product) => {
                if (product.title.toLowerCase().includes(term))
                  console.log(product.title.toLowerCase());

                return product.title.toLowerCase().includes(term);
              })
            : products
        }
      />
    </div>
  );
}

export default Home;
