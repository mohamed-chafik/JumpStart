
import {Rubik_Dirt} from "next/font/google";
import Paragraph from './paragraph.tsx';
const rubik = Rubik_Dirt({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Quote(){
  return (
  <>
   <div className={rubik.className} className={`${rubik.className} text-6xl text-white w-fit h-fit`}>
    JUMPSTART YOUR NEXT PROJECT
    </div>   
    <Paragraph />
    </>
  );
}
