import React from 'react';
import { ChevronLeft, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FeaturesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-400 hover:text-white mb-8 group transition-colors"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Features Comparison
          </span>
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left">Features</th>
                <th className="py-4 px-6 text-center">Dreynbot</th>
                <th className="py-4 px-6 text-center">Dreynternal</th>
                <th className="py-4 px-6 text-center">Dreynspoof</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {/* Aimbot Features */}
              <tr className="bg-gray-800/20">
                <td colSpan={4} className="py-3 px-6 font-semibold">Aimbot Features</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Pixel-Based Targeting</td>
                <td className="py-3 px-6 text-center"><Check className="inline text-green-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
              </tr>
              <tr>
                <td className="py-3 px-6">External Operation</td>
                <td className="py-3 px-6 text-center"><Check className="inline text-green-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
              </tr>

              {/* ESP Features */}
              <tr className="bg-gray-800/20">
                <td colSpan={4} className="py-3 px-6 font-semibold">ESP Features</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Wallhack</td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><Check className="inline text-green-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
              </tr>
              <tr>
                <td className="py-3 px-6">Player Highlights</td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><Check className="inline text-green-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
              </tr>

              {/* Spoofer Features */}
              <tr className="bg-gray-800/20">
                <td colSpan={4} className="py-3 px-6 font-semibold">Spoofer Features</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Hardware ID Spoofing</td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><Check className="inline text-green-500" size={20} /></td>
              </tr>
              <tr>
                <td className="py-3 px-6">Ban Protection</td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><Check className="inline text-green-500" size={20} /></td>
              </tr>

              {/* Customization */}
              <tr className="bg-gray-800/20">
                <td colSpan={4} className="py-3 px-6 font-semibold">Customization</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Skin Changer</td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><Check className="inline text-green-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><X className="inline text-red-500" size={20} /></td>
              </tr>
              <tr>
                <td className="py-3 px-6">Custom Configurations</td>
                <td className="py-3 px-6 text-center"><Check className="inline text-green-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><Check className="inline text-green-500" size={20} /></td>
                <td className="py-3 px-6 text-center"><Check className="inline text-green-500" size={20} /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Choose?</h2>
          <button
            onClick={() => navigate('/products')}
            className="btn-primary"
          >
            View Products
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;