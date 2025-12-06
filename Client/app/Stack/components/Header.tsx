import { Kanit } from "next/font/google";

const kanit = Kanit({
  subset: ["latin"],
  weight: ["400"],
});

export default function Header() {
  return (
    <>
      <div className=' h-fit'>
        <h1 className={`${kanit.className} text-white text-5xl`}>
          Create Your Project Setup
        </h1>
      </div>
    </>
  );
}
