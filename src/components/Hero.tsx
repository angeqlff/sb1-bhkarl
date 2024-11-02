import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Elevate Your Gaming
          </span>
          <br />
          <span className="text-white">
            With Dreyna
          </span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Experience gaming excellence with our cutting-edge solutions designed for competitive players who demand the best.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/products')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all group"
          >
            Explore Products
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button 
            onClick={() => navigate('/features')}
            className="border border-purple-500/50 hover:border-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            View Features
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10k+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
          <div className="text-center hidden md:block">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;