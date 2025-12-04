import Image from "next/image";
import Header from '../components/Header.tsx';
import Background from '../components/Background.tsx';
import Home from '../components/Home.tsx';
export default function page() {
  return (
    <> 
    <div className="w-full h-[100vh] bg-[url('/back.png')] relative flex justify-center items-center flex-col">
      <Home />
    </div>

  </>
  );
}
