import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import { CardWrapper, RemoveIconHolder, ProductPrice } from "./Styles";
export const CartCard = ({ _id, productId, onDeleteHandler }) => {
  const { product_name, product_image, price } = productId;
  return (
    <CardWrapper>
      <RemoveIconHolder onClick={() => onDeleteHandler(_id)}>
        <RemoveIcon fontSize="small" />
      </RemoveIconHolder>
      <div>
        <img src={product_image} alt={product_name}></img>
      </div>
      <div>
        <h4>{product_name.slice(0, 50) + "..."}</h4>
        <ProductPrice>{price}</ProductPrice>
      </div>
    </CardWrapper>
  );
};
