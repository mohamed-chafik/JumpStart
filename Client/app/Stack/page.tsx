import Header from "./components/Header";
import Technologies from './Technologies.tsx'
export default function page() {
  return (
    <>
      <div className="w-full h-[100vh] bg-[url('/back.png')] relative flex justify-center items-center flex-col">
        <Header />
        <Technologies/>
      </div>
    </>
  );
}
