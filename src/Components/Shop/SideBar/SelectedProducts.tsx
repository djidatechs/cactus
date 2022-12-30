import { type NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import {BiCart} from "react-icons/bi"

const SelectedProducts : NextPage = () => {
    const [loading , setLoading ] =  useState(true);
    const [products , setProducts] = useState<any[]>([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products?limit=3")
        .then(data=>data.json())
        .then(json=>{
            setLoading(false)
            setProducts(json)
        })
        .catch(err=>{})
    },[])
   
    if (loading) return <></> 
   
  return (
    <div>
        {
            !products.length 
            ? <></>
            : products.map(product=>(
                <div className="group card card-side w-full p-0 rounded-none h-[100px] my-4 bg-base-100 shadow-xl cursor-pointer ">
                    <figure><img src={product.image}  className="h-[100px] min-w-[100px]" alt="Movie"/></figure>
                    <div className="grid grid-cols-6 h-full w-full p-0">
                        <div className="card-body p-2 pt-1 col-span-5  h-full w-full">
                            <h2 className="card-title text-xs font-thin col-span-5">{product.title}</h2>
                            <h2 className="card-title text-xs font-thin col-span-5 text-primary">{product.price} dzd</h2>
                        </div>
                        <div className="card-title text-xs font-thin bg-primary group-hover:bg-green-700 transition duration-300 ease-out w-full h-full">
                            <BiCart className="w-5 h-5 ml-1"/>
                        </div>
                    </div>
                </div>

            ))
        }

    </div>
    
  );
};

export default SelectedProducts ;

