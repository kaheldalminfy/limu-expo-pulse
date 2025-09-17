import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang-toggle">
      <button
        onClick={() => setLanguage('ar')}
        className={language === 'ar' ? 'active' : ''}
        aria-pressed={language === 'ar'}
      >
        عربي
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'active' : ''}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
};