import { type NextPage } from "next";

import {BiPhoneCall} from "react-icons/bi"
import Linker from "../../RoutingElements/Linker";
import Dropdown from "./Dropdown";

const ButtomNavBar: NextPage = () => {

  return (
    <div className="navbar bg-black rounded-t-none pt-3  ">
        <div className=" sm:navbar-start">
            <Dropdown index={0} sm>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </Dropdown>
            
        </div>
        <div className="navbar-center hidden sm:flex">
            <ul className="menu menu-horizontal p-0">
            <li><Linker href="/">Home</Linker></li>
            <li tabIndex={0} className="rounded-xl">
                <Linker href="/catalog" nohref >
                    Shop
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </Linker>
                <ul className="p-2 bg-black rounded-xl">
                <li><Linker href="/catalog">All</Linker></li>
                <li><Linker href="/catalog">Promotions</Linker></li>
                </ul>
            </li>
            <li><Linker href="/blogandnews">Blog</Linker></li>
            <li><Linker href="/team">Our Team</Linker></li>
            <li><Linker href="/contact">Contact</Linker></li>
            </ul>
        </div>
        <div className="mx-4 mb-2  sm:mx-0 w-full sm:w-1/2 navbar-end ">
            <div 
            className="group cursor-pointer text-primary bg-base-100 
            hidden lg:flex
            hover:bg-primary
            hover:text-white
            transition duration-300 ease-in-out
            text-sm rounded-xl p-3 mr-3">
                <BiPhoneCall className="w-5 h-5 fill-current inline mr-2"/>
                <a className="label-text text-white ">(213) 558 71 31 53</a>
            </div>
            <div className="w-full sm:hidden">
            <input type="text" placeholder="Search product" className="input input-base-200 rounded-sm w-full mx-2 rounded-br-xl" />
            </div>
        </div>
    </div>
  );
};

export default ButtomNavBar;
