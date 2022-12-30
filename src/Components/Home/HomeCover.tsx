import { type NextPage } from "next";
import page2 from '../../Assets/page-2.png'
import Image from "next/image";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { useRouter } from 'next/router'

const HomeCover: NextPage = () => {
  const router = useRouter();
  
  

  return (

        
        <div className="w-full min-h-[200px]  bg-black  bg-gradient-to-r from-green-500 to-green-700
         sm:grid grid-cols-6 ">
            <div className="col-span-3  p-4 py-10 text-center sm:text-left sm:pl-20 md:pl-50">
              <h1 className="text-white  text-xl mb-4" >Your online shop place</h1>
              <h1 className="text-white font-bold text-6xl" >CACTUS</h1>
              <h1 className="text-white font-bold text-6xl" >SHOP</h1>
              <button className="btn btn-md bg-white mt-4 text-primary
               border-none hover:bg-success hover:text-white " 
               onClick={(e)=>{
                e.preventDefault()
                router.push("/catalog")
               }}
               >Go to shop
              <BsFillArrowRightCircleFill className=" ml-2 w-5 sm:w-8 h-5 sm:h-8"></BsFillArrowRightCircleFill>
              </button>
            </div>
            <div className="col-span-3  hero container max-w-screen-lg m-auto pb-10">
              <img src={page2.src}  className="m-auto max-h-60" alt="" />
            </div>
        </div>

  );
};

export default HomeCover;



