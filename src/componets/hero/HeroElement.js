import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.section`
  min-height: 100vh;
  color: #fff;
  position: relative;
`;
export const HeroItems = styled.div`
  text-align: center;
  max-width: 745px;
  padding: 300px 0 60px;
  margin: 0 auto;
`;

export const HeroSubTitle = styled.h3`
  font-size: 24px;
  line-height: 14px;
  margin-bottom: 30px;
  font-weight: normal;
  font-family: "Lobster Two", cursive;
`;

export const HeroTitle = styled.h1`
  font-size: 96px;
  line-height: 56px;
  font-weight: normal;
  font-family: "Lobster Two", cursive;
`;

export const HeroTitleSpan = styled.span`
  color: #e2b024;
`;

export const HeroDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  padding: 35px 0;
`;

export const HeroLink = styled(Link)`
  font-size: 16px;
  line-height: 9px;
  color: #e2b024;
  font-weight: normal;
  font-family: "Lobster Two", cursive;
  text-decoration: none;
  border-bottom: 2px solid #e2b024;
`;

export const HeroImgBox = styled.div`
  text-align: center;
`;

export const HeroMainImg = styled.img``;
