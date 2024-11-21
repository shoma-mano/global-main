import { Property } from '../types/property';
import i18next from 'i18next';

export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: '1',
    title: i18next.t('sampleProperties.shibuya.title'),
    location: i18next.t('sampleProperties.shibuya.location'),
    price: 75000000,
    size: 65,
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
    type: 'apartment',
    features: i18next.t('sampleProperties.shibuya.features', { returnObjects: true }),
    additionalImages: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1585128792020-803d29415281?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '2',
    title: i18next.t('sampleProperties.kyoto.title'),
    location: i18next.t('sampleProperties.kyoto.location'),
    price: 120000000,
    size: 120,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    type: 'house',
    features: i18next.t('sampleProperties.kyoto.features', { returnObjects: true }),
    additionalImages: [
      'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '3',
    title: i18next.t('sampleProperties.roppongi.title'),
    location: i18next.t('sampleProperties.roppongi.location'),
    price: 250000000,
    size: 180,
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80',
    type: 'mansion',
    features: i18next.t('sampleProperties.roppongi.features', { returnObjects: true }),
    additionalImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3'
    ]
  }
];