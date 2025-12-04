import Image from "next/image";
export default function Background() {
  return (
    <>
      <Image  className='z-0 absolute w-full h-full' 
        src="/back.png" 
      width={1280}
      height={720}
      quality={100}
      alt='background'
      />
    </>
  );
}
