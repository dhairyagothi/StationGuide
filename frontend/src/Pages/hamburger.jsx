import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const MenuIconBar = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 6px 0;
  transition: transform 0.4s, opacity 0.4s;
`;

const HamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Menu = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 30vw;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.4s ease forwards;
  
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const MenuItem = styled.a`
  color: rgb(59 130 246);
  padding: 22px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: rgb(59 130 246);
    color: white;
  }
`;

const HamburgerIcon = styled.div`
  position: relative;
  width: 30px;
  height: 24px;
`;

const Bar1 = styled(MenuIconBar)`
  transform: ${({ open }) => (open ? 'rotate(-45deg) translate(-5px, 5px)' : 'rotate(0)')};
`;

const Bar2 = styled(MenuIconBar)`
  opacity: ${({ open }) => (open ? 0 : 1)};
`;

const Bar3 = styled(MenuIconBar)`
  transform: ${({ open }) => (open ? 'rotate(45deg) translate(-5px, -5px)' : 'rotate(0)')};
`;

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <HamburgerContainer onClick={toggleMenu} aria-label="Toggle Menu" role="button">
        <HamburgerIcon>
          <Bar1 open={open} />
          <Bar2 open={open} />
          <Bar3 open={open} />
        </HamburgerIcon>
      </HamburgerContainer>
      <Menu open={open}>
        <MenuItem href="#home">Home</MenuItem>
        <MenuItem href="#services">Services</MenuItem>
        <MenuItem href="#contact">Contact</MenuItem>
      </Menu>
    </div>
  );
};

export default Hamburger;
