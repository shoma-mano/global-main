export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  type: 'apartment' | 'house' | 'mansion';
  features: string[];
  additionalImages?: string[];
}