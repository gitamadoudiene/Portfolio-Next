// components
import { useRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import emailjs from 'emailjs-com';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ee7wpi', 'template_fri50sa', form.current, 'YpAhW0P9PD0rzxMr5')
      .then((result) => {
          console.log(result.text);
          alert(t.contact.successMsg);
      }, (error) => {
          console.log(error.text);
          alert(t.contact.failMsg);
      });
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'>
            {t.contact.headingPre} <span className='text-accent'>{t.contact.headingAccent}</span>
          </motion.h2>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full'>
              <input type='text' name='name' placeholder={t.contact.namePlaceholder} className='input' required />
              <input type='email' name='email' placeholder={t.contact.emailPlaceholder} className='input' required />
            </div>
            <input type='text' name='subject' placeholder={t.contact.subjectPlaceholder} className='input' />
            <textarea name='message' placeholder={t.contact.messagePlaceholder} className='textarea' required></textarea>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px]
             px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
             hover:border-accent group'>
              <span className='group-hover:-translate-y-[120px] group-hover:opacity-0 transition-all duration-500'> {t.contact.button}</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex
               group-hover:-translate-y-0 group-hover:opacity-100 transition-all *:duration-300 absolute
               text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
