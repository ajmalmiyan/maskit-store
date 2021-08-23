import React from "react";
import { useHistory } from "react-router-dom";
import {SearchCardWrapper,ProductPrice} from './Styles';

export const SearchCard=({
  setSearchModal,
  _id,
  product_name,
  product_image,
  price,
  categoryId,
  setSearch,
}) =>{
  const history = useHistory();
  const onClickHandler=()=> {
    history.push(`/shop/${_id}`);
    setSearchModal(false);
    setSearch("");
  }
  return (
    <SearchCardWrapper onClick={onClickHandler}>
      <div>
        <p>{product_name}</p>
      </div>
      <div>
        <ProductPrice>{price}</ProductPrice>
      </div>
    </SearchCardWrapper>
  );
}