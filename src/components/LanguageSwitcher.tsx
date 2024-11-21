import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { Menu } from '@headlessui/react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ja', name: '日本語' },
  { code: 'zh', name: '中文' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    document.documentElement.lang = langCode;
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
        <Languages className="h-5 w-5" />
        <span className="hidden md:inline">{currentLanguage.name}</span>
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {languages.map((lang) => (
            <Menu.Item key={lang.code}>
              {({ active }) => (
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`${
                    active || i18n.language === lang.code
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700'
                  } group flex w-full items-center px-4 py-2 text-sm`}
                >
                  {lang.name}
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
}