// src/components/ContactSection.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  background: #f1f1f1;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Info = styled(motion.div)`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
`;

const ContactSection = () => {
  return (
    <Section id="contact">
      <Title>Contact Us</Title>
      <Info
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>Email: vaish@gmail.com</p>
        <p>Phone: +91 1234567891</p>
        <p>Address: 123, Vaish , Hubballi, Karnataka</p>
      </Info>
    </Section>
  );
};

export default ContactSection;
