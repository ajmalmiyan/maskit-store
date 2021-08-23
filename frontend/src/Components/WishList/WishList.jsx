import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteWishlistHandler,
  getCartHandler,
  getWishlistHandler,
  postCartHandler,
  uniqueWishlistProductsHandler,
} from "../../Redux/CartWish/action";
import { wishlistDuplicateHandler } from "../../Utils/duplicateHandler";
import {
  WishlistWrapper,
  WishlistHead,
  WishlistBody,
  WishlistCard,
  Button,
} from "./Styles";
export const WishList = () => {
  const wishlistArray = useSelector((state) => state.cartWishReducer.wishlist);
  const userData = useSelector((state) => state.authReducer.userData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      uniqueWishlistProductsHandler(wishlistDuplicateHandler(wishlistArray))
    );
    // eslint-disable-next-line
  }, [wishlistArray]);

  const moveToCartHandler = (id, productId) => {
    onDeleteHandler(id);
    let payload = {
      userId: userData?._id,
      productId,
    };
    dispatch(postCartHandler(payload)).then((res) =>
      dispatch(getCartHandler(userData._id))
    );
  };

  const onDeleteHandler = (id) => {
    dispatch(deleteWishlistHandler(id)).then((res) =>
      dispatch(getWishlistHandler(userData._id))
    );
  };
  return (
    <div>
      <WishlistWrapper>
        <WishlistHead>Wishlist</WishlistHead>
        <WishlistBody>
          {wishlistArray?.map((item) => (
            <WishlistCard key={item._id}>
              <div>
                <img
                  src={item?.productId?.product_image}
                  alt={item?.productId?.product_name}
                ></img>
              </div>
              <div>
                <p>{item?.productId?.product_name.slice(0, 20)}</p>
              </div>
              <div>
                <Button
                  onClick={() =>
                    moveToCartHandler(item._id, item?.productId?._id)
                  }
                >
                  Move to cart
                </Button>
                <Button onClick={() => onDeleteHandler(item._id)}>
                  Remove
                </Button>
              </div>
            </WishlistCard>
          ))}
        </WishlistBody>
      </WishlistWrapper>
    </div>
  );
};
