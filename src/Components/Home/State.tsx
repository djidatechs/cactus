import { type NextPage } from "next";

import page2 from '../../Assets/page-2.png'

import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {TbShoppingCartDiscount} from "react-icons/tb"
import { BiCategory } from "react-icons/bi";

const State: NextPage = () => {
  
  

  return (
    <div className="stats stats-vertical bg-black md:stats-horizontal shadow w-full mt-4 mb-[6px] rounded-none">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Products</div>
    <div className="stat-value">1.2k</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <BiCategory className="w-8 h-8"/>
    </div>
    <div className="stat-title">Categories</div>
    <div className="stat-value">10</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <TbShoppingCartDiscount className="w-8 h-8"/>
    </div>
    <div className="stat-title">Discounts</div>
    <div className="stat-value">300</div>
    
  </div>
  
</div>

  );
};

export default State;



