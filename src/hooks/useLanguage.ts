import { createContext, useContext, useState, useEffect } from 'react';
import content from '@/data/content.json';

type Language = 'ar' | 'en';
type Content = typeof content;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: Content['ar'] | Content['en'];
  t: (key: string) => string;
  isRTL: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useLanguageProvider = () => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    // Set document language and direction
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Store preference
    localStorage.setItem('limu-lang', language);
  }, [language]);

  useEffect(() => {
    // Load saved preference
    const saved = localStorage.getItem('limu-lang') as Language;
    if (saved && ['ar', 'en'].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  const currentContent = content[language];
  const isRTL = language === 'ar';

  // Helper function to get nested content by key path
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = currentContent;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return typeof value === 'string' ? value : key;
  };

  return {
    language,
    setLanguage,
    content: currentContent,
    t,
    isRTL,
  };
};