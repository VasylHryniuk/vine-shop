import styled from "styled-components";

export const CompanySection = styled.section`
background: #000;
`;

export const CompanyWrapper = styled.div`
  padding: 220px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CompanyBox = styled.div`
  width: 526px;
`;

export const CompanyBoxSubTitle = styled.h3`
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  letter-spacing: 0.35em;
  margin-bottom: 26px;
`;

export const CompanyBoxTitle = styled.h2`
  font-size: 74px;
  line-height: 43px;
  margin-bottom: 12px;
  color: #e2b024;
  font-family: "Lobster Two", cursive;
`;

export const CompanyBoxText = styled.h3`
  font-weight: normal;
  font-size: 36px;
  line-height: 170%;
  margin-bottom: 52px;
`;

export const CompanyBoxDescription = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 40px;
  margin-bottom: 75px;
`;

export const CompanyBoxButton = styled.div``;

export const CompanySlider = styled.div`
  height: 480px;
  width: 567px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 10px solid #e2b024;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 374px;
    height: 374px;
    border-radius: 50%;
    background-color: #e2b024;
  }

`;

export const SliderContainer = styled.div`
width: 200px;
text-align: center;
position: relative;
`;

export const CompanyImageBox = styled.div`
position: relative;
background: transparent;
img{
  background: transparent;
}
 &:focus {
  outline: 0;
  outline: none;
}
`;



export const CompanyBtn = styled.button`
z-index: 10;
  padding: 20px;
  background-color: #000;
  color: #fff;
  position: absolute;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  cursor: pointer;
  &:before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    margin: auto;
    bottom: 20px;
    height: 1px;
    width: 45%;
    background: #fff;
  }
`;
