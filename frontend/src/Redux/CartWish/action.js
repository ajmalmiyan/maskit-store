import axios from "axios";
import * as actionTypes from "./actionType";

const postCartRequest = () => {
  return {
    type: actionTypes.POST_CART_REQUEST,
  };
};

const postCartSuccess = (data) => {
  return {
    type: actionTypes.POST_CART_SUCCESS,
    data,
  };
};

const postCartFailure = () => {
  return {
    type: actionTypes.POST_CART_FAILURE,
  };
};

export const postCartHandler = (payload) => (dispatch) => {
  dispatch(postCartRequest());
  return axios
    .post(`https://maskitstore.vercel.app/cart`, payload)
    .then((res) => dispatch(postCartSuccess(res.data)))
    .catch((err) => dispatch(postCartFailure()));
};

const getCartRequest = () => {
  return {
    type: actionTypes.GET_CART_REQUEST,
  };
};

const getCartSuccess = (data) => {
  return {
    type: actionTypes.GET_CART_SUCCESS,
    data,
  };
};

const getCartFailure = () => {
  return {
    type: actionTypes.GET_CART_FAILURE,
  };
};

export const getCartHandler = (id) => (dispatch) => {
  dispatch(getCartRequest());
  return axios
    .get(`https://maskitstore.vercel.app/cart/${id}`)
    .then((res) => dispatch(getCartSuccess(res.data)))
    .catch((err) => dispatch(getCartFailure()));
};

const deleteCartRequest = () => {
  return {
    type: actionTypes.DELETE_CART_REQUEST,
  };
};

const deleteCartSuccess = (data) => {
  return {
    type: actionTypes.DELETE_CART_SUCCESS,
    data,
  };
};

const deleteCartFailure = () => {
  return {
    type: actionTypes.DELETE_CART_FAILURE,
  };
};

export const deleteCartHandler = (id) => (dispatch) => {
  dispatch(deleteCartRequest());
  return axios
    .delete(`https://maskitstore.vercel.app/cart/${id}`)
    .then((res) => dispatch(deleteCartSuccess()))
    .catch((err) => dispatch(deleteCartFailure()));
};

export const uniqueCartProductsHandler = (data) => {
  return {
    type: actionTypes.UNIQUE_CART,
    data,
  };
};

const postWishlistRequest = () => {
  return {
    type: actionTypes.POST_WISHLIST_REQUEST,
  };
};

const postWishlistSuccess = (data) => {
  return {
    type: actionTypes.POST_WISHLIST_SUCCESS,
    data,
  };
};

const postWishlistFailure = () => {
  return {
    type: actionTypes.POST_WISHLIST_FAILURE,
  };
};

export const postWishlistHandler = (payload) => (dispatch) => {
  dispatch(postWishlistRequest());
  return axios
    .post(`https://maskitstore.vercel.app/wishlist`, payload)
    .then((res) => dispatch(postWishlistSuccess(res.data)))
    .catch((err) => dispatch(postWishlistFailure()));
};

const getWishlistRequest = () => {
  return {
    type: actionTypes.GET_WISHLIST_REQUEST,
  };
};

const getWishlistSuccess = (data) => {
  return {
    type: actionTypes.GET_WISHLIST_SUCCESS,
    data,
  };
};

const getWishlistFailure = () => {
  return {
    type: actionTypes.GET_WISHLIST_FAILURE,
  };
};

export const getWishlistHandler = (id) => (dispatch) => {
  dispatch(getWishlistRequest());
  return axios
    .get(`https://maskitstore.vercel.app/wishlist/${id}`)
    .then((res) => dispatch(getWishlistSuccess(res.data)))
    .catch((err) => dispatch(getWishlistFailure()));
};

const deleteWishlistRequest = () => {
  return {
    type: actionTypes.DELETE_WISHLIST_REQUEST,
  };
};

const deleteWishlistSuccess = (data) => {
  return {
    type: actionTypes.DELETE_WISHLIST_SUCCESS,
    data,
  };
};

const deleteWishlistFailure = () => {
  return {
    type: actionTypes.DELETE_WISHLIST_FAILURE,
  };
};

export const deleteWishlistHandler = (id) => (dispatch) => {
  dispatch(deleteWishlistRequest());
  return axios
    .delete(`https://maskitstore.vercel.app/wishlist/${id}`)
    .then((res) => dispatch(deleteWishlistSuccess()))
    .catch((err) => dispatch(deleteWishlistFailure()));
};

export const uniqueWishlistProductsHandler = (data) => {
  return {
    type: actionTypes.UNIQUE_WISHLIST,
    data,
  };
};

const emptyCartRequest = () => {
  return {
    type: actionTypes.EMPTY_CART_REQUEST,
  };
};

const emptyCartSuccess = (data) => {
  return {
    type: actionTypes.EMPTY_CART_SUCCESS,
    data,
  };
};

const emptyCartFailure = () => {
  return {
    type: actionTypes.EMPTY_CART_FAILURE,
  };
};

export const emptyCartHandler = (id) => (dispatch) => {
  dispatch(emptyCartRequest());
  return axios
    .delete(`https://maskitstore.vercel.app/cart/bulk/${id}`)
    .then((res) => dispatch(emptyCartSuccess()))
    .catch((err) => dispatch(emptyCartFailure()));
};
