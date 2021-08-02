import React from "react";
import Hero from "./Carousel";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Recommendations from "../../Components/Recommendations/Recommendations";
import { getProductsHomeHandler } from "../../Redux/Products/action";
import Loader from "../../Components/Loader/Loader";

const RecommendationDisplay = styled.div`
  display: flex;
  align-items: center;
`;

const ProductsCollection = styled.div`
  width: 80%;
  max-width: 1600px;
  /* margin: 0px 5% 0px 5%; */
  margin: 50px auto;
  h2 {
    padding-left: 0.5%;
    margin: 10px 0;
    font-size: 28px;
  }
  > div {
    margin: 50px auto;
  }
`;

function Home() {
  const dispatch = useDispatch();
  const featured = useSelector((state) => state.productReducer.featured);
  const popular = useSelector((state) => state.productReducer.popular);
  const isLoading = useSelector((state) => state.productReducer.isLoading);

  React.useEffect(() => {
    dispatch(getProductsHomeHandler());
  }, []);
  // console.log(featured.brandId.name)
  return (
    <>
      {isLoading ? (
        <>
          <Loader></Loader>
        </>
      ) : (
        <div>
          <Hero></Hero>
          <ProductsCollection>
            <div style={{textAlign:"center"}}>
              <h2>FEATURED PRODUCTS</h2>
              <p>Top products, hand picked by MaskIt Store</p>
              <RecommendationDisplay>
                {featured?.map((item) => (
                  <Recommendations key={item?._id} {...item} />
                ))}
              </RecommendationDisplay>
            </div>
            <div style={{textAlign:"center"}}>
              <h2>MOST POPULAR PRODUCTS</h2>
              <RecommendationDisplay>
                {popular?.map((item) => (
                  <Recommendations key={item?._id} {...item} />
                ))}
              </RecommendationDisplay>
            </div>
          </ProductsCollection>
        </div>
      )}
    </>
  );
}

export default Home;