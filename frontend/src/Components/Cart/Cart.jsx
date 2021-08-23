import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {CartCard} from "./CartCard";
import { cartSubTotalCalculator } from "../../Utils/cartCalculator";
import {
  deleteCartHandler,
  getCartHandler,
  uniqueCartProductsHandler,
} from "../../Redux/CartWish/action";
import { cartDuplicateHandler } from "../../Utils/duplicateHandler";
import {CartWrapper,CartHead,CartBody,CartFooter,CheckOutButton} from './Styles'
export const Cart=()=> {
  const cartArray = useSelector((state) => state.cartWishReducer.cart);
  const userData = useSelector((state) => state.authReducer.userData);
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    dispatch(uniqueCartProductsHandler(cartDuplicateHandler(cartArray)));
// eslint-disable-next-line 
  }, [cartArray]);

  const onDeleteHandler=(id)=> {
    dispatch(deleteCartHandler(id)).then((res) =>
      dispatch(getCartHandler(userData._id))
    );
  }

  const onCheckoutHandler=()=> {
    if (cartArray.length === 0) {
      return alert("Your cart is empty");
    }
    history.push("/checkout");
  }

  return (
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
    </div>
  );
}