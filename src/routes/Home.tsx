import React, {
  FormEvent,
  lazy,
  Suspense,
  useEffect,
  useMemo,
  useState,
} from "react";
import client from "../api/shopifyApi";
import SearchField from "../components/SearchField";
import LoadingHandle from "../components/LoadingHandle";
import { Product, ProductsResponse } from "../model/model";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorBoundary";
import "../styles/pages/Home/home.css";

const ProductList = lazy(() => import("../components/ProductList"));
const PRODUCT_COUNT = 50;

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [term, setTerm] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const productListComponent = useMemo(() => {
    return <ProductList products={products} />;
  }, [products]);

  const getProducts = async (url: string) => {
    setIsLoading(true);

    try {
      const response = await client.get<ProductsResponse>(url);

      setProducts(response.data.products);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (term.length === 0 && products.length !== PRODUCT_COUNT) {
      getProducts(`/products/${PRODUCT_COUNT}`);
      return;
    }

    if (term.length < 3) return;

    getProducts(`/search/${term}`);
    return;
  };

  useEffect(() => {
    getProducts(`/products/${PRODUCT_COUNT}`);
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
          <SearchField
            term={term}
            setTerm={setTerm}
            handleSubmit={handleSubmit}
          />
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingHandle isError={isError} />}>
              {productListComponent}
            </Suspense>
          </ErrorBoundary>
        </>
      )}
    </div>
  );
}

export default Home;
