// src/components/HeroSection.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #002244, #005577);
  color: white;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const HeroSection = () => {
  return (
    <Hero id="hero">
      <HeroContent
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1>V Valve Controls</h1>
        <p>Delivering reliable, high-performance valve automation solutions for every industry need.</p>
      </HeroContent>
    </Hero>
  );
};

export default HeroSection;
