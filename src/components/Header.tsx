import Image from 'next/image';

import { mitrFont} from '../app/fonts';
export default function Header(){
    return(
    <>
    <section className='w-full h-[90vh] flex justify-center items-center  text-(--foreground)'>
    
    <div className={`absolute z-[1] justify-items-center `}><h1 className={`${mitrFont.className}`}>Set Up Your dev envirenment In Seconds</h1>
</div>
    </section>
    </>
    );
}
