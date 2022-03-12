import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/ListItem/listItem.css";
interface Props {
  product: ShopifyBuy.Product;
}
const ListItem = ({ product }: Props) => {
  return (
    <Link
      to={`/detail/${product.id}`}
      className="list-item link"
      style={{ backgroundImage: `url(${product.images[0].src})` }}
    >
      <div className="list-item__detail">
        <div className="list-item__detail--title">{product.title}</div>
        <div className="list-item__detail--price">
          {product.variants[0].price}
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
