import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  background-color: rgba(0, 128, 128, 0.6);
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  z-index: 1000;
  backdrop-filter: blur(10px);

  @media only screen and (max-width: 768px) {
    flex-direction: column; /* Change to column for small screens */
    align-items: center;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1em;
  font-size: 18px;
  margin-right: 25px;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    display: ${(props) => (props['data-menuvisible'] ? 'flex' : 'none')};
    flex-direction: column; /* Change to column for small screens */
    width: 100%;
    align-items: center; /* Center the links on small screens */
    margin-top: 20px; /* Add margin to create space between menu toggle and links */
  }
`;

const Logo = styled.div`
  font-size: 32px;
  font-family: fantasy;
  
`;

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      toggleMenu(); 
    }
  };
  const scrollToHome = () => {
    const HomeSection = document.getElementById('home');
    if (HomeSection) {
        HomeSection.scrollIntoView({ behavior: 'smooth' });
      toggleMenu(); 
    }
  };

  return (
    <NavbarContainer>
      <Logo>Uzair Farooq</Logo>
      <MenuToggle className="toggle" onClick={toggleMenu}>
        &#9776;
      </MenuToggle>
      <NavLinks data-menuvisible={menuVisible}>
        <a href="#" onClick={scrollToHome}>
          Home
        </a>
        <a href="#" onClick={scrollToAbout}>
          About
        </a>
        <a href="#projects" onClick={toggleMenu}>
          Projects
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
