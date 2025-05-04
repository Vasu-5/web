// src/App.jsx
import React from 'react';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <ProductsSection />
      <ContactSection />
    </>
  );
};

export default App;
