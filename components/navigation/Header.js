import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Component imports
import Hamburger from "./Hamburger";
import SideNav from "./SideNav";
// External imports
import styled from "styled-components";

const Navbar = styled.nav`
  width: 100vw;
  height: 5rem;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 1);
  border-bottom: 1px solid #aaa;
  z-index: 100;
  padding: 0 3rem;

  .navContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;
  }
`;

const NavList = styled.ul`
  height: 3rem;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    margin-right: ${(props) => props.theme.mobilePadding};
  }
`;

const NavItem = styled.li`
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 80%;
  display: none;
  transition: background-color 0.3s ease;
  border-radius: 3px;
  color: ${(props) => props.theme.darkGray};

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: #fff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding: 0 2rem;
    font-size: 1.333rem;
    height: 100%;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export default function Header() {
  const [sideNavigationOpen, setSideNavigationOpen] = useState(false);

  const openHandler = () => {
    setSideNavigationOpen(!sideNavigationOpen);
  };

  return (
    <Navbar>
      <div className='navContainer'>
        <Image src={"/logo2.png"} width='120' height='80' />
        <NavList>
          <NavItem>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </NavItem>

          <NavItem>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </NavItem>

          <NavItem>
            <Link href='/services'>
              <a>Services</a>
            </Link>
          </NavItem>

          <NavItem>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </NavItem>

          <Hamburger
            openHandler={openHandler}
            sideNavigationOpen={sideNavigationOpen}
          />
        </NavList>
        <SideNav sideOpen={sideNavigationOpen} openHandler={openHandler} />
      </div>
    </Navbar>
  );
}
