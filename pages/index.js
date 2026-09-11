import React, { useState, useEffect } from 'react';
import ProjectsBtn from '../components/ProjectsBtn';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ParticlesContainer from '../components/ParticlesContainer';
import Avatar from '../components/Avatar';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  const [textIndex, setTextIndex] = useState(0);
  const texts = t.home.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='h-full container mx-auto flex flex-col justify-center xl:pt-40 xl:text-left'>
          {/* Titre */}
          <div className='h1'>
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden" animate="show" exit="hidden">
              {t.home.greeting} <br />
              <span className='text-accent'>
                <motion.span variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden">
                  {texts[textIndex]}
                </motion.span>
              </span>
            </motion.h1>
          </div>

          {/* Paragraphe */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden" animate="show" exit="hidden"
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            {t.home.paragraph}
          </motion.p>

          {/* Bouton */}
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden" animate="show" exit="hidden"
            className='sm:w-5/6 xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 bg-red-600 hover:bg-slate-200 text-white hover:text-[#171227] font-bold py-2 px-2 rounded-full flex justify-center w-5/6 transition-transform duration-300 transform hover:scale-105'>
            <ProjectsBtn className='items-center text-center' />
          </motion.div>
        </div>
      </div>

      {/* Image et composants */}
      <div className='w-[1200px] h-full absolute right-0 top-0'>
        {/* Fond d'écran */}
        <div className='bg-explosion bg-cover bg-right bg-no-repeat w-full h-full mix-blend-color-dodge translate-z-0' />

        {/* Conteneur de particules */}
        <div className='w-full h-full absolute inset-0 pointer-events-none'>
          <ParticlesContainer />
        </div>
        

        {/* Conteneur Avatar */}
        <motion.div 
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0'
          style={{ right: '5%' }}
          variants={fadeIn('up', 0.5)}
          initial="hidden" animate="show" exit="hidden" transition={{duration: 1, ease: 'easeInOut'}}>
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
