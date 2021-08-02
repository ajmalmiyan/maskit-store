import React from "react";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router";
import {
  ProductCardWrapper,
  ProductImg,
  ProductTitle,
  ProductInfo,
  ProductPrice,
} from "./Styles";

function Recommendations({
  _id,
  product_name,
  price,
  brandId,
  product_image,
  ratings,
}) {
  let history = useHistory();
  const onClickHandler = () => {
    history.push(`/shop/${_id}`);
    window.scrollTo(0, 0);
  };

  return (
    <ProductCardWrapper onClick={onClickHandler}>
      <ProductImg>
        <img src={product_image} alt={product_name}></img>
      </ProductImg>
      <p>{brandId.brand_name}</p>
      <ProductTitle>{product_name.slice(0, 20)}</ProductTitle>
      <ProductInfo>
        <Rating value={+ratings} readOnly></Rating>
        <ProductPrice>{price}</ProductPrice>
      </ProductInfo>
    </ProductCardWrapper>
  );
}

export default Recommendations;
