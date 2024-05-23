//import Links

import Link from "next/link";

//import icons

import {RiYoutubeLine,RiInstagramLine,RiFacebookFill, RiLinkedinFill,RiMailLine} from 'react-icons/ri'



const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
     <Link href={'mailto:amadoudiene20@gmail.com?subject=Bonjour&body=Ceci%20est%20un%20message%20pré-rempli.'} className='hover:text-accent transition-all duration-300'>
      <RiMailLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/amadou-diene-419a49207/'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinFill/>
    </Link>
   
    <Link href={'https://www.instagram.com/_twinstons_/'} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiFacebookFill/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine/>
    </Link>
    
  </div>
);
};

export default Socials;
