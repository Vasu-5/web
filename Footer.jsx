// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  background: #002244;
  color: white;
  padding: 2rem;
  text-align: center;

  p {
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <p>&copy; {new Date().getFullYear()} V Valve Controls. All rights reserved.</p>
    </FooterWrap>
  );
};

export default Footer;
