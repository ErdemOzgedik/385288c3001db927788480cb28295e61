import React, { useEffect, useState } from "react";
import "../styles/pages/Home/home.css";
import ProductList from "../components/ProductList";
import SearchField from "../components/SearchField";
import client from "../api/shopifyApi";

function Home() {
  const [products, setProducts] = useState<ShopifyBuy.Product[]>([]);
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    try {
      client.product.fetchAll().then((res) => {
        setProducts(res);
      });
    } catch (error: any) {
      console.log(error.message);
    }
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
