import React, { useState } from 'react';
import { useRoute } from 'wouter';
import { MapPin, Bed, Bath, Square, Heart, Share2, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SAMPLE_PROPERTIES } from '../data/properties';
import ChatInterface from '../components/ChatInterface';

export default function PropertyDetailPage() {
  const [, params] = useRoute('/property/:id');
  const { t } = useTranslation();
  const [showChat, setShowChat] = useState(false);
  
  const property = SAMPLE_PROPERTIES.find(p => p.id === params?.id);

  if (!property) {
    return <div className="text-center py-12">{t('property.notFound')}</div>;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'JPY',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="space-y-4">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              {property.additionalImages && property.additionalImages.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {property.additionalImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${property.title} - View ${index + 1}`}
                      className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
                <div className="flex items-center text-gray-600 mt-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{property.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-indigo-600">
                  {formatPrice(property.price)}
                </span>
                <div className="flex space-x-4">
                  <button className="p-2 text-gray-600 hover:text-indigo-600">
                    <Heart className="h-6 w-6" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-indigo-600">
                    <Share2 className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-col items-center">
                  <Bed className="h-6 w-6 text-indigo-600" />
                  <span className="mt-1 text-sm text-gray-600">{property.bedrooms} {t('property.beds')}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bath className="h-6 w-6 text-indigo-600" />
                  <span className="mt-1 text-sm text-gray-600">{property.bathrooms} {t('property.baths')}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Square className="h-6 w-6 text-indigo-600" />
                  <span className="mt-1 text-sm text-gray-600">{property.size} {t('property.sqm')}</span>
                </div>
              </div>

              {property.features && property.features.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t('property.features')}</h2>
                  <ul className="grid grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={() => setShowChat(true)}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>{t('property.contactAgent')}</span>
              </button>
            </div>
          </div>
        </div>

        {showChat && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-2xl">
              <div className="relative">
                <button
                  onClick={() => setShowChat(false)}
                  className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <ChatInterface />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}