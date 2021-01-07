import React from "react";

import HeroImg from "../../images/heroImg.png";
import { Container } from "../../GlobalStyle";
import {
  HeroContainer,
  HeroItems,
  HeroSubTitle,
  HeroTitle,
  HeroDescription,
  HeroLink,
  HeroImgBox,
  HeroMainImg,
  HeroTitleSpan
} from "./HeroElement";

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroItems>
          <HeroSubTitle>The Experlence of Generations</HeroSubTitle>
          <HeroTitle>In each <HeroTitleSpan>bottle</HeroTitleSpan></HeroTitle>
          <HeroDescription>
            Experience a true “American Dream” at Winehouse and visit the first
            tasting room in the United States established by a former European
            mirgant vineyard worker and his family.
          </HeroDescription>
          <HeroLink to="/catalog">READ MORE</HeroLink>
        </HeroItems>
        <HeroImgBox>
          <HeroMainImg src={HeroImg} />
        </HeroImgBox>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
