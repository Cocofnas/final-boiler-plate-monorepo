import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logonew.png";

const tablet = `(min-width: 750px)`;
const desktop = `(min-width: 1007px)`;

const FMLogo = styled.img`
  height: 50px;
  width: auto;
  @media ${tablet} {
    height: 90px;
    width: auto;
  }
  @media ${desktop} {
    height: 90px;
    width: auto;
  }
  /* &:hover { ev Ändra till annan logga vid hover
    content: url('')
  } */
`;

const NavbarContainer = styled.nav`
  background-color: #01999a;
  color: #66feff;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  padding: 10px 5px 0.1px 5px;

  @media ${tablet} {
    display: flex;
    justify-content: space-between;
  }
  @media ${desktop} {
    display: flex;
    justify-content: space-between;
  }
`;

const NavbarNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 5px;
  margin-top: 2px;
  padding: 1px;

  @media ${tablet} {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 10px;
  }

  @media ${desktop} {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 10px;
  }
`;

const NavItem = styled.li`
  margin: 2px;

  @media ${tablet} {
    color: #66feff;
    font-size: 35px;
    font-family: "JosefinSans";
    display: inline-block;
    justify-content: flex-end;
    margin-right: 15px;
    text-decoration: none;
  }
  @media ${desktop} {
    color: #66feff;
    font-size: 35px;
    font-family: "JosefinSans";
    text-decoration: none;
  }
`;

const NavbarLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  color: #66feff;
  font-family: "JosefinSans";
  &:hover {
    text-decoration: none;
    color: white;
  }
  @media ${tablet} {
    font-size: 35px;
    display: inline-block;
    justify-content: space-around;
    &:hover {
      text-decoration: none;
      color: white;
    }
  }
  @media ${desktop} {
    font-size: 35px;
    display: inline-block;
    justify-content: space-around;
    &:hover {
      text-decoration: none;
      color: white;
    }
  }
`;

const AboutLink = styled(NavbarLink)`
  color: yellow;
  &:hover {
    color: white;
  }
`;

const RestaurantLink = styled(NavbarLink)`
  color: #fcabe3;
  &:hover {
    color: white;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <FMLogo src={logo} alt="Logo" />
      </a>
      <NavbarNav>
        <NavItem>
          <NavbarLink to="/">Home</NavbarLink>
        </NavItem>
        <NavItem>
          <AboutLink to="/about">About</AboutLink>
        </NavItem>
        <NavItem>
          <RestaurantLink to="/addrestaurant">Add Restaurant</RestaurantLink>
        </NavItem>
      </NavbarNav>
    </NavbarContainer>
  );
};

export default Navbar;
