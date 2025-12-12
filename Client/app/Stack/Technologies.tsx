import { Kanit } from "next/font/google";
import Image from "next/image";
import { Path } from "@/data/Paths.ts";
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Technologies({ path }: { path: Path }) {
  return (
    <>
      <div className="bg-white w-[300px] ${kanit.className} rounded-[30px] flex flex-col justify-center hover:shadow-lg min-h-[170px] dark:bg-gray-800 dark:text-white items-start relative group">
        <div className="m-5">
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center absolute inset-x-0 top-0 justify-self-center m-[33px]">
            <Image src={path.icon} width={100} height={100} alt="image" />
          </div>

          {/* Text */}
          <div className="mt-20 text-left w-full mb-3">
            <h2 className="text-2xl roboto-mono-500 text-gray-800 dark:text-white">
              {path.name}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
