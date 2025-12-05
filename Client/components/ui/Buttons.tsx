import Getstartedbtn from "./getstartedbtn";
import TryAIbtn from "./TryAIbtn";
export default function Buttons() {
  return (
    <>
      <div className="w-[30%] h-fit mt-[33px] flex justify-around">
        <Getstartedbtn />
        <TryAIbtn />
      </div>
    </>
  );
}
