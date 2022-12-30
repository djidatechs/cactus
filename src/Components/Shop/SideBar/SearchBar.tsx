import { type NextPage } from "next";

import { IoIosArrowForward } from "react-icons/io";
const SearchBar: NextPage= () => {
    

  return (
    
    <div className="input-group rounded-none ml-2 mb-8  w-11/12 onlymobile:hidden ">
    <div className="hidden"></div>
        <input type="text" placeholder="Search for products" className="input bg-base-100 " />
        <button className="btn btn-square bg-base-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
    </div>
    
    
  );
};

export default SearchBar;

