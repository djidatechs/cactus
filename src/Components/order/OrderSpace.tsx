import * as React from 'react';
import Topwall from '../Shop/TopWall/Topwall';


import {BsFillBagCheckFill} from "react-icons/bs"
import { BiArrowFromRight } from 'react-icons/bi';
import { TbDiscount2 } from 'react-icons/tb';
import Cart from '../Carts/Cart';
import Items from './Items';



export interface IOrderSpaceProps {
    fetcher : string
}

export default function OrderSpace (props: IOrderSpaceProps) {
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
    <div className='bg-black rounded-none p-4 lg:grid grid-cols-12'>
        <div className='sm:p-6 col-span-6 grid grid-cols-2 grid-rows-6   gap-3 '>
            <label className='col-span-2'>Enter your billing details</label>
            <input  value={"Daniel_z"} className="input input-ghost  w-full rounded-none bg-base-100 " disabled/>
            <input  value={"ji_djida@esi.dz"} className="input input-ghost  w-full rounded-none bg-base-100 " disabled/>
            <input  placeholder={"Full name"} className="input input-ghost  w-full rounded-none bg-base-100 " />
            <input  placeholder={"Last name"} className="input input-ghost  w-full rounded-none bg-base-100 " />
            <input  placeholder={"Full adress"} className="input input-ghost  w-full rounded-none bg-base-100 col-span-2 " />
            <input  placeholder={"Phone number"} className="input input-ghost  w-full rounded-none bg-base-100 " />
            <select className="select select-ghost w-full rounded-none bg-base-100 text-gray-500">
                <option disabled selected>Method of payement</option>
                <option>CIB dahabia</option>
                <option>Hand to hand</option>
            </select>
            <div className= 'col-span-2   bg-black text-center' >
            <button className='btn btn-square btn-primary w-full md:w-1/2 space-x-2 '><BiArrowFromRight className='w-5 h-5'/><p>Apply</p></button>
        </div>
        </div>
        <div className='mt-6 p-2 sm:p-6 col-span-6 space-y-6 ' >
        <div className='space-y-5 sm:p-6 col-span-8 max-h-[235px] sm:max-h-[495px] overflow-y-auto scrollbar scrollbar-thumb-green-900 scrollbar-track-gray-900  scrollbar-w-[8px] '>
                {
                    carts.map(cart=>(
                        <Items
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
           
        </div>
        
    </div>
    </>
  );
}
