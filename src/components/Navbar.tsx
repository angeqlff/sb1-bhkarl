import React from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NavLink } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';
import DiscordIcon from './icons/DiscordIcon';

const navLinks: NavLink[] = [
  { label: 'Products', href: '/#products-section' },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
];

const DISCORD_URL = 'https://discord.gg/your-server';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const isHomePage = location.pathname === '/';
      const targetId = href.split('#')[1];
      
      if (!isHomePage) {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Zap size={24} className="text-purple-400" />
            <span 
              onClick={() => navigate('/')}
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text cursor-pointer hover:scale-105 transition-transform"
            >
              Dreyna
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-white px-3 py-2 transition-all hover:scale-105"
              >
                {link.label}
              </button>
            ))}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white p-2 rounded-lg transition-all hover:bg-purple-500/10 hover:scale-110 group"
              aria-label="Join Discord Server"
            >
              <DiscordIcon className="w-5 h-5 group-hover:text-purple-400" />
            </a>
            <button
              onClick={() => navigate('/products')}
              className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 ml-2"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
              >
                <DiscordIcon className="w-5 h-5" />
                Join Discord
              </a>
              <button
                onClick={() => {
                  navigate('/products');
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md bg-purple-600 hover:bg-purple-500 text-white transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;