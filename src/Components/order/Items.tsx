import Image from 'next/image';
import * as React from 'react';
import { MdDelete } from 'react-icons/md';
import { RiDeleteBackFill } from 'react-icons/ri';


export interface IItemsProps {
    category? : string , 
    name : string , 
    price : number , 
    discount : number , 
    image? : string , 
    key? : any,
    Quantity? : number,
}

export default function Items (props: IItemsProps) {
  return (
    <>
    <div className='group my-2 col-span-auto w-full grid grid-cols-12 bg-base-100 hover:bg-base-300 transition duration-200 ease-out text-xs sm:text-sm'>

      <figure className="w-full h-full  bg-white col-span-3  md:col-span-3 "><img className="mx-auto h-full max-h-24" src={props.image || ''}  alt="Shoes" /></figure>

      <div className='p-4 col-span-3 py-4 md:col-span-5 font-light'>
        <h2 >{props.category}</h2>
        <h1 className="font-semibold">Title</h1>
        <p className='text-primary'>{props.price*130} dzd</p>
      </div>

      <div className='w-full h-full col-span-3 py-4 md:col-span-2 mt-2'>
        <p className='text-center text-primary '>Quanitity</p>
        <p className='text-center mt-2'>{props.Quantity || 1}</p>
      </div>

      <div className='w-full h-full col-span-3  py-4 md:col-span-2 mt-2'>
        <p className='text-center text-primary '>Total</p>
        <p className='text-center  mt-2'>{props.price*props.discount*(props.Quantity||1)*130} <p className='text-xs font-thin'>dzd</p></p>
      </div>

      

    </div>
    <div className="divider md:hidden"></div> 
    
    </>
  );
}
