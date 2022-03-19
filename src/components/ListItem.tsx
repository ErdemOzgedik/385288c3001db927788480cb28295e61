import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import { Product } from "../model/model";
import "../styles/components/ListItem/listItem.css";
import Skeleton from "./Skeleton";

interface Props {
  product: Product;
}
const ListItem = ({ product }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link to={`/detail/${product.id}`} className="list-item link">
      <div className="list-item__container">
        {!loaded && <Skeleton />}
        <img
          className="list-item__image"
          src={product.image}
          alt={product.title}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="list-item__detail">
        <div className="list-item__detail--title">{product.title}</div>
        <div className="list-item__detail--price">
          {product.price} <BsCurrencyDollar />
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
