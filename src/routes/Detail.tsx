import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import client from "../api/shopifyApi";
import LoadingHandle from "../components/LoadingHandle";
import "../styles/pages/Detail/detail.css";

const Detail = () => {
  const { id } = useParams<string>();
  const [product, setProduct] = useState<ShopifyBuy.Product>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    client.product
      .fetch(id!)
      .then((product) => {
        setProduct(product);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
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
            style={{ backgroundImage: `url(${product?.images[0].src})` }}
          ></div>
          <div className="detail__product-content">
            <div className="content__title">{product?.title}</div>
            <div className="content__body">
              <div className="content__body-price">
                <span>Price</span>
                {product?.variants[0].price}TL
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
