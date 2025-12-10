import { Kanit } from "next/font/google";
import Image from "next/image";
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Technologies() {
  return (
    <>
      <div className="w-full h-fit p-[90px]">
        <div
          className={`${kanit.className} w-full h-fit p-[25px] flex gap-[30px]`}
        >
          <div className="bg-white w-[300px] rounded-[30px] flex flex-col justify-center hover:shadow-lg min-h-[170px] dark:bg-gray-800 dark:text-white items-start relative group">
            <div className="m-5">
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center absolute inset-x-0 top-0 justify-self-center m-[33px]">
                <Image src="/frontend.png" width={100} height={100} alt='image'/>
              </div>

              {/* Text */}
              <div className="mt-20 text-left w-full mb-3">
                <h2 className="text-2xl roboto-mono-500 text-gray-800 dark:text-white">
                 Front End development 
                </h2>
                
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
