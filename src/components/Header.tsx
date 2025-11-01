import Image from 'next/image';
import Blob from './public/blob.svg';
export default function Header(){
    return(
    <>
    <section className='w-full h-[90vh] flex justify-center items-center'>
       <Image 
        src="/blob.svg" 
        alt="Blob" 
        width={500} // adjust as needed
        height={400} // adjust as needed
      className='absolute z-[0]'
                />
    <div className='absolute z-[1]'><h1>Set Up Your dev envirenment In Seconds</h1>
        <p>No Hustle, Just Code</p>
                </div>
    </section>
    </>
    );
}
