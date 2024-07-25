//import components
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

//Framer-motion
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'

const Services = () => {
  return <div className="h-full bg-primary/30 py-36 flex items-center">
    
      {/* <ServiceSlider /> */}
      
      <Circles />
      <div className="container mx-auto ">
      </div>
      <Bulb />
     
  </div>;
};

export default Services;
