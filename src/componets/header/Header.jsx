import React from "react";

import Logo from "../../images/logo.png";
import Search from "../../images/search.svg";
import Bag from "../../images/bag.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { navData } from "./data";

import {
  HeaderTop,
  HeaderContainer,
  HeaderMotto,
  HeaderLogo,
  HeaderItems,
  HeaderItemsLink,
  HeaderBurger,
  HeaderNav,
  Nav,
  NavLink,
} from "./HeaderElement";

const Header = () => {
  return (
    <HeaderTop>
      <HeaderContainer>
        <HeaderMotto>We Ship Everywhere! Free In The Us!</HeaderMotto>
        <HeaderItems>
          <HeaderLogo to="/">
            <img src={Logo} alt="logo" />
          </HeaderLogo>
          <HeaderItemsLink to="/login">Login</HeaderItemsLink>
          <HeaderItemsLink to="/register">Register</HeaderItemsLink>
          <HeaderItemsLink to="/wishlist">Wish List (0)</HeaderItemsLink>
          <HeaderItemsLink to="/search">
            <img src={Search} alt="search" />
          </HeaderItemsLink>
          <HeaderItemsLink to="/bag">
            <img src={Bag} alt="bag" />
          </HeaderItemsLink>

          <HeaderBurger>
             <GiHamburgerMenu style={{ width: "24px", height: "24px" }} />
          </HeaderBurger>
         
        </HeaderItems>
      </HeaderContainer>

      <HeaderNav>
        <Nav>
          {navData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </Nav>
      </HeaderNav>
    </HeaderTop>
  );
};

export default Header;
