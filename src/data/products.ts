import { Crosshair, Eye, Shield } from 'lucide-react';
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'dreynbot',
    name: 'Dreynbot',
    icon: Crosshair,
    price: '124.99',
    description: 'Advanced external pixel-based aimbot for precision targeting',
    features: [
      'Pixel-Based Targeting',
      'External Support',
      'Customizable Aim Settings',
      'Undetectable Operation'
    ],
    subscriptionPrices: {
      month: 124.99,
      threeMonths: 219.99,
      sixMonths: 349.99,
      year: 499.99,
      lifetime: 699.99
    }
  },
  {
    id: 'dreynternal',
    name: 'Dreynternal',
    icon: Eye,
    price: '400',
    description: 'Comprehensive ESP tool with integrated skin changer functionality',
    features: [
      'Advanced ESP System',
      'Integrated Skin Changer',
      'Player Position Tracking',
      'Custom Visual Configurations'
    ],
    subscriptionPrices: {
      month: 400,
      threeMonths: 400,
      sixMonths: 400,
      year: 400,
      lifetime: 400
    }
  },
  {
    id: 'dreynspoof',
    name: 'Dreynspoof',
    icon: Shield,
    price: '50',
    description: 'Advanced hardware spoofer for comprehensive ban protection',
    features: [
      'Hardware ID Spoofing',
      'Ban Protection System',
      'Auto-Update Protection',
      'Instant HWID Reset'
    ],
    subscriptionPrices: {
      month: 50,
      threeMonths: 100,
      lifetime: 200
    }
  }
];