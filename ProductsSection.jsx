// src/components/ProductsSection.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Vaishdesktop from '../images/Vaishdesktop.jpg';

const Section = styled.section`
  padding: 4rem 2rem;
  background-image: url('https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;
  color: #fff;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* dark overlay for readability */
    z-index: -1;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  display: block;
  margin: 0 auto 2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  width: 60%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  color: #222;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  text-align: center;

  img {
    max-width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: #555;
  }
`;

const defaultProducts = [
  {
    name: 'Product 1',
    image: Vaishdesktop,
    description: 'An advanced desktop solution for productivity and speed.'
  },
  {
    name: 'Infinity',
    image: 'https://img-cdn.thepublive.com/fit-in/1200x675/sky247-hindi/media/post_banners/FuLfapVIelzrACb2LNvc.jpg',
    description: 'Endless possibilities with next-gen control systems.'
  },
  {
    name: 'Trust',
    image: 'https://www.bmw.co.id/content/dam/bmw/common/all-models/m-series/m3-sedan/2023/highlights/bmw-3-series-cs-m-automobiles-sp-desktop.jpg',
    description: 'Reliable and robust industrial-grade performance.'
  },
  {
    name: 'Perfect',
    image: 'https://via.placeholder.com/300x200?text=Product+4',
    description: 'Tailored to perfection for every application need.'
  },
];

const ProductsSection = () => {
  const [search, setSearch] = useState('');

  const filteredProducts = defaultProducts.filter(prod =>
    prod.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Section id="products">
      <Title>Our Products</Title>
      <SearchInput
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ProductGrid>
        {filteredProducts.map((prod, idx) => (
          <ProductCard
            key={idx}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{prod.name}</h3>
            <img src={prod.image} alt={prod.name} />
            <p>{prod.description}</p>
          </ProductCard>
        ))}
      </ProductGrid>
    </Section>
  );
};

export default ProductsSection;
