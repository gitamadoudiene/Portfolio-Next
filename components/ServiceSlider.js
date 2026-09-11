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

// icons, in the same order as the translated services list
const serviceIcons = [
  <RxDashboard key="training" />,
  <RxPencil2 key="testing" />,
  <RxDesktop key="development" />,
  <RxMobile key="mobile-dev" />,
  <RxRocket key="consulting" />,
];

const ServiceSlider = ({ items }) => {
  const serviceData = items.map((item, index) => ({ ...item, icon: serviceIcons[index] }));
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
