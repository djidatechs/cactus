import { type NextPage } from "next";
import { useEffect, useState } from "react";
import {IoIosArrowForward} from 'react-icons/io'
import Annonce from "./Annonce";
import Categories from "./Categories";
import Checker from "./Checker";
import Range from "./Range";
import SearchBar from "./SearchBar";
import SelectedProducts from "./SelectedProducts";
import SideBarElement from "./SideBarElement";


const Sidebar: NextPage = () => {
    // Every sidebar bar element has the same context
  return (
      <div className="w-full  text-white roundex-xl mt-8  ">
      
        <SearchBar/>
      
        <SideBarElement title="Categories">
        <Categories/>
        </SideBarElement>

        <SideBarElement title="Price range">
            <Range/>
        </SideBarElement>

        <SideBarElement title="Manifacturer">
            <Checker/>
        </SideBarElement>

        <SideBarElement title="Our best selling">
            <SelectedProducts/>
        </SideBarElement>

        <SideBarElement title="Annonces">
            <Annonce/>
        </SideBarElement>

    
      </div>
  );
};

export default Sidebar;
