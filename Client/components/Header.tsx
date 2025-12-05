import Logo from "./logo.tsx";
import Menu from "./Menubar.tsx";
export default function Header() {
  return (
    <>
      <div className="w-full h-[12%] z-1 absolute p-[20px] flex pl-[77px] items-center">
        <Logo />
        <Menu />
      </div>
    </>
  );
}
