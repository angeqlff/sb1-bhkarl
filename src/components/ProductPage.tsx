import React, { useState, useMemo } from 'react';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { Product, SubscriptionDuration } from '../types';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface ProductPageProps {
  products: Product[];
}

const ProductPage: React.FC<ProductPageProps> = ({ products }) => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [selectedDuration, setSelectedDuration] = useState<SubscriptionDuration>('month');

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const availableSubscriptions = useMemo(() => {
    const subscriptions: { value: SubscriptionDuration; label: string }[] = [];
    
    if (product.subscriptionPrices.month) {
      subscriptions.push({ value: 'month', label: '1 Month' });
    }
    if (product.subscriptionPrices.threeMonths) {
      subscriptions.push({ value: 'threeMonths', label: '3 Months' });
    }
    if (product.subscriptionPrices.sixMonths) {
      subscriptions.push({ value: 'sixMonths', label: '6 Months' });
    }
    if (product.subscriptionPrices.year) {
      subscriptions.push({ value: 'year', label: '12 Months' });
    }
    if (product.subscriptionPrices.lifetime) {
      subscriptions.push({ value: 'lifetime', label: 'Lifetime' });
    }
    
    return subscriptions;
  }, [product]);

  const handlePurchase = () => {
    window.open('https://discord.gg/TzJM4H2qHu', '_blank');
  };

  const ProductIcon = product.icon;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16 flex-grow">
        <button
          onClick={() => navigate('/products')}
          className="flex items-center text-gray-400 hover:text-white mb-8 group transition-colors"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <ProductIcon size={48} className="text-purple-400" />
              <h1 className="text-4xl font-bold">{product.name}</h1>
            </div>
            
            <p className="text-gray-300 text-lg mb-8">{product.description}</p>

            <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 mr-3 text-purple-400"
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
            </div>
          </div>

          {/* Purchase Options */}
          <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Select Subscription</h2>
            
            <div className="space-y-4 mb-8">
              {availableSubscriptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedDuration(option.value)}
                  className={`w-full p-4 rounded-lg border transition-all duration-200 ${
                    selectedDuration === option.value
                      ? 'border-purple-500 bg-purple-500/20'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{option.label}</span>
                    <span className="font-bold">
                      €{product.subscriptionPrices[option.value].toFixed(2)}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handlePurchase}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              Purchase Now
              <ExternalLink size={20} />
            </button>

            <p className="text-gray-400 text-sm mt-4 text-center">
              You will be redirected to our Discord server to complete your purchase
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;