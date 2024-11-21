import React from 'react';
import { Globe2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocation } from 'wouter';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setLocation('/')}
          >
            <Globe2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">GlobalEstate</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}