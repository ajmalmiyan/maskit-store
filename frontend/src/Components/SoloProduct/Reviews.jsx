import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {
  Paragraph,
  SubHeadingOne,
} from "../../Components/Global/Typography";
import Rating from "@material-ui/lab/Rating";


import {ReviewsWrapper,ReviewsHead,ReviewsBody,ReviewForm,EmptyReview,ReviewsCard} from './Styles'
function Reviews({
  isAuth,
  postReviews,
  reviews,
  ratings,
  productId,
  userReviewData,
  setUserReviewData,
}) {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserReviewData({ ...userReviewData, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    postReviews(userReviewData);
  };

  let { title, rating, message } = userReviewData;

  return (
    <ReviewsWrapper>
      <ReviewsHead>
        <div>
          <SubHeadingOne>{ratings || 0}</SubHeadingOne>
        </div>
        <div>
          <Rating size="large" value={+ratings} readOnly></Rating>
        </div>
        <div>
          <Paragraph>{reviews?.length} Reviews</Paragraph>
        </div>
      </ReviewsHead>

      <ReviewsBody>
        <ReviewForm isAuth={isAuth}>
          <form onSubmit={onSubmitHandler}>
            <div>
              <label>Rate</label>
              <Rating
                onChange={onChangeHandler}
                name="rating"
                size="large"
                value={rating}
              ></Rating>
            </div>
            <div>
              <label>Title</label>
              <input
                value={title}
                name="title"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label>Review</label>
              <textarea
                value={message}
                name="message"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </ReviewForm>
        {reviews.length === 0 ? (
          <EmptyReview>
            <em>Be the first person to review this product</em>
          </EmptyReview>
        ) : (
          reviews?.map((item) => (
            <ReviewsCard>
              <div>
                <Avatar>{item.userId.first_name[0].toUpperCase()}</Avatar>
              </div>
              <div>
                <div>
                  <p>{item.userId.first_name + " " + item.userId.last_name}</p>
                </div>
                <div>
                  <Rating size="small" value={+item.rating} readOnly></Rating>
                </div>
                <div>
                  <b>{item.title}</b>
                </div>
                <div>
                  <span>{item.message}</span>
                </div>
              </div>
            </ReviewsCard>
          ))
        )}
      </ReviewsBody>
    </ReviewsWrapper>
  );
}

export default Reviews;