import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import client from "../api/shopifyApi";
import "../styles/pages/Detail/detail.css";

const Detail = () => {
  const { id } = useParams<string>();
  const [product, setProduct] = useState<ShopifyBuy.Product>();

  useEffect(() => {
    try {
      client.product.fetch(id!).then((product) => {
        setProduct(product);
      });
    } catch (error) {}
  }, [id]);

  return (
    <div className="detail">
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
            <div className="content__body-item">
              <span>Price</span>
              {product?.variants[0].price}
            </div>
            <div className="content__body-item">{product?.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
