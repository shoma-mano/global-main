import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Property } from '../types/property';
import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [, setLocation] = useLocation();
  const { t } = useTranslation();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'JPY',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => setLocation(`/property/${property.id}`)}
    >
      <div className="relative h-48">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded text-sm">
          {property.type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-indigo-600">{formatPrice(property.price)}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.bedrooms} {t('property.beds')}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms} {t('property.baths')}</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{property.size} {t('property.sqm')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}