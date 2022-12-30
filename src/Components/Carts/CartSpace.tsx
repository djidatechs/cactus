import * as React from 'react';
import Topwall from '../Shop/TopWall/Topwall';
import Cart from './Cart';

import {BsFillBagCheckFill} from "react-icons/bs"
import { BiArrowFromRight } from 'react-icons/bi';
import { TbDiscount2 } from 'react-icons/tb';
import { useRouter } from 'next/router';



export interface ICartSpaceProps {
    fetcher : string
}

export default function CartSpace (props: ICartSpaceProps) {
    const router = useRouter();
    const [loading , setLoading ] = React.useState<boolean>(true);
    const [carts , setCarts ] = React.useState<any[]>([]);

    React.useEffect(()=>{
        fetch ("https://fakestoreapi.com/products?limit=4")
        .then (res=> res.json())
        .then (json=>{
            setLoading(false);
            setCarts(json)
        })
        .catch(()=>{})
    },[])



    if (loading || !carts.length ) return <div className='bg-black   rounded-none w-full h-[20vh] btn btn-square loading'></div>
    
  return (
    <>
    <div className='bg-black rounded-none p-4 sm:grid grid-cols-12'>
        <div className=' sm:p-6 col-span-8 pr-3 max-h-[264px] sm:max-h-[495px] overflow-y-auto scrollbar scrollbar-thumb-green-900 scrollbar-track-gray-900  scrollbar-w-[8px] '>
        {
            carts.map(cart=>(
                <Cart
                key={cart.id}
                category={cart.category}
                name={cart.title}
                discount={1}
                price={cart.price}
                image={cart.image}
                />
            ))
        }
        </div>
        <div className='mt-6 p-2 sm:p-6 col-span-4 space-y-6 ' >
            <div className='w-full max-h-20 flex '>
                <p className=' text-left w-1/2 font-bold text-primary'>Subtotal</p>
                <p className=' text-right w-1/2'>500 dzd</p>
            </div>
            <div className='w-full max-h-20 flex'>
                <p className=' text-left w-1/2 font-bold text-primary'>Discount</p>
                <p className=' text-right w-1/2'>0%</p>
            </div>
            <div className='w-full max-h-20 flex'>
                <p className=' text-left w-1/2 font-bold text-primary'>Shipping</p>
                <p className=' text-right w-1/2'>0</p>
            </div>
            <div className='w-full max-h-20 flex'>
                <p className=' text-left w-1/2 font-bold text-primary'>Estimate Tax</p>
                <p className=' text-right w-1/2'>30 dzd</p>
            </div>
            <div className='w-full max-h-20 flex'>
                <p className=' text-left w-1/2 font-bold text-primary'>Total</p>
                <p className=' text-right w-1/2'>530 dzd</p>
            </div>
            <button onClick={()=>router.push("/order")} className='w-full max-h-20 bg-primary text-center text-white font-extrabold text-md p-4 space-x-3 cursor-pointer hover:bg-green-700 transition duration-300 ease-out'>
                
                <BsFillBagCheckFill className="w-5 h-5 inline" />
                <h5  className='inline'>Checkout</h5>
            </button>
        </div>
        
    </div>
    <div className= 'p-5 sm:grid grid-cols-2 gap-6  bg-black onlymobile:space-y-20' >
        
            <button className='btn btn-square btn-primary w-full space-x-2 '><BiArrowFromRight className='w-5 h-5'/><p>Continue shopping</p></button>
            <div className='text-center space-y-3 sm:max-w-sm sm:ml-auto sm:mr-5'>
                <h3 className=''>Apply Coupon</h3>
                <input type="text" placeholder="Enter coupon number" className="input w-full " />
                <button className='btn btn-square btn-primary  w-full space-x-2'><TbDiscount2 className='w-5 h-5'/><p>Apply</p></button>
            </div>
            <div></div>
        </div>
    </>
  );
}
