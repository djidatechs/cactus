import { type NextPage } from "next";
import { useEffect, useState } from "react";
import {IoIosArrowForward} from 'react-icons/io'
import Range from "./Range";


const Sidebar: NextPage = () => {
    const [categories,setCategories] = useState<any[]> ([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
            .catch(e=>{})
    },[])

  return (
    <>
      <div className="w-full  text-white roundex-xl mt-8  ">
      
        <div className="input-group rounded-none ml-2 mb-8 onlymobile:hidden">
        <div className="hidden"></div>
            <input type="text" placeholder="Search…" className="input " />
            <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </div>
      
      <ul className="menu bg-black border-r-base-100 border-r-4 p-2 font-semibold ">
        <li className="group mb-6 text-primary hover:text-white bg-base-100 hover:bg-black transition duration-300 ease-out font-bold">
            <span>
                Categories
                <IoIosArrowForward className="w-6 h-6 text-primary transition duration-300 ease-out group-hover:text-white ml-auto " />
            </span>
            
        </li>
        <li className="text-primary border-primary border-l-2"><a>All</a></li>
        {
            !categories.length
            ? <div className="h-[2vh] w-full rounded-none bg-black my-3 btn btn-square loading"></div>
            : categories.map((cat,i)=><li key={i} className="border-white border-l-2"><a>{cat}</a></li>)
        }
        
       
    </ul>
    <ul className="menu bg-black border-r-base-100 border-r-4 p-2 font-semibold ">
        <li className="group mb-6 text-primary hover:text-white bg-base-100 hover:bg-black transition duration-300 ease-out font-bold">
            <span>
                Price range
                <IoIosArrowForward className="w-6 h-6 text-primary transition duration-300 ease-out group-hover:text-white ml-auto " />
            </span>
        </li>
            <Range/>
            
        
    </ul>
    
      </div>
    </>
  );
};

export default Sidebar;
