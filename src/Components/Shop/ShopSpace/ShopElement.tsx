import { type NextPage } from "next";
import {BiCart} from "react-icons/bi"

interface Props {
    category? : string , 
    name : string , 
    price : number , 
    discount : number , 
    image? : string , 
    key? : any,
}
const ShopElement: NextPage<Props> = ({key,category,name,price,discount , image} : Props) => {

  return (
    <>
        <div key={key} className="card  rounded-none w-full h-full bg-base-100 shadow-xl cursor-pointer transition duration-300 ease-in-out hover:scale-90">
            <figure className="max-h-[200px] bg-white"><img className="h-[120px] sm:h-[200px]" src={image} alt="Shoes" /></figure>
            <div className="card-body p-0 pt-2  max-w-full  ">
                <h2 className="card-title px-4 text-xs lg:text-sm ">{category}</h2>
                <h2 className="card-title px-4 text-sm ">{name}</h2>
                <div className=" w-full mt-auto px-4 ">
                    <p className="text-xs lg:text-sm ">price per kg</p>
                    <p className="text-xs lg:text-sm sm:inline  mr-3 text-secondary font-semibold">{price*150*discount} dzd</p>
                    <p className="text-xs lg:text-sm sm:inline  text-gray-400 line-through">{price*150} dzd</p>
                </div>
                <div className="card-actions sm:justify-end">
                    <button className="btn btn-secondary  btn-sm rounded-none w-full mx-auto sm:mx-0 gap-2">
                        <BiCart className="h-5 w-5 "/>
                        <p>Add</p>
                    </button>
                </div>
            </div>
        </div>
    </>
  );
};

export default ShopElement;
