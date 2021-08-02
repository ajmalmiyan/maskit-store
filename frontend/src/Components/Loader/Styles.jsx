import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  opacity: 0.9;
  background-color: #f1f2f3;
  position: relative;
`;

export const PreLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;