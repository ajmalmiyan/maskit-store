import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import {
  getSoloProductHandler,
  getProductReviewHandler,
  getRecommendationsHandler,
  getFromSameBrandHandler,
  postProductReviewHandler,
} from "../../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Rating from "@material-ui/lab/Rating";
import {
  MainHeading,
  Paragraph,
  SubHeadingOne,
} from "../../Components/Global/Typography";
import { Reviews } from "./Reviews";
import { Recommendations } from "../../Components/Recommendations/Recommendations";
import { getCartHandler, postCartHandler } from "../../Redux/CartWish/action";
import { Loader } from "../../Components/Loader/Loader";

import {
  SoloWrapper,
  SoloSection,
  SoloProductImage,
  Category,
  SoloProductInfo,
  ProductPrice,
  AddToCart,
  RecommendationWrapper,
  RecommendationDisplay,
} from "./Styles";

const initState = {
  title: "",
  message: "",
  rating: 0,
};

export const Solo = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let soloProduct = useSelector((state) => state.productReducer.soloProduct);
  let reviews = useSelector((state) => state.productReducer.reviews);
  let userData = useSelector((state) => state.authReducer.userData);
  let history = useHistory();
  let isAuth = useSelector((state) => state.authReducer.isAuth);
  const productsInCart = useSelector(
    (state) => state.cartWishReducer.uniqueCart
  );
  let isLoading = useSelector((state) => state.productReducer.isSoloLoading);
  let recommendationItems = useSelector(
    (state) => state.productReducer.recommendations
  );
  let moreFromSameBrand = useSelector(
    (state) => state.productReducer.moreFromSameBrand
  );

  const [userReviewData, setUserReviewData] = React.useState(initState);

  let {
    _id,
    product_name,
    price,
    brandId,
    description,
    categoryId,
    product_image,
    ratings,
  } = soloProduct;

  React.useEffect(() => {
    dispatch(getSoloProductHandler(id));
// eslint-disable-next-line
  }, [id]);

  const addToCartHandler = () => {
    if (!isAuth) {
      return history.push("/auth/login");
    }
    let payload = {
      userId: userData?._id,
      productId: _id,
    };
    dispatch(postCartHandler(payload)).then((res) =>
      dispatch(getCartHandler(userData._id))
    );
  };

  React.useEffect(() => {
    getReviews();
    getRecommendations();
// eslint-disable-next-line
  }, [soloProduct]);

  const getReviews = () => {
    dispatch(getProductReviewHandler(_id));
  };

  const postReviews = (reviewData) => {
    let { title, message, rating } = reviewData;
    let payload = {
      userId: userData?._id,
      productId: _id,
      title,
      message,
      rating,
    };
    dispatch(postProductReviewHandler(payload)).then(
      (res) => getReviews(),
      setUserReviewData(initState)
    );
  };

  const getRecommendations = () => {
    dispatch(getRecommendationsHandler(categoryId?._id));
    dispatch(getFromSameBrandHandler(brandId?._id));
  };

  const onCheckoutHandler = () => {
    history.push("/checkout");
  };

  return (
    <>
      {isLoading ? (
        <>
          <Loader></Loader>
        </>
      ) : (
        <SoloWrapper id="#" key={_id}>
          <SoloSection>
            <SoloProductImage>
              <img src={product_image} alt={product_name}></img>
            </SoloProductImage>

            <SoloProductInfo>
              <Breadcrumbs aria-label="breadcrumb">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="#">{product_name?.slice(0, 20)}</Link>
              </Breadcrumbs>
              <Category>{categoryId?.category_name}</Category>
              <MainHeading>{product_name}</MainHeading>
              <div>
                <Rating value={+ratings} readOnly></Rating>
              </div>
              <ProductPrice>{price}</ProductPrice>
              <div>
                <Paragraph>{description}</Paragraph>
              </div>
              {isAuth && productsInCart.includes(_id) ? (
                <div onClick={onCheckoutHandler}>
                  <AddToCart>Go to Cart</AddToCart>
                </div>
              ) : (
                <div onClick={addToCartHandler}>
                  <AddToCart>Add to Cart</AddToCart>
                </div>
              )}
            </SoloProductInfo>
          </SoloSection>
          <Reviews
            postReviews={postReviews}
            productId={_id}
            reviews={reviews}
            ratings={ratings}
            isAuth={isAuth}
            userReviewData={userReviewData}
            setUserReviewData={setUserReviewData}
          ></Reviews>

          <RecommendationWrapper>
            <SubHeadingOne>Similar Products</SubHeadingOne>
            <RecommendationDisplay>
              {recommendationItems?.map((item) => (
                <Recommendations key={item?._id} {...item} />
              ))}
            </RecommendationDisplay>
          </RecommendationWrapper>
          <RecommendationWrapper>
            <SubHeadingOne>More from {brandId?.brand_name}</SubHeadingOne>
            <RecommendationDisplay>
              {moreFromSameBrand?.map((item) => (
                <Recommendations key={item?._id} {...item} />
              ))}
            </RecommendationDisplay>
          </RecommendationWrapper>
        </SoloWrapper>
      )}
    </>
  );
};
