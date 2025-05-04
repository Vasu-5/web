// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: #ffffffee;
  backdrop-filter: blur(6px);
  z-index: 999;
  display: flex;
  justify-content: right;
  gap: 2rem;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: #0077ff;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Link href="#home">Home</Link>
      <Link href="#products">Products</Link>
      <Link href="#contact">Contact</Link>
    </Nav>
  );
};

export default Header;
