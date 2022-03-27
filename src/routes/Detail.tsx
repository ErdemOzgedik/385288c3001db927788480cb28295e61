import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import client from "../api/shopifyApi";
import LoadingHandle from "../components/LoadingHandle";
import { Product, ProductResponse } from "../model/model";
import "../styles/pages/Detail/detail.scss";

const Detail = () => {
  const { id } = useParams<string>();
  const [product, setProduct] = useState<Product>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const getProduct = async () => {
      try {
        const response = await client.get<ProductResponse>(`/product/${id}`);

        setProduct(response.data.product);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    getProduct();
  }, [id]);

  useEffect(() => {
    setIsOpen(isError || isLoading);
  }, [isError, isLoading]);

  return (
    <div className="detail">
      {isOpen ? (
        <LoadingHandle isError={isError} />
      ) : (
        <div className="detail__product">
          <Link to={"/"} className="detail__product-close link">
            <IoIosCloseCircleOutline />
          </Link>
          <div
            className="detail__product-image"
            style={{ backgroundImage: `url(${product?.image})` }}
          ></div>
          <div className="detail__product-content">
            <div className="content__title">{product?.title}</div>
            <div className="content__body">
              <div className="content__body-price">
                <span>Price</span>
                {product?.price}
                <BsCurrencyDollar />
              </div>
              <div className="content__body-desc">{product?.description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
