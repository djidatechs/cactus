import Image from 'next/image';
import * as React from 'react';
import { MdDelete } from 'react-icons/md';
import { RiDeleteBackFill } from 'react-icons/ri';

export interface ICartProps {
    category? : string , 
    name : string , 
    price : number , 
    discount : number , 
    image? : string , 
    key? : any,
    Quantity? : number,
}

export default function Cart (props: ICartProps) {
  return (
    <>
    <div className='group col-span-auto w-full grid grid-cols-12 bg-base-100 hover:bg-base-300 transition duration-200 ease-out text-xs sm:text-sm'>

      <figure className="w-full h-full  bg-white col-span-2  md:col-span-2 "><img className="mx-auto h-full max-h-24" src={props.image || ''}  alt="Shoes" /></figure>

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

      <div className='group w-full h-full bg-primary  text-center   group-hover:bg-green-800 cursor-pointer transition duration-200 ease-out'><MdDelete className='w-8 h-8 m-auto mt-7 group-hover:text-red-800'/></div>

    </div>
    <div className="divider md:hidden"></div> 
    </>
  );
}
