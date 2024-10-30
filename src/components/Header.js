import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #1a1a1a;
  padding: 1rem;
  color: #00ff00;
`;

function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Link to="home" smooth duration={500}>Home</Link>
        <Link to="about" smooth duration={500}>About</Link>
        <Link to="research" smooth duration={500}>Research</Link>
        <Link to="projects" smooth duration={500}>Projects</Link>
        <Link to="contact" smooth duration={500}>Contact</Link>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
