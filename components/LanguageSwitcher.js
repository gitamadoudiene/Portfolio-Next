import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label='Change language'
      className='flex items-center justify-center w-9 h-9 xl:w-10 xl:h-10 rounded-full
      text-[13px] font-semibold tracking-wide hover:text-accent transition-all duration-300'
    >
      {lang === 'en' ? 'FR' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
