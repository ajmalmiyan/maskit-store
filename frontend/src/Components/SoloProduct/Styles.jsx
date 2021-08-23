import styled from "styled-components";

export const ReviewsWrapper = styled.div`
  width: 70%;
  min-height: 100vh;
  display: flex;
  margin: 100px auto;
  flex-direction: column;
`;

export const ReviewsHead = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #c5c2c2;
  border-bottom: 1px solid #c5c2c2;
  > div {
    margin: 10px;
  }
  h2 {
    font-size: 60px;
    color: #353333;
  }
`;

export const ReviewsBody = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 50px auto;
`;

export const ReviewsCard = styled.div`
  padding: 10px;
  display: flex;
  align-items: flex-start;
  background-color: #f3f2f2;
  margin: 5px;

  p {
    font-weight: 600;
    font-size: 14px;
    text-transform: capitalize;
  }
  > div {
    margin: 10px;
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
`;

export const ReviewForm = styled.div`
  position: relative;
  width: 50%;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px 0 80px;
    > div {
      margin: 10px;
    }
  }
  label {
    display: block;
    font-weight: 400;
    margin: 5px 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: 0.2ch;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 20px;
  }
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 20px;
    height: 100px;
  }
  button {
    width: 200px;
    padding: 10px;
    border: none;
    background-color: ${(props) => props.theme.btnBackground};
    color: white;
    border-radius: 5px;
    font-size: 16px;
  }
  ::before {
    content: "Please login to submit a review";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    z-index: 10;
    display: ${(props) => (props.isAuth ? "none" : "grid")};
    place-content: center;
    font-size: 25px;
    font-style: italic;
  }
`;

export const EmptyReview = styled.div`
  display: grid;
  place-content: center;
  font-weight: 400;
  font-size: 26px;
  height: 20vh;
  background-color: #f5f5f5;
`;

export const SoloWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: #1b1b1b;
    font-weight: 600;
  }
`;

export const SoloSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  > div {
    padding: 10px;
    width: 48%;
    min-width: 600px;
  }
`;

export const SoloProductImage = styled.div`
  background-color: #ffffff;
  flex-basis: 2;
  > img {
    object-fit: contain;
  }
`;

export const SoloProductInfo = styled.div`
  flex-basis: 5;
  display: flex;
  flex-direction: column;
  h1 {
    text-transform: capitalize;
  }
  a {
    text-transform: capitalize;
    color: #2f2d2d;
  }
  > div {
    margin: 30px 0;
  }
`;

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 700;

  ::before {
    content: "₹ ";
  }
`;
export const Category = styled.div`
  letter-spacing: 0.4ch;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

export const AddToCart = styled.button`
  width: 45%;
  font-size: 23px;
  font-weight: 500;
  /* letter-spacing: 0.5ch; */
  background-color: ${(props) => props.theme.btnBackground};
  color: ${(props) => (props.color ? props.color : "white")};
  padding: 10px;
  border: 2px solid ${(props) => props.theme.btnBackground};
  border-radius: 5px;
  outline: none;
  transition: all 500ms ease;
  :hover {
    color: ${(props) => props.theme.btnBackground};
    background-color: white;
  }
`;

export const PromotionalSpace = styled.div`
  background: url("https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg");
  min-height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: grayscale(2%);
  display: grid;
  place-content: center;
  font-size: 22px;
  text-transform: capitalize;
  h2 {
    background-color: #ffffff;
    opacity: 0.8;
    padding: 20px;
    color: #140f0f;
  }
`;

export const RecommendationWrapper = styled.div`
  width: 70%;
  max-width: 1600px;
  margin: 0px auto 50px;
  h2 {
    text-transform: capitalize;
  }
`;

export const RecommendationDisplay = styled.div`
  display: flex;
  align-items: center;
`;
