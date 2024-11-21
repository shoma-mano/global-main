import React from 'react';
import PropertyCard from './PropertyCard';
import { SAMPLE_PROPERTIES } from '../data/properties';

export default function PropertyList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SAMPLE_PROPERTIES.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}