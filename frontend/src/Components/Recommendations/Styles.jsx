import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  width: 25%;
  margin: 10px;
  min-width: 200px;
  border: 1px solid ${(props) => props.theme.backgroundColor};
  transition: all 400ms ease;
  cursor: pointer;
  padding: 5px 10px;
  box-shadow: 2px 2px 8px #e4e2e2;
  border-radius: 10px;
  :hover {
    box-shadow: 2px 2px 8px #dad7d7;
    border: 1px solid #d4d2d2;
  }
`;

export const ProductImg = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 30px;
  > img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 180px;
    font-size: 14px;
  }
`;

export const ProductTitle = styled.p`
  font-size: 20px;
  margin: 20px 0px;
`;

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 700;

  ::before {
    content: "₹ ";
  }
`;