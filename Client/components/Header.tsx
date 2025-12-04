import Logo from './logo.tsx';
import Background from './Background.tsx';
import Menu from './Menubar.tsx';
export default function Header(){
  return(
    <>
      <div className='w-full h-[8%] z-1 absolute p-[20px]'>
      <Logo/>
      <Menu />
      </div>
    </>
  );
}
