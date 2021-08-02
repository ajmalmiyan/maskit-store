import React from "react";
import { Carousel } from "antd";
//import "antd/dist/antd.css";
import "antd/lib/carousel/style/index.css";
import styled from "styled-components";

const Catalog = styled.div`
  background: url(${(props) => props.img});
  width: 100%;
  min-height: 60vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  > div {
    width: 200px;
    position: absolute;
    top: 50%;
    left: ${(props) => (props.position ? "50%" : "50%")};
    transform: translate(-50%, -50%);
    background-color: white;
    filter: opacity(80%);
    text-align: center;
    padding: 20px 30px;
    font-size: 30px;
    width: fit-content;
  }
`;

const data = [
  {
    tag: "DISPOSABLE MASKS",
    img: "/images/mask_banner_4.jpg",
    position:"right"
  },
  {
    tag: "PANDEMIC, BUT MAKE IT FASHION",
    img: "/images/mask_banner_5.jpg",
  },
  {
    tag: "KEEP MASK AND CARRY ON",
    img: "/images/mask_banner_6.jpg",
  },
];

function Hero() {
  return (
    <div>
      <Carousel effect="scrollx" dotPosition="bottom" autoplay>
        {data?.map((item) => (
          <Catalog position={item.position} img={item.img}>
            <div>
              <h3>{item.tag}</h3>
            </div>
          </Catalog>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
