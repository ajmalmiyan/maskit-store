import React from "react";
import {Wrapper,PreLoader} from './Styles';

function Loader() {
  return (
    <Wrapper>
      <PreLoader>
        <img src="/images/loader.png" alt="loader"/>
      </PreLoader>
    </Wrapper>
  );
}

export default Loader;
