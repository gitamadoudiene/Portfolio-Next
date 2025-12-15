import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNodeJs,
  FaPhp,
  FaFlutter,
  FaAngular,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMysql,
  SiSymphony,
  SiCanva,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development Languages',
        icons: [
          <FaHtml5 key="html5" className="inline-block" />,
          <FaCss3 key="css3" className="inline-block" />,
          <FaJs key="js" className="inline-block" />,
          <FaPhp key="php" className="inline-block" />
         
        ],
      },

      { // <FaFlutter key="flutter" className="inline-block"/>
        title: 'Web Development Technologies',
        icons: [

      <FaReact key="react" className="inline-block" />,
          
          <SiNextdotjs key="nextjs" className="inline-block" />,
          <SiFramer key="framer" className="inline-block" />,
          <FaWordpress key="wordpress" className="inline-block" />,
          <FaNodeJs key="nodejs" className="inline-block" />,
          <SiMysql key="mysql" className="inline-block" />,
          <SiSymphony key="symphony" className="inline-block" />,
          <FaAngular key="angular" className="inline-block" />,
        ],
      },


      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="figma" className="inline-block" />,
          <SiCanva key="symphony" className="inline-block" />,
          <SiAdobephotoshop key="photoshop" className="inline-block" />
        ],
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Les pedagogues',
        stage: ' - 2018',
      },
      {
        title: 'Universite Dakar Bourguiba',
        stage: '2018 - 2022',
      },
            {
        title: 'Woolf University',
        stage: '2025 -',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'SI- Majorel',
        stage: '2021 - 2022',
      },
      {
        title: 'Digital Manager - Kange Prestation',
        stage: '2022 - 2023',
      },
      {
        title: 'Instructor - Gomycode - Xarala Academy - Unipro',
        stage: '2023 - . ',
      },
      {
        title: 'FullStack Developer - Phoenix Digital Agency',
        stage: '2021 - .',
      },
            {
        title: 'Associate CTO - Eath',
        stage: '2025 - .',
      },
    ],
  },
 
  {
    title: 'certification',
    info: [
     
       {
        title: 'Introduction to Cybersecurity - Cisco',
      
      },
       {
        title: 'Analyste en Cybersécurité - Force N',
      
      },
       {
        title: 'Quality Assurance - FreecodeCamp',
      
      },
      {
        title: 'ISTQB Software Testing - Gomycode',
      
      },

      {
        title: ' Bases of ISTQB Software Testing - ISTQB',
       
      },

      {
        title: 'Introduction to AWS cloud - Udemy',
       
      },
      {
        title: 'Goolge Cloud Intro to Generative IA - Google',
        
      },
      {
        title: 'Node Js - Github',
        
      },
     
      {
        title: 'Gomycode Software development instructor - Gomycode',
       
      },

      {
        title: 'Conduisez un test d intrusion - OpenClassroom',
        
      },

      {
        title: 'Digital Marketing - Google',
        
      },
      {
        title: 'Php & MySql - OpenClassroom',
        
      },
      {
        title: 'Intro to React - OpenClassroom',
        
      },
      {
        title: 'Decouvrez le fonctionement des Algorithmes - OpenClassroom',
        
      },

     
      {
        title: 'MIAGE Licence- Universite Dakar Bourguiba',
        
      },

    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// Framer
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* Avatar
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div> */}

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>

        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 
           variants={fadeIn('right', 0.2)}
           initial='hidden'
           animate='show'
           exit='hidden'
          className='h2'> 
          From deep   <span className='text-accent'>passion and dedication, </span> the pursuit of excellence is born. 
          </motion.h2>
          <motion.p 
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:block m-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>With a degree in Computer Science and other certifications, 
          my journey  has been driven by passion and excellence.I have worked as an SI specialist, Digital Manager and software developer. 
          Currently, I am a freelance  and instructor at Gomycode, and I engage in many projects and consultancy with Clic&apos;s Senegal.
          </motion.p>

        {/* counters */}
          <motion.div 
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 '> 
          <div className='flex flex-1 xl:gap-6'>
            {/* experiences */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                <CountUp start={0} end={6} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                years of experience
              </div>
            </div>

            {/* Clients */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                <CountUp start={0} end={28} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Satisfied Clients
              </div>
            </div>

            {/* Projects */}
            <div className='relative flex-1'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                <CountUp start={0} end={30} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Finished Projects
              </div>
            </div>
          </div>

            
          </motion.div>


        </div>



        <motion.div 
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='flex flex-col w-full xl:max-w-[48%] h-auto md:min-h-[480px] px-4 sm:px-6 md:px-0'>
          <div className='flex flex-wrap justify-center gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 mx-auto xl:mx-0 mb-4 md:mb-6'>
            {aboutData.map((item, itemIndex) => (
              <div 
                key={itemIndex}
                className={`${
                  index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg relative after:w-4 sm:after:w-6 md:after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 transition-all duration-300`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          {aboutData[index] && aboutData[index].info && aboutData[index].info.length > 0 && (
            <div className='mt-4 md:mt-2 overflow-y-auto max-h-[300px] sm:max-h-[350px] md:max-h-none scrollbar-hide'>
              {aboutData[index].info.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-3 md:mb-2 text-center px-2 sm:px-0"> {/* Center align content */}
                  {/* title */}
                  <div className='text-sm sm:text-base break-words'>{item.title}</div>
                  {/* icons or other info */}
                  {item.icons && (
                    <div className='flex flex-wrap justify-center gap-2 sm:gap-3 mt-2'> {/* Center align icons */}
                      {item.icons.map((icon, iconIndex) => (
                        <span key={iconIndex} className='text-lg sm:text-xl md:text-2xl'>{icon}</span>
                      ))}
                    </div>
                  )}
                  {item.stage && (
                    <p className="mt-1 sm:mt-2 text-center text-xs sm:text-sm">{item.stage}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default About;
