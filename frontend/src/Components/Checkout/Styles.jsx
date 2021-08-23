import styled from "styled-components";


export const CheckoutWrapper = styled.div`
`;

export const CheckoutMain = styled.div`
  width: 80vw;
  min-height: 80vh;
  margin: 5vh auto;
  border-radius: 10px;
  padding: 20px;
`;

export const CheckoutHead = styled.div`
  border-radius: 10px;
`;

export const CheckoutBody = styled.div``;

export const CheckoutCartWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  height: 500px;
  flex-wrap: wrap;
  min-width: 350px;
  > div {
    margin: 10px;
    width: 600px;
    padding: 20px;
  }
`;

export const ProductsInCart = styled.div`
  overflow-y: auto;
`;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;

  > div:nth-child(2) {
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
export const PlaceOrder = styled.button`
  background-color: ${(props) => props.theme.btnBackground};
  width: 100%;
  color: white;
  margin: 10px 0 0;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid ${(props) => props.theme.btnBackground};
  :hover {
    background-color: white;
    color: ${(props) => props.theme.btnBackground};
  }
`;

export const CartFooter = styled.div`
  > div:nth-child(1) {
    display: flex;
    font-size: 24px;
    align-items: center;
    justify-content: space-between;
  }
`;
export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: ${(props) => (props.weight ? 600 : 400)};
  ::before {
    content: "₹ ";
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;

  > div {
    width: 45%;
    margin: 20px;
    margin: 0 auto;
    min-width: 400px;
  }
  > div:nth-child(1) {
    > div {
      width: 100%;
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > input {
        width: 100%;
        padding: 20px;
        border: 1px solid #e4e4e4;
        border-radius: 5px;
        outline: none;
        font-size: 18px;
        transition: all 500ms ease;
        :focus {
          border: 1px solid #858282;
        }
      }
    }
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    border: 1px solid black;

    img {
      width: 500px;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.btnBackground};
  min-width: 140px;
  width: 45%;
  color: white;
  margin: 10px 0 0;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid ${(props) => props.theme.btnBackground};
  :hover {
    background-color: white;
    color: ${(props) => props.theme.btnBackground};
  }
`;

export const PaymentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 50vh;
  justify-content: space-between;
  > div:nth-child(1) {
    display: grid;
    place-content: center;
    font-size: 40px;
    padding: 0;
    margin: 0;
  }
  > div {
    width: 28%;
    min-width: 350px;
    margin: 10px;
    padding: 20px;
  }
`;

export const SubmitButton2 = styled.button`
  background-color: ${(props) => props.theme.btnBackground};
  width: 40%;
  min-width: 150px;
  color: white;
  margin: 10px 0 0;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid ${(props) => props.theme.btnBackground};
  :hover {
    background-color: white;
    color: ${(props) => props.theme.btnBackground};
  }
`;

export const PaymentSummary = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  justify-content: space-between;
  b {
    font-weight: 600;
  }
`;

export const TotalPrice = styled.div`
  font-size: 50px;
  font-weight: 500;
  flex-grow: 2;
  display: grid;
  place-content: center;
  border-radius: 5px;
  ::before {
    content: "Total Payable";
    font-size: 16px;
  }
`;

export const PaySection = styled.div`
  display: flex;
  flex-direction: column;

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }
`;
