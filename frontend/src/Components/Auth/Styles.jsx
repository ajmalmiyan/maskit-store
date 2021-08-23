
import styled from "styled-components";

export const AuthWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  transition: all 500ms ease;
`;

export const AuthSection = styled.div`
  min-height: 70vh;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -30%);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
`;

export const AuthNav = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  * {
    transition: all 200ms ease;
  }

  > div {
    width: 50%;
    padding: 30px;
    text-align: center;
  }
  > div:nth-child(1) {
    color: ${(props) => (props.status === "login" ? "black" : "grey")};
  }
  > div:nth-child(2) {
    color: ${(props) => (props.status === "login" ? "grey" : "black")};
  }
`;

export const AuthForm = styled.form`
  width: 100%;
  > div {
    width: 100%;
    margin: 20px 0;
    > input {
      width: 70%;
      margin-left: 15%;
      padding: 20px;
      border: 1px solid #000000;
      border-radius: 5px;
      outline: none;
      font-size: 18px;
      transition: all 500ms ease;
      :focus {
        border: 1px solid #858282;
      }
    }
    button {
      width: 40%;
      margin-left: 30%;
    }
  }
`;

export const AuthButton = styled.button`
  transition: all 500ms ease;
  background-color: ${(props) => props.theme.btnBackground};
  color: white;
  border: none;
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid ${(props) => props.theme.btnBackground};
  :hover {
    background-color: white;
    color: ${(props) => props.theme.btnBackground};
  }
  :disabled {
    background-color: #42b813;
    border: 1px solid #42b813;
  }
`;

export const AuthMain = styled.div``;

