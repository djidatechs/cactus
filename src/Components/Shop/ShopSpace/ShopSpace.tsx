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
    gridType: number ,

  }

const ShopSpace: NextPage<Props> = ({fetcher,title,footer,titleStyle,gridType}:Props) => {
  const [store , setStore] = useState<any[]>([]);
  const [loading , setLoading] = useState(true);
  const styler = (gridType == 4 ) 
                  ? "grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 bg-black p-4   mb-[6px] gap-6"
                  : "grid grid-cols-2  lg:grid-cols-3 bg-black p-6   mb-[6px] gap-6"
  useEffect(()=>{
    fetch(fetcher)
            .then(res=>res.json())
            .then(json=>{
              setStore(json)
              setLoading(false)
            })
            .catch(e=>{})
  },[])

  if (loading) return (<div className="h-[50vh] w-full rounded-none bg-black my-3 btn btn-square loading"></div> )
  return (
    <>
      <ShopHeader text={title} titleStyle={titleStyle} />
      <div className={styler}>
      
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
