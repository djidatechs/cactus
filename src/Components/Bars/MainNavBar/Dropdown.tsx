import { type NextPage } from "next";
import {BiCart , BiUser} from "react-icons/bi"
import {RiContactsBook2Line} from "react-icons/ri"
import {MdOutlineArticle} from "react-icons/md"
import {AiOutlineShop , AiOutlineTeam} from "react-icons/ai"
import Linker from "../../RoutingElements/Linker";
interface Type {
    children: React.ReactNode;
    index: number;
    sm? : boolean ; 
  }

const Dropdown:  NextPage<Type> = ({children,index,sm}: Type) => {

  return (
    <div className="dropdown">
        <label tabIndex={index} className={`btn btn-ghost ${sm ? 'sm:hidden':undefined}`}>
            <>{children}</>
        </label>
        <ul tabIndex={index} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Linker href="/"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>Home</Linker></li>
            <li><Linker href="/carts"><BiCart  className="h-5 w-5" /> Carts</Linker></li>
            <li><Linker href="/profile"><BiUser  className="h-5 w-5" />Profile</Linker></li>
            <li tabIndex={index}>
              <Linker href="/catalog" nohref >
                <AiOutlineShop className="h-5 w-5"/>
                Shop
                <svg className="fill-current ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </Linker>
              <ul className="p-2 bg-base-100 rounded-none">
                  <li><Linker href="/catalog">All</Linker></li>
                  <li><Linker href="/catalog"> Promotions</Linker></li>
              </ul>
            </li>
            <li><Linker href="/blogandnews"> <MdOutlineArticle className="h-5 w-5"/>Blog</Linker></li>
            <li><Linker href="/team"> <AiOutlineTeam className="h-5 w-5" />Our team</Linker></li>
            <li><Linker href="/contact"> <RiContactsBook2Line  className="h-5 w-5"/>Contact</Linker></li>
        </ul>
    </div>
    
  );
};

export default Dropdown;
