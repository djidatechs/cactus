import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Articles from "../../Components/Blog/Articles/Articles";
import Topwall from "../../Components/Shop/TopWall/Topwall";


const Home: NextPage = () => {
  const [categories,setCategories] = useState<any[]> ([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
            .catch(e=>{})
    },[])

  return (
    <>
      <Head>
        <title>Cactus | Blog</title>
        <meta name="Cactus Blog Find The Best Shopping Articles In The Web" content="Generated by create-t3-app" />
      </Head>
      <Topwall title="Blog and news" />
      <div className="w-full text-center sm:text-right bg-black onlymobile:space-y-3 sm:space-x-5 py-4  onlymobile:">
        <div className="sm:inline ">
            <select className="select select-primary  w-48  sm:mr-6 focus:outline-base-100">
              <option disabled selected>Sort by</option>
              <option>Price (asc)</option>
              <option>Price (dsc)</option>
              <option>Oldest</option>
              <option >Newest</option>
              <option>Ranomize</option>
            </select>
        </div>
        <div className="sm:inline">
            <select className="select select-primary  w-48  sm:mr-6 focus:outline-base-100">
              <option disabled selected>Categories</option>
              <option >All</option>
              {
                categories.length
                ?  categories.map((cat,i)=><option>{cat}</option>)
                :undefined
              }
              
            </select>
        </div>
      </div>
      <Articles fetcher="https://jsonplaceholder.typicode.com/posts?limit=6"  />
      
    </>
  );
};

export default Home;
