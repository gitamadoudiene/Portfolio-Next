//import components
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

//Framer-motion
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'

const Services = () => {
  return <div className="h-full bg-primary/30 py-36 flex items-center">
    
      
      
      <Circles />
      <div className="container mx-auto">
  <div className='flex flex-col xl:flex-row gap-x-8'>
    {/* text  */}
    <div className='text-center flex xl:w-[300px] flex-col lg:text-left mb-4 xl:mb-8'>
      <h2 className='h2 xl:mt-8 flex items-center justify-center lg:justify-start whitespace-nowrap'>
        My Services<span className='text-accent'>.</span>
      </h2>
      <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
        I am a full-stack developer
      </p>
    </div>
  </div>
  {/* Services */}
  <ServiceSlider />
</div>

      <Bulb />
     
  </div>;
};

export default Services;
