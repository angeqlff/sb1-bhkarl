export interface Product {
  id: string;
  name: string;
  icon: any; // LucideIcon type
  price: string;
  description: string;
  features: string[];
  subscriptionPrices: {
    month: number;
    threeMonths: number;
    sixMonths?: number;
    year?: number;
    lifetime: number;
  };
}

export type SubscriptionDuration = 'month' | 'threeMonths' | 'sixMonths' | 'year' | 'lifetime';

export interface NavLink {
  label: string;
  href: string;
}