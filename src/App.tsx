import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './components/ProductPage';
import FeaturesPage from './pages/FeaturesPage';
import ProductsPage from './pages/ProductsPage';
import { products } from './data/products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/products" element={<ProductsPage products={products} />} />
        <Route path="/product/:productId" element={<ProductPage products={products} />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </Router>
  );
}

export default App;