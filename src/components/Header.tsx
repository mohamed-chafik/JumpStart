import Image from 'next/image';
import Blob from './public/blob.svg';
import { mitrFont} from '../app/fonts';
export default function Header(){
    return(
    <>
    <section className='w-full h-[90vh] flex justify-center items-center'>
       <Image 
        src="/back.jpg" 
        alt="Blob" 
        width={500} // adjust as needed
        height={400} // adjust as needed
      className='absolute z-[0]'
                />
    <div className={`absolute z-[1] justify-items-center `}><h1 className={`${mitrFont.className}`}>Set Up Your dev envirenment In Seconds</h1>
               </div>
    </section>
    </>
    );
}
