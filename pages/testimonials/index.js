import TestimonialSlider from "../../components/TestimonialSlider";

import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

import { useLanguage } from '../../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
        variants={fadeIn('up',0.2)}
        initial='initial'
        animate='show'
        exit='hidden'
         className="h2 mb-8 xl:mb-0">
          {t.testimonials.headingPre}<span className="text-accent">{t.testimonials.headingAccent}</span>
        </motion.h2>
        <motion.div
         variants={fadeIn('up',0.4)}
         initial='initial'
         animate='show'
         exit='hidden'
         >

          <TestimonialSlider items={t.testimonials.items} />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
