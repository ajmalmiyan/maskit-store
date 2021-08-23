import { Switch, Route } from "react-router-dom";
import {Shop} from "../Components/Shop/Shop";
import React from "react";
import {Solo} from "../Components/SoloProduct/Solo";
import {Auth} from "../Components/Auth/Auth";
import { AntiPrivateRoute, PrivateRoute } from "./PrivateRoutes";
import {Checkout} from "../Components/Checkout/Checkout";
import {Home} from "../Components/Home/Home";
import {Profile} from "../Components/Profile/Profile";
import image from "../Images/404.svg";
import styled from "styled-components";
import {WishList} from "../Components/WishList/WishList";
import {Cart} from "../Components/Cart/Cart";

const Error = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
`;

export const Router=()=> {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/shop">
        <Shop />
      </Route>
      <Route path="/shop/:id">
        <Solo/>
      </Route>
      <PrivateRoute path="/checkout">
        <Checkout/>
      </PrivateRoute>
      <PrivateRoute path="/profile">
        <Profile/>
      </PrivateRoute>
      <PrivateRoute path="/wishlist">
        <WishList/>
      </PrivateRoute>
      <PrivateRoute path="/cart">
        <Cart/>
      </PrivateRoute>
      <AntiPrivateRoute path="/auth/:auth">
        <Auth/>
      </AntiPrivateRoute>
      <Route>
        <Error>
          <img src={image} alt="404" />
        </Error>
      </Route>
    </Switch>
  );
}