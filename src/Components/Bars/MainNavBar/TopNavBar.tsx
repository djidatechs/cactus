import { type NextPage } from "next";
import { useRouter } from "next/router";

import {BiCart} from "react-icons/bi"
import {BiUser} from "react-icons/bi" 

import SwitchTheme from "../../SwitchTheme";
import AuthShowcase from "./Auther";
import Dropdown from "./Dropdown";

const TopNavBar: NextPage = () => {
  const router = useRouter();
  const home = ()=>router.push("/");
 

  return (
    <div className="navbar bg-black   rounded-t-xl">
  <div className="w-1/2 hidden sm:flex justify-start">
    <Dropdown index={1}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </Dropdown>
     <SwitchTheme />
     
  </div>
  <div className="flex-shrink-0 ">
    <a
    onClick={home}
    className="btn btn-ghost text-primary normal-case text-xl">Cactus</a>
  </div>
  <div className="w-full sm:w-1/2 justify-end">
    
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
   
    <AuthShowcase/>
  </div>
</div>
  );
};

export default TopNavBar;
