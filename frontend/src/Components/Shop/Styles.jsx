import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 50px auto;
  max-width: 1600px;

  > div {
    padding: 10px;
  }
  > div:nth-child(1) {
    width: 25%;
  }
  > div:nth-child(2) {
    width: 75%;
  }
`;

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SortingField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px;

  p {
    font-size: 22px;
  }
  select {
    font-size: 16px;
    padding: 8px 15px;
    border-radius: 5px;
    margin: 0 -15%;
    outline: none;
    border: 1px solid #dad5d5;
  }
  option {
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 5px;
    width: 200px;
    border: 1px solid #dad5d5;
  }
`;

export const ShopItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PaginationWapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

export const FilterWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  border-bottom: 1px solid #e3e3e3;
`;

export const SectionHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 25px;
  margin: 10px 0;
  justify-content: space-between;
`;

export const SectionItemHolder = styled.div`
  height: 200px;
  overflow-y: auto;
`;

export const SectionItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  text-transform: uppercase;
  font-weight: 500;
  input {
    margin: 5px;
  }
  > div {
    margin: 5px 10px;
  }
  span {
  }
`;


export const SectionSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  > input {
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 2px solid #a19f9f;
    transition: all 500ms ease;
  }
  > input:focus {
    border-bottom: 2px solid #1f7de9;
  }
`;

export const SliderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0 10px;
  p {
    font-weight: 500;
  }
`;

export const ClearALL = styled.button`
  background-color: #ebe6e6;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  visibility: ${(props) => props.visibility};
`;

export const PageWrapper = styled.div`
  margin-top: 15vh;
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;
