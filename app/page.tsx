import Image from 'next/image';
import homeImage from '../resources/imgs/HomeImg.webp';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
      <Image
        className='object-cover w-full h-full'
        alt='home image'
        src={homeImage}
      />
      <Footer />
    </div>
  );
}
