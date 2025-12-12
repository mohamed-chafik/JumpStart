import Header from "./components/Header";
import Technologies from "./Technologies.tsx";
import { Paths } from "@/data/Paths";

export default function page() {
  return (
    <>
      <div className="w-full h-[100vh] bg-[url('/back.png')] relative flex justify-center items-center flex-col">
        <Header />
        <div className="w-full h-fit p-[20px] flex gap-[20px] justify-around">
          {Paths.map((p) => (
            <Technologies key={p.id} path={p} /> // ✅ Correct
          ))}
        </div>
      </div>
    </>
  );
}
