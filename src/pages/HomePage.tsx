import React from 'react';
import SearchFilters from '../components/SearchFilters';
import PropertyList from '../components/PropertyList';

export default function HomePage() {
  const handleSearch = (filters: any) => {
    console.log('Search filters:', filters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        <SearchFilters onSearch={handleSearch} />
        <PropertyList />
      </div>
    </div>
  );
}