import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: () => void;
  isSelected: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, isSelected }) => {
  const navigate = useNavigate();
  const Icon = product.icon;

  const handleClick = () => {
    onSelect();
    setTimeout(() => {
      navigate(`/product/${product.id}`);
    }, 200);
  };

  return (
    <div
      className={`relative p-6 rounded-xl transition-all duration-200 cursor-pointer card-hover
        ${isSelected 
          ? 'bg-purple-600/20 border-purple-500/50' 
          : 'bg-gray-800/50 border-gray-700'
        } border`}
      onClick={handleClick}
    >
      {/* Product Icon */}
      <div className="mb-4">
        <Icon 
          size={32} 
          className={`${isSelected ? 'text-purple-400' : 'text-gray-400'} transition-colors`}
        />
      </div>

      {/* Product Name and Price */}
      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-3xl font-bold">€{product.price}</span>
        <span className="text-gray-400 ml-2">/month</span>
      </div>

      {/* Description */}
      <p className="text-gray-400 mb-6">{product.description}</p>

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <svg
              className={`w-4 h-4 mr-2 ${isSelected ? 'text-purple-400' : 'text-gray-400'}`}
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

      {/* Buy Button */}
      <button
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-200
          ${isSelected 
            ? 'bg-purple-600 hover:bg-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/20' 
            : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
          } hover:scale-[1.02]`}
      >
        Buy Now
      </button>

      {/* Selection Indicator */}
      <div
        className={`absolute -inset-px rounded-xl transition-all duration-200
          ${isSelected ? 'border-2 border-purple-500/50' : 'border border-transparent'}`}
      />
    </div>
  );
};

export default ProductCard;