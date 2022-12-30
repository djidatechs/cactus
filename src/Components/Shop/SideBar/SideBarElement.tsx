import { type NextPage } from "next";
import {useState , useRef, Children} from "react"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

interface Props {
    children? : React.ReactNode,
    title : string,
}

const SideBarElement: NextPage<Props> = ({children , title} : Props) => {
    const toggle = useRef (true);
    const toggleRef = useRef<any>(0);
    const swapRef = useRef<any>(0);
    const toggler = ()=>{
        console.log(swapRef)
        toggle.current = ! toggle.current
        if (toggle.current) {
            toggleRef.current.className = ""
            swapRef.current.checked = false
        }
        else {
            toggleRef.current.className = "hidden"
            swapRef.current.checked = true
        }
    }
    

  return (
    <ul className="menu sm:bg-black border-r-base-100 border-r-4  p-2 font-semibold">
    <li onClick={toggler} className="group mb-6 text-primary hover:text-white bg-base-100 hover:sm:bg-black transition duration-300 ease-out font-bold">
        <span>
            {title}
            <label className="swap ml-auto ">
                <input ref={swapRef} type="checkbox" />
                <IoIosArrowForward className="swap-on w-6 h-6 text-primary transition duration-300 ease-out group-hover:text-white ml-auto " />
                <IoIosArrowDown className=" swap-off w-6 h-6 text-primary transition duration-300 ease-out group-hover:text-white ml-auto " />
            </label>
        </span>
    </li>
    <div className="" ref={toggleRef}>{children}</div>
</ul>
    
  );
};

export default SideBarElement;

