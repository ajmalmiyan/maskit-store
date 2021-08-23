import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { postOrderHandler } from "../../Redux/Orders/action";
import { emptyCartHandler, getCartHandler } from "../../Redux/CartWish/action";
import { useHistory } from "react-router-dom";
import {
  PaymentWrapper,
  PaymentSummary,
  PaySection,
  TotalPrice,
  SubmitButton2,
} from "./Styles";

export const Payment = ({ setActiveStep, formData, totalPrice }) => {
  const cartArray = useSelector((state) => state.cartWishReducer.uniqueCart);
  const userData = useSelector((state) => state.authReducer.userData);
  const { name, email, address, pin, city, state } = formData;
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePayment = () => {
    let payload = {
      name,
      email,
      address,
      pin,
      city,
      state,
      products: cartArray,
      userId: userData._id,
      total: totalPrice,
    };
    dispatch(postOrderHandler(payload)).then((res) =>
      dispatch(emptyCartHandler(userData._id)).then(
        (res) => dispatch(getCartHandler(userData._id)),
        setTimeout(() => {
          history.push("/");
        })
      )
    );
  };
  return (
    <PaymentWrapper>
      <div>
        <h1>Checkout</h1>
      </div>
      <PaymentSummary>
        <div>
          <p>
            <b>Name</b> : {name}
          </p>
        </div>
        <div>
          <p>
            <b>Email </b> : {email}
          </p>
        </div>
        <div>
          <p>
            <b>Address</b> : {address}
          </p>
        </div>
        <div>
          <p>
            <b>Pin</b> : {pin}
          </p>
        </div>
        <div>
          <p>
            <b>City</b> : {city}
          </p>
        </div>
        <div>
          <p>
            <b>State</b> : {state}
          </p>
        </div>
      </PaymentSummary>
      <PaySection>
        <TotalPrice> ₹ {totalPrice}</TotalPrice>
        <div>
          <SubmitButton2 onClick={() => setActiveStep(1)} type="button">
            Back
          </SubmitButton2>
          <StripeCheckout
            stripeKey="pk_test_51GuhVYJILFs8StGHjjzZha1VPsLlSzlDyahYHZksGhiDQZ94VIOGLzLOOsZoGwkm9nKgMM3qnVMg8ycODAV2FbWq00z0RR74IN"
            token={handlePayment}
            amount={totalPrice * 100}
            currency="INR"
          >
            <SubmitButton2 type="button">Pay</SubmitButton2>
          </StripeCheckout>
        </div>
      </PaySection>
    </PaymentWrapper>
  );
};
