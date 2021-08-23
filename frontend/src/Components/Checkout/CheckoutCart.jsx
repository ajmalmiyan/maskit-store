import React from "react";
import { CartCard } from "../../Components/Cart/CartCard";
import { cartSubTotalCalculator } from "../../Utils/cartCalculator";
import {
  CheckoutCartWrapper,
  ProductsInCart,
  CartDetails,
  ProductPrice,
  CartFooter,
  PlaceOrder,
} from "./Styles";

export const CheckoutCart = ({
  totalPrice,
  setTotalPrice,
  price,
  setPrice,
  discount,
  setDiscount,
  setActiveStep,
  cart,
  onDeleteHandler,
}) => {
  React.useEffect(() => {
    let subTotal = cartSubTotalCalculator(cart);
    let discount = Math.floor(subTotal * 0.2);
    let total = subTotal - discount;
    setPrice(subTotal);
    setDiscount(discount);
    setTotalPrice(total);
// eslint-disable-next-line 
  }, [cart]);

  React.useEffect(() => {}, []);

  return (
    <CheckoutCartWrapper>
      <ProductsInCart>
        <div>
          <h1>Products</h1>
        </div>
        <div>
          {cart?.map((item) => (
            <CartCard onDeleteHandler={onDeleteHandler} {...item}></CartCard>
          ))}
        </div>
      </ProductsInCart>
      <CartDetails>
        <div>
          <h1>Details</h1>
        </div>
        <div>
          <div>
            <div>
              <p>Total Items</p>
            </div>
            <div>
              <p>{cart.length}</p>
            </div>
          </div>
          <div>
            <div>
              <p>Price</p>
            </div>
            <div>
              <ProductPrice>{price}</ProductPrice>
            </div>
          </div>
          <div>
            <div>
              <p>Discount</p>
            </div>
            <div>
              <ProductPrice>{discount}</ProductPrice>
            </div>
          </div>
          <div>
            <div>
              <p>Delivery Charges</p>
            </div>
            <div>
              <p>Free</p>
            </div>
          </div>
        </div>
        <CartFooter>
          <div>
            <h3>Total Price</h3>
            <ProductPrice weight="bold">{totalPrice}</ProductPrice>
          </div>
          <div>
            <PlaceOrder onClick={() => setActiveStep(1)}>Next</PlaceOrder>
          </div>
        </CartFooter>
      </CartDetails>
    </CheckoutCartWrapper>
  );
};
