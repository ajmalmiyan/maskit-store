import styled from 'styled-components';

export const NavbarFix = styled.div`
position: fixed;
width: 100%;
z-index: 1000;
top:0;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 15vh;
  background-color: #ffffff;
  color: #000000;
  border-bottom: 1px solid #e4e4e4;
`;

export const Navigation = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    flex-basis: 1;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  flex-grow: 1;
  font-size: 21px;
  a {
    text-decoration: none;
    color: #000000;
  }
`;

export const SearchHolder = styled.div`
  flex-grow: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f6f6f6;
  padding: 0px 15px;
  border-radius: 5px;
  input {
    width: 100%;
    font-size: 18px;
    padding: 10px 10px;
    outline: none;
    transition: all 700ms ease;
    max-width: 1000px;
    border: none;
    border: 1px solid #f6f6f6;
    background-color: #f6f6f6;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavButton = styled.button`
  background-color: ${(props) => props.theme.btnBackground};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  min-width: 80px;
  border: 1px solid ${(props) => props.theme.btnBackground};
  :hover {
    background-color: white;
    color: ${(props) => props.theme.btnBackground};
  }
`;
export const NavItem = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  min-width: 80px;
  background-color: white;
  transition: all 500ms ease;
  border: 1px solid #eeecec;
  text-transform: capitalize;
  :hover {
    color: ${(props) => props.theme.btnBackground};
  }
`;

export const ActionsHolder = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    margin: ${(props) => props.margin};
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: inline;
  }
`;

export const SearchResults = styled.div`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 100%;
  background: white;
  border: 1px solid #f6f6f6;
  border-top: none;
  border-radius: 5px;
  z-index: 400;
  padding: 0px 15px;
`;

export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #cec8c8;

  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  > div:nth-child(1) {
    padding: 10px;
    justify-content: center;
    display: flex;
    > div {
      margin: 2px;
    }
  }
  :hover {
    div + div {
      display: inline;
    }
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  z-index: 99999999999;
  background-color: white;
  border: 1px solid #cec8c8;
  width: 100%;
  border-radius: 5px;
  display: none;
  div {
    border-radius: 5px;
    padding: 10px;

    :hover {
      background-color: black;
      color: white;
    }
  }
`;

export const SearchCardWrapper = styled.div`
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #f6f6f6;
  :nth-last-child(1) {
    border: none;
  }
  > div:nth-child(1) {
    width: 90%;
    text-transform: capitalize;
  }
  > div:nth-child(2) {
    width: 10%;
  }
  :hover {
    background-color: #f8f8f8;
    border-radius: 5px;
  }
`;
export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 600;
  ::before {
    content: "₹ ";
  }
`;
