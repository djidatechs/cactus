import { type NextPage } from "next";
import { useEffect, useState } from "react";
import Topwall from "../TopWall/Topwall";
import ShopElement from "./ShopElement";
import ShopFooter from "./ShopFooter";
import ShopHeader from "./ShopHeader";
import Paginator from "../../general/Pagination";

interface Props {
    fetcher : string , 
    title? : string,
    titleStyle? : string,
    footer?: string,
    gridType: number ,
    discount?: number,
    noheader?:boolean,

  }

const ShopSpace: NextPage<Props> = ({fetcher,title,footer,discount,titleStyle,gridType,noheader=false}:Props) => {
  const [store , setStore] = useState<any[]>([]);
  const [loading , setLoading] = useState(true);
  const styler = (gridType == 4 ) 
                  ? "grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 bg-black p-4   mb-[6px] gap-6"
                  : "grid grid-cols-2  lg:grid-cols-3 bg-black p-6    gap-6"
  useEffect(()=>{
    fetch(fetcher)
            .then(res=>res.json())
            .then(json=>{
              setStore(json)
              setLoading(false)
            })
            .catch(e=>{})
  },[])

  if (loading || !store.length) return (<div className="h-full w-full rounded-none bg-black btn btn-square loading"></div> )
  return (
    <>
      
      {noheader == true ? <></>:<Topwall title={title || ""} titleStyle={titleStyle} />}
      
      
      <div className={styler}>
      
      {
        store.map(product=>(
          <ShopElement
            key={product.id}
            category={product.category}
            name={product.title}
            discount={discount||1}
            price={product?.price}
            image={product?.image}
          />
        ))
        
      }
       
       
       
       
      </div>
      {/* <ShopFooter text={footer}/> */}
      <Paginator/>
    </>
  );
};

export default ShopSpace;
