import React, { useState, useEffect } from 'react';
import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Full-Stack Developer', 'Software Tester', 'Passionate Instructor'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 '>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto '>
          <div className='h1'>
            <h1> Hi, I&apos;m Amadou DIENE <br />
              <span className='text-accent'>
                <motion.span variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden">
                  {texts[textIndex]}
                </motion.span>
              </span>
            </h1>
          </div>
          <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            Hey there, I&apos;m your go-to guy for all things tech. I love building websites and apps using cool tools like React, Next, Angular & Node Js. I&apos;m all about making sure everything works like a charm and teaching others the ropes of coding and testing. Let&apos;s dive into the exciting world of tech and build something awesome together!
          </p>
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div>
        <Image src="/your-image-path.jpg" alt="Your Image" width={500} height={500} />
      </div>
    </div>
  );
};

export default Home;
