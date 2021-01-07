import React from "react";

import { Container } from "../../GlobalStyle";
import {
  CompanySection,
  CompanyWrapper,
  CompanyBox,
  CompanyBoxSubTitle,
  CompanyBoxTitle,
  CompanyBoxText,
  CompanyBoxDescription,
  CompanyBoxButton,
  CompanySlider,
  CompanyBtn,
  CompanyImageBox,
  SliderContainer,
} from "./CompanyElement";
import { Button } from "../../componets/Button";
import { vineSlider } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Company = () => {
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <CompanyBtn style={{ right: "-220px", top: "45%" }} onClick={onClick}>
        Next
      </CompanyBtn>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <CompanyBtn style={{ left: "-220px", top: "45%" }} onClick={onClick}>
        Prev
      </CompanyBtn>
    );
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <CompanySection>
      <Container>
        <CompanyWrapper>
          <CompanyBox>
            <CompanyBoxSubTitle>New Wines</CompanyBoxSubTitle>
            <CompanyBoxTitle>Merlot</CompanyBoxTitle>
            <CompanyBoxText>Winehouse Vineyard</CompanyBoxText>
            <CompanyBoxDescription>
              Merlot is loved for its boisterous black cherry flavors, supple
              tannins, and chocolatey finish. On the high end, it’s often
              mistaken with Cabernet Sauvignon.
            </CompanyBoxDescription>
            <CompanyBoxButton>
              <Button primary="true" style={{ marginRight: "60px" }}>
                Learn more
              </Button>
              <Button>View more</Button>
            </CompanyBoxButton>
          </CompanyBox>

          <CompanySlider>
            <SliderContainer>
              <Slider {...settings}>
                {vineSlider.map((vine) => (
                  <CompanyImageBox key={vine.id}>
                    <img src={vine.image} alt="" />
                  </CompanyImageBox>
                ))}
              </Slider>
            </SliderContainer>
          </CompanySlider>
        </CompanyWrapper>
      </Container>
    </CompanySection>
  );
};

export default Company;
