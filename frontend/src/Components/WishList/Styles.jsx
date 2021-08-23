import styled from "styled-components";
export const WishlistWrapper = styled.div`
  height: 420px;
  padding: 20px;
`;

export const WishlistHead = styled.h1`
  justify-content: space-around;
  text-align: center;
  letter-spacing: 0.2ch;
`;

export const WishlistBody = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
`;

export const WishlistCard = styled.div`
  border: 1px solid #cecaca;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  height: 300px;
  margin: 10px;
  align-items: center;
  padding: 30px;
  border-radius: 5px;
  p {
    font-weight: 500;
    margin: 10px;
  }
  img {
    width: 200px;
    height: 150px;
    object-fit: contain;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  background-color: ${(props) => props.theme.btnBackground};
  color: white;
  text-transform: uppercase;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.btnBackground};
  border-radius: 5px;
  outline: none;
  transition: all 500ms ease;
  margin: 5px;
  :hover {
    color: ${(props) => props.theme.btnBackground};
    background-color: white;
  }
`;
