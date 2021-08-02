import React from "react";
import { useHistory } from "react-router-dom";
import {SearchCardWrapper,ProductPrice} from './Styles';

function SearchCard({
  setSearchModal,
  _id,
  product_name,
  product_image,
  price,
  categoryId,
  setSearch,
}) {
  const history = useHistory();
  function onClickHandler() {
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

export default SearchCard;
