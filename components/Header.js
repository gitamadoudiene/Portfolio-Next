import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row items-center justify-between py-8'>
          {/* Logo */}
          <Link href='/'>
            <Image src='/logo.png' width={220} height={48} alt='Logo' priority={true} />
          </Link>
          {/* Socials */}
          <div className='mt-4 xl:mt-0 xl:ml-4'>
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
