import { type NextPage } from "next";
import {useState , useRef} from "react"



const Range: NextPage = () => {
    const max :string = "10000"
    const min :string = "10"
    const [range , setRange] = useState<string>(max)
    
    const rangeRef:any = useRef(null);
    const changerange = (e:any)=>{
        
        setRange(rangeRef.current.value)

    }

  return (
    <>
    <span className="mb-3 text-sm">maximum {parseInt(range)*10} dzd</span>
    <input ref={rangeRef} type="range" min={min} max={max} defaultValue={max} onChange={(e)=>changerange(e)} onMouseUp={()=>console.log("hi")} className="range range-primary range-sm w-10/12"/>
    </>
    
  );
};

export default Range;

