// testimonial data
const testimonialSlider = [
  {
    image: "/pp-rm.png",
    name: "Kany Fall",
    position: "CEO -KangePrestation",
    message:
      "He is not just a talented developer; he is a great team player who brings positive energy and clear communication to every project.",
  },
  {
    image: "/pp-rm.png",
    name: "Youssoufa",
    position: "CEO -AgenceNova",
    message:
      "Working with him was a pleasure! He not only built fantastic software but also made sure I felt supported and included.",
  },
  {
    image: "/pp-rm.png",
    name: "Moustapha Barry",
    position: "CEO -BMG",
    message:
      "His consulting services were invaluable! He provided strategic insights that helped my business grow, and his approachable nature made the entire process enjoyable",
  },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";

// icons
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialSlider.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, nom, position  */}
            <div
              className="w-full max-w-[300px] flex flex-col xl:justify-center
            items-center relative mx-auto xl:mx-0"
            >
              <div className="flex flex-col justify-center text-center">
                {/* avatar  */}
                <div className="mb-2 mx-auto">
                  <Image src={person.image} width={100} height={100} alt="" />
                </div>
                {/* nom  */}
                <div className="text-lg"> {person.name}</div>
                {/* position  */}
                <div
                  className="text-[12px] uppercase font-extralight
                tracking-widest"
                >
                  {" "}
                  {person.position}
                </div>
              </div>
            </div>
            {/* cote et message  */}
            <div
              className=" flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20
            xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20"
            >
              {/* quotes icons */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto 
                       md:mx-0"
                />
              </div>
              {/* message  */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
