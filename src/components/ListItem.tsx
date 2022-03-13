import React from "react";
import { Link } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import { Product } from "../model/model";
import "../styles/components/ListItem/listItem.css";

interface Props {
  product: Product;
}
const ListItem = ({ product }: Props) => {
  return (
    <Link
      to={`/detail/${product.id}`}
      className="list-item link"
      style={{ backgroundImage: `url(${product.image})` }}
    >
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
