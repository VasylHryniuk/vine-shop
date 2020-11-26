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
  HeaderSearchLink,
  HeaderLogoLink,
  HeaderBagLink,
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
            <HeaderLogoLink src={Logo} />
          </HeaderLogo>
          <HeaderItemsLink>Login</HeaderItemsLink>
          <HeaderItemsLink>Register</HeaderItemsLink>
          <HeaderItemsLink>Wish List (0)</HeaderItemsLink>
          <HeaderItemsLink>
            <HeaderSearchLink src={Search} />
          </HeaderItemsLink>
          <HeaderItemsLink>
            <HeaderBagLink src={Bag} />
          </HeaderItemsLink>
          <HeaderItemsLink>
            <GiHamburgerMenu style={{ width: "24px", height: "24px" }} />
          </HeaderItemsLink>
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
