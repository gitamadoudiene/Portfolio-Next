import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const stored = window.localStorage.getItem('lang');
    if (stored === 'en' || stored === 'fr') {
      setLang(stored);
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'en' ? 'fr' : 'en';
      window.localStorage.setItem('lang', next);
      return next;
    });
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
