import { type NextPage } from "next";

import {BiCart} from "react-icons/bi"
import {BiUser} from "react-icons/bi" 

import SwitchTheme from "../../SwitchTheme";
import Dropdown from "./Dropdown";

const TopNavBar: NextPage = () => {
 

  return (
    <div className="navbar bg-black   rounded-t-xl">
  <div className="w-1/2 hidden sm:flex justify-start">
    <Dropdown index={1}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </Dropdown>
     <SwitchTheme />
     
  </div>
  <div className="flex-shrink-0 ">
    <a className="btn btn-ghost text-primary normal-case text-xl">Cactus</a>
  </div>
  <div className="w-full sm:w-1/2 justify-end">
    
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <BiCart className="h-5 w-5"/>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <BiUser className="h-5 w-5"/>
        <span className="badge badge-xs badge-accent indicator-item"></span>
      </div>
    </button>
  </div>
</div>
  );
};

export default TopNavBar;
