import { type NextPage } from "next";
import discount from "./../../../Assets/discount.jpeg"
import CYBERMONDAY from "./../../../Assets/CYBERMONDAY.png"
import Image from "next/image";
const Annonce : NextPage = () => {
   
   
  return (
    <div className="space-y-2">
      <img src={discount.src}   className="rounded-xl cursor-pointer hover:scale-[1.02] transition duration-300 ease-out" alt=""/>
      <img src={CYBERMONDAY.src}  className="rounded-xl cursor-pointer hover:scale-[1.02] transition duration-300 ease-out " alt=""/>
    </div>
    
  );
};

export default Annonce ;

