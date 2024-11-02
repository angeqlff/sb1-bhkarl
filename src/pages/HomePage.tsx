import React, { useState } from 'react';
import { AlertTriangle, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { Product } from '../types';

interface HomePageProps {
  products: Product[];
}

const HomePage: React.FC<HomePageProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-16" id="products-section">
        {/* Legal Disclaimer */}
        <div className="mb-16 p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
          <div className="flex items-center gap-2 text-yellow-400 mb-2">
            <AlertTriangle size={20} />
            <h3 className="font-bold">Legal Disclaimer</h3>
          </div>
          <p className="text-sm text-gray-400">
            The use of third-party software may violate game terms of service. Users assume all responsibility and risk.
            This software is for educational purposes only.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="pricing">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={() => setSelectedProduct(product.id)}
              isSelected={selectedProduct === product.id}
            />
          ))}
        </div>

        {/* Features Section */}
        <section className="mt-32" id="features">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Why Choose Our Solutions?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.id} className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon className="text-purple-400" size={24} />
                    {product.name}
                  </h3>
                  <p className="text-gray-400">{product.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => window.location.href = '/features'}
              className="btn-secondary inline-flex items-center gap-2"
            >
              View Comparison Table
              <ChevronRight size={20} />
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-32 text-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
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
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="mt-32 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Game?</h2>
            <p className="text-gray-400 mb-8">
              Join thousands of satisfied users and experience gaming at a whole new level.
            </p>
            <button 
              onClick={() => window.open('https://discord.gg/your-server', '_blank')}
              className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group"
            >
              Get Started Now
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;