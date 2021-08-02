import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ClearIcon from "@material-ui/icons/Clear";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CartCard from "./CartCard";
import { cartSubTotalCalculator } from "../../Utils/cartCalculator";
import {
  deleteCartHandler,
  getCartHandler,
  uniqueCartProductsHandler,
} from "../../Redux/CartWish/action";
import { cartDuplicateHandler } from "../../Utils/duplicateHandler";

const CartWrapper = styled.div`
  /* width: 100vw; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const CartHead = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  flex-basis: 2;
  padding: 20px 10px 20px;
  border-bottom: 1px solid #dad1d1;
`;

const CartBody = styled.div`
  /* flex-basis: 6; */
  width:70%;
  height: 100%;
  overflow-y: auto;
  padding: 10px 15px;
`;

const CartFooter = styled.div`
  border-top: 1px solid #dad1d1;
  padding: 10px 20px;
  flex-basis: 2;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
  p {
    font-size: 14px;
    letter-spacing: 0.2ch;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

const CheckOutButton = styled.button`
  background-color: ${(props) => props.theme.btnBackground};
  width: 100%;
  color: white;
  margin: 10px 0 0;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid ${(props) => props.theme.btnBackground};
  :hover {
    background-color: white;
    color: ${(props) => props.theme.btnBackground};
  }
`;

function Cart() {
  const cartArray = useSelector((state) => state.cartWishReducer.cart);
  const userData = useSelector((state) => state.authReducer.userData);
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    dispatch(uniqueCartProductsHandler(cartDuplicateHandler(cartArray)));
  }, [cartArray]);

  function onDeleteHandler(id) {
    dispatch(deleteCartHandler(id)).then((res) =>
      dispatch(getCartHandler(userData._id))
    );
  }

  function onCheckoutHandler() {
    if (cartArray.length === 0) {
      return alert("Your cart is empty");
    }
    history.push("/checkout");
  }

  return (
    // <Drawer anchor="right" open={cartState} onClose={() => setCartState(false)}>
    <div>
      <CartWrapper>
        <CartHead>Cart
        </CartHead>
        <div style={{display:"flex",width:"80%",justifyContent:"space-between"}}>
        <CartBody>
          {cartArray.length === 0 ? (
            <h2>It's so empty here</h2>
          ) : (
            cartArray?.map((item) => (
              <CartCard onDeleteHandler={onDeleteHandler} {...item}></CartCard>
            ))
          )}
        </CartBody>
        <CartFooter>
          <div>
            <p>subtotal</p>
            <p>₹ {cartSubTotalCalculator(cartArray)}</p>
          </div>
          <div>
            <CheckOutButton onClick={onCheckoutHandler}>
              Buy Now
            </CheckOutButton>
          </div>
        </CartFooter>
        </div>
      </CartWrapper>
    {/* </Drawer> */}
    </div>
  );
}

export default Cart;
