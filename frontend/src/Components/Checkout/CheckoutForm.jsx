import React from "react";
import { Form, SubmitButton } from "./Styles";

export const CheckoutForm = ({ setActiveStep, formData, setFormData }) => {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setActiveStep(3);
  };

  const { name, email, address, pin, city, state } = formData;

  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <div>
          <div>
            <input
              onChange={onChangeHandler}
              name="name"
              placeholder="Name"
              value={name}
              required
            />
          </div>
          <div>
            <input
              onChange={onChangeHandler}
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              required
            />
          </div>
          <div>
            <input
              onChange={onChangeHandler}
              name="address"
              placeholder="Address"
              value={address}
              required
            />
          </div>
          <div>
            <input
              onChange={onChangeHandler}
              name="city"
              placeholder="City"
              value={city}
              required
            />
          </div>
          <div>
            <input
              onChange={onChangeHandler}
              name="pin"
              placeholder="Pincode"
              value={pin}
              required
            />
          </div>
          <div>
            <input
              onChange={onChangeHandler}
              name="state"
              placeholder="State"
              value={state}
              required
            />
          </div>
          <div>
            <SubmitButton type="button" onClick={() => setActiveStep(0)}>
              Back
            </SubmitButton>
            <SubmitButton>Next</SubmitButton>
          </div>
        </div>
      </Form>
    </>
  );
};
