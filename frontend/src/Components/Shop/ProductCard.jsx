import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../Components/Global/Typography";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ProductCardWrapper = styled.div`
  width: 45%;
  margin: 10px;
  min-width: 250px;
  border: 1px solid ${(props) => props.theme.backgroundColor};
  transition: all 400ms ease;
  cursor: pointer;
  padding: 5px 10px;
  box-shadow: 2px 2px 8px #e4e2e2;
  border-radius: 10px;
  :hover {
    box-shadow: 2px 2px 8px #dad7d7;
    border: 1px solid #d4d2d2;
  }
`;

const ProductImg = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 30px;
  > img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 180px;
    font-size: 14px;
  }
`;

const ProductTitle = styled.p`
  font-size: 20px;
  margin: 20px 0px;
  text-transform: capitalize;
`;

const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 700;

  ::before {
    content: "₹ ";
  }
`;
const ProductCategory = styled.div`
  padding: 2px 5px;
  letter-spacing: 0.2ch;
  font-size: 12px;
  border-radius: 2px;
`;

const ProductDesc = styled.div`
  margin: 20px 0px;
`;

const ProductAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;


export const ProductCard=({
  _id,
  product_name,
  price,
  brand,
  description,
  categoryId,
  product_image,
  reviews,
  ratings,
  addToCartHandler,
  productsInCart,
  addToWishlistHandler,
  productsInWishlist,
  removeFromWishlistHandler,
  onCheckoutHandler,
}) =>{
  let history = useHistory();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const onClickHandler = () => {
    history.push(`/shop/${_id}`);
  };

  return (
    <ProductCardWrapper>
      <ProductImg onClick={onClickHandler}>
        <img src={product_image} alt={product_name}></img>
      </ProductImg>
      <div onClick={onClickHandler}>
        <ProductInfo>
          <div>
            <div>
              <ProductCategory>Ratings</ProductCategory>
            </div>
            <Rating value={+ratings} readOnly></Rating>
          </div>
          <div>
            <ProductPrice>{price}</ProductPrice>
          </div>
        </ProductInfo>
        <ProductTitle>{product_name.slice(0, 20)}</ProductTitle>
        <ProductDesc>
          <Paragraph>{description.slice(0, 200)}...</Paragraph>
        </ProductDesc>
      </div>
      <ProductAction>
        {isAuth && productsInWishlist.includes(_id) ? (
            <FavoriteIcon  onClick={() => removeFromWishlistHandler(_id)}/>
        ) : (
            <FavoriteBorderIcon  onClick={() => addToWishlistHandler(_id)}/>
        )}

        {isAuth && productsInCart.includes(_id) ? (
          
              <ShoppingCartIcon color="secondary" onClick={onCheckoutHandler} />
            
        ) : (
              <AddShoppingCartIcon  color="primary"  onClick={() => addToCartHandler(_id)}/>
            
        )}
      </ProductAction>
    </ProductCardWrapper>
  );
}
