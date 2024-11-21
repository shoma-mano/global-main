import React from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SearchFiltersProps {
  onSearch: (filters: any) => void;
}

export default function SearchFilters({ onSearch }: SearchFiltersProps) {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              {t('property.location')}
            </label>
            <input
              type="text"
              id="location"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder={t('search.locationPlaceholder')}
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              {t('property.price')}
            </label>
            <select
              id="price"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">{t('property.priceRanges.any')}</option>
              <option value="0-50000000">{t('property.priceRanges.range1')}</option>
              <option value="50000000-100000000">{t('property.priceRanges.range2')}</option>
              <option value="100000000+">{t('property.priceRanges.range3')}</option>
            </select>
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              {t('property.type')}
            </label>
            <select
              id="type"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">{t('property.types.all')}</option>
              <option value="apartment">{t('property.types.apartment')}</option>
              <option value="house">{t('property.types.house')}</option>
              <option value="mansion">{t('property.types.mansion')}</option>
            </select>
          </div>
          <div>
            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
              {t('property.bedrooms.label')}
            </label>
            <select
              id="bedrooms"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">{t('property.bedrooms.any')}</option>
              <option value="1">{t('property.bedrooms.onePlus')}</option>
              <option value="2">{t('property.bedrooms.twoPlus')}</option>
              <option value="3">{t('property.bedrooms.threePlus')}</option>
              <option value="4">{t('property.bedrooms.fourPlus')}</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Search className="h-4 w-4 mr-2" />
            {t('search.searchButton')}
          </button>
        </div>
      </form>
    </div>
  );
}