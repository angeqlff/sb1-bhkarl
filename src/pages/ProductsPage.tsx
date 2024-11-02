import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Product } from '../types';

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Our Products
          </span>
        </h1>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-12 pr-4 
                text-white placeholder-gray-400 
                transition-all duration-200
                focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/10"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 cursor-pointer card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon size={32} className="text-purple-400 group-hover:scale-110 transition-transform" />
                  <h2 className="text-2xl font-bold">{product.name}</h2>
                </div>
                
                <p className="text-gray-400 mb-6">{product.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">€{product.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <svg
                        className="w-4 h-4 mr-2 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="btn-primary w-full">
                  View Details
                </button>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            No products found matching your search.
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;