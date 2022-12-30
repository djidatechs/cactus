import { type NextPage } from "next";
import { useEffect, useState } from "react";




const Categories: NextPage = () => {
    const [categories,setCategories] = useState<any[]> ([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
            .catch(e=>{})
    },[])
   
  return (
   <>
   <li className="text-primary border-primary border-l-2"><a>All</a></li>
        {
            !categories.length
            ? <div className="h-[2vh] w-full rounded-none sm:bg-black my-3 btn btn-square loading"></div>
            : categories.map((cat,i)=><li key={i} className="border-white border-l-2"><a>{cat}</a></li>)
        }
    </>
    
  );
};

export default Categories;

