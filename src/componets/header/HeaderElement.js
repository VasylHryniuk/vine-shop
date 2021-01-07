import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderTop = styled.header`
  background: black;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  max-width: 1170px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
`;

export const HeaderMotto = styled.p``;
export const HeaderLogo = styled(Link)`
  margin-right: 65px;
`;

export const HeaderItems = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const HeaderItemsLink = styled(Link)`
  margin-left: 46px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  &:first-of-type {
    margin-left: 0;
  }
  &:hover {
    color: #e2b024;
  }
`;

export const HeaderNav = styled.div`
  max-width: 1170px;
  margin: auto;
`;

export const Nav = styled.nav`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  padding: 30px 0;
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  line-height: 9px;
  color: #ffffff;
  font-family: "Lobster Two", cursive;
  text-decoration: none;
  transition: all 0.4s ease;
  position: relative;
  &:hover {
    color: #e2b024;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -10px;
      height: 2px;
      width: 100%;
      background: #e2b024;
      transition: all 0.4s ease;
    }
  }
`;

export const HeaderBurger = styled.div`
margin-left: 25px;
`;
