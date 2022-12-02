import { type NextPage } from "next";
import { useEffect, useState } from "react";
import ShopElement from "./ShopElement";
import ShopFooter from "./ShopFooter";
import ShopHeader from "./ShopHeader";

interface Props {
    fetcher : string , 
    title? : string,
    titleStyle? : string,
    footer?: string,

  }

const ShopSpace: NextPage<Props> = ({fetcher,title,footer,titleStyle}:Props) => {
  const [store , setStore] = useState<any[]>([]);
  const [loading , setLoading] = useState(true);
  useEffect(()=>{
    fetch(fetcher)
            .then(res=>res.json())
            .then(json=>{
              setStore(json)
              setLoading(false)
            })
  },[])

  if (loading) return (<><ShopHeader text={title} titleStyle={titleStyle} /><div className="h-[50vh] w-full rounded-none bg-black my-3 btn btn-square loading"></div></> )
  return (
    <>
      <ShopHeader text={title} titleStyle={titleStyle} />
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 bg-black p-4   mb-[6px] gap-6">
      
      {
        !store.length
        ? <div className="h-[50vh] w-full rounded-none bg-black my-3 btn btn-square loading"></div> 
        : store.map(product=>(
          <ShopElement
            key={product.id}
            category={product.category}
            name={product.title}
            discount={0.5}
            price={product?.price}
            image={product?.image}
          />
        ))
        
      }
       
       
       
       
      </div>
      {/* <ShopFooter text={footer}/> */}
    </>
  );
};

export default ShopSpace;
