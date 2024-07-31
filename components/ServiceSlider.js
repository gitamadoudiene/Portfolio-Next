// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

// Import icons
import {
  RxDashboard,
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
  RxMobile,
} from 'react-icons/rx';

// Data
const serviceData = [
  {
    icon: <RxDashboard />,
    title: 'Training',
    description: 'Empowering individuals and teams with essential tech skills.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Testing',
    description: 'Ensuring the reliability and performance of your software solutions.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Transforming ideas into robust and scalable software solutions.',
  },
  {
    icon: <RxMobile />,
    title: 'Mobile Dev',
    description: 'Bringing your vision to life with cutting-edge mobile applications.',
  },
  {
    icon: <RxRocket />,
    title: 'Consulting',
    description: 'Providing expert guidance and strategic insights to help your business.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 
          flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer  hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/* icons */}
            <div className='text-4xl text-accent mb-4 '>{item.icon}</div>
            {/* title and description */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal '>{item.description}</p>
            </div>   
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
