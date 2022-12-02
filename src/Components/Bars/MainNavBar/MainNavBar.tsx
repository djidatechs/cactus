import { type NextPage } from "next";
import Head from "next/head";
import {BiCart} from "react-icons/bi"
import {BiUser} from "react-icons/bi"
import ButtomNavBar from "./ButtomNavBar";
import TopNavBar from "./TopNavBar";

const Home: NextPage = () => {

  return (
    <>
      <div className="sticky top-0 p-0 mt-4 bg-base-100 border-b-[4px] border-t-[16px] border-base-100   z-40 ">
        <TopNavBar/>
      </div>
      <div className="sticky top-0 p-0  bg-base-100  sm:border-t-0 border-base-100 sm:border-base-100   z-50 sm:z-30   ">
        <ButtomNavBar/>
      </div>
    </>
    
  );
};

export default Home;
