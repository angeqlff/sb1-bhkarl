import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800/50 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">© 2024 Dreyna. All rights reserved.</p>
        <p className="text-purple-400/80 text-sm mt-2 font-medium hover:text-purple-400 transition-colors cursor-default">
          Developed by vvs TLM
        </p>
      </div>
    </footer>
  );
};

export default Footer;