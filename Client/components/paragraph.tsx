import {Source_Code_Pro} from "next/font/google";

const source = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400'],
});


export default function Paragraph(){
  return (
  <>
    <p className={`${source.className} text-center w-[60%] text-[#D0D0D0]`}>Choose your stack, generate your setup, and start coding instantly — Jumpstart gives developers everything they need without the friction.
</p>
  </>
  );

}
