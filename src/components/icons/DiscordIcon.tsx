import React from 'react';

interface DiscordIconProps {
  className?: string;
}

const DiscordIcon: React.FC<DiscordIconProps> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-2.4 5.8 8.5 8.5 0 0 1-12 0A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 17 0Z" />
    <path d="M8 13h8M8 9h8" />
    <path d="M12 17v3l-2-2h-3" />
  </svg>
);


export default DiscordIcon;