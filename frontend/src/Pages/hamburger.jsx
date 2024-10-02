// /c:/personal dg/github_repo/StationSaarthi/frontend/src/Pages/hamburger.jsx

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

const MenuIcon = styled.div`
    width: 30px;
    height: 3px;
    background-color: white;
    margin: 6px 20px;
    transition: transform 0.4s, opacity 0.4s;
`;

const HamburgerContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

const Menu = styled.div`
    display: ${({ open }) => (open ? 'block' : 'none')};
    background-color: white;
    position: absolute;
    height: 100vh;
    width: 30vw;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.4s;
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
    &:hover {
        background-color: rgb(59 130 246);
        color:white;
    }
`;

const Hamburger = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div>
            <HamburgerContainer onClick={toggleMenu}>
                <MenuIcon style={{ transform: open ? 'rotate(-45deg) translate(-25px, -6px)' : 'rotate(0)' }} />
                <MenuIcon style={{ opacity: open ? 0 : 1 }} />
                <MenuIcon style={{ transform: open ? 'rotate(45deg) translate(-25px, 6px)' : 'rotate(0)' }} />
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