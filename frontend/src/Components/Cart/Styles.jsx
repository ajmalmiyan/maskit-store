import styled from "styled-components";

export const CartWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const CartHead = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  flex-basis: 2;
  padding: 20px 10px 20px;
  border-bottom: 1px solid #dad1d1;
`;

export const CartBody = styled.div`
  width:70%;
  height: 100%;
  overflow-y: auto;
  padding: 10px 15px;
`;

export const CartFooter = styled.div`
  border-top: 1px solid #dad1d1;
  padding: 10px 20px;
  flex-basis: 2;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
  p {
    font-size: 14px;
    letter-spacing: 0.2ch;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const CheckOutButton = styled.button`
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

export const CardWrapper = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  border-bottom: 1px solid #e6e1e1;
  margin: 20px auto;
  padding: 10px;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    * {
      margin: 5px;
    }
  }
  > div:nth-child(1) {
    flex-basis: 2;
  }
  > div:nth-child(2) {
    flex-basis: 8;
    text-transform: uppercase;
  }

  img {
    width: 100px;
    object-fit: contain;
  }
`;

export const RemoveIconHolder = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: #302d2d;
  background: #d8d5d5;
  border-radius: 5px;
  transform: scale(0.8);
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 700;

  ::before {
    content: "₹ ";
  }
`;
