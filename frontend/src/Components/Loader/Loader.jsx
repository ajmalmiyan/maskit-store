import React from "react";
import {Wrapper,PreLoader} from './Styles';

export const Loader=()=> {
  return (
    <Wrapper>
      <PreLoader>
        <img src="/images/loader.png" alt="loader"/>
      </PreLoader>
    </Wrapper>
  );
}