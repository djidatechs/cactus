import { type NextPage } from "next";
import {IoIosArrowForward} from 'react-icons/io'


const Topwall: NextPage = () => {

  return (
    <>
    <div className="w-full px-2 sm:px-20 lg:px-36 py-6 sm:py-16  bg-black  bg-gradient-to-r from-green-500 to-green-900">
        <div className="text-lg sm:text-2xl lg:text-3xl ml-10 text-white font-bold ">
                <span><a>catalog</a></span> 
                <span><IoIosArrowForward className="w-8 h-8 inline font-bold"/></span> 
                <span className="text-base-100"><a>men&apos;s clothing</a></span>            
        </div>
    </div>
    </>
  );
};

export default Topwall;
