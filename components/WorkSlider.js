// data
const workSlides = {
  slides: [
    {
      images: [
        { title: 'Field Finder', path: '/FieldFinder.png' },
        { title: 'BBS', path: '/BBS.png' },
        { title: 'Salihat', path: '/salihat.png' },
        { title: 'Trans', path: '/trans.png' },
      ],
    },
    {
      images: [
        { title: 'title', path: '/thumb4.jpg' },
        { title: 'title', path: '/thumb1.jpg' },
        { title: 'title', path: '/thumb2.jpg' },
        { title: 'title', path: '/thumb3.jpg' },
      ],
    },
  ],
};

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Image from 'next/image';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

import { BsArrowRight } from 'react-icons/bs';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, imageIndex) => (
              <div className='relative rounded-lg overflow-hidden flex items-center
              justify-center group ' key={imageIndex}>
              {/* Image */}
                <div className='flex items-center justify-center relative overflow-hidden' >
                   <Image
                  src={image.path}
                  width={500}
                  height={300}
                  alt={image.title}
                />
                </div>

                {/* overlay gradient  */}

                <div className='absolute inset-0 bg-gradient bg-gradient-to-t from-transparent via-[#e838cc] to-[#4e22bd] opacity-0
                group-hover:opacity-80 transition-all duration-700 flex items-center justify-center'>
                  {/* title  */}
                  <div className=' absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300  '>
                      <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                        {/* title part 1 */}
                         <div className=' delay-100'>LIVE </div>
                          {/* title part 2 */}
                          <div className=' translate-y-[500%] group-hover:translate-y-0
                           transition-all duration-300 delay-150'>PROJECT </div>
                           {/* icons */}
                         <div className='text-x translate-y-[500%]
                         group-hover:translate-y-0 transition-all duration-300
                         delay-200 '> <BsArrowRight/> </div>
                      
                      </div>

                  </div>
                </div>
              
      
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
