import { type NextPage } from "next";
import { useEffect, useState } from "react";
import {BiCart} from "react-icons/bi"

interface Props {
    title : string , 
    desc : string , 
    id : number , 
    
}
const Article: NextPage<Props> = ({title,desc, id } : Props) => {
  const [image,setImage] = useState<string>('');
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/photos/${id.toString()}`)
      .then(response => response.json())
      .then(json =>{
        setImage(json.url)
      })
  },[])

  return (
  <>
  <div className="card w-96 min-w-[300px] min-h-full  bg-base-100 shadow-xl m-4">
  <figure className="max-h-[200px] bg-white"><img className="w-full h-[200px]" src={image} alt="Shoes" /></figure>
  <div className="card-body text-xs">
    <h2 className="card-title text-sm">{title}</h2>
    <p>{desc}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary btn-sm">Read more</button>
    </div>
  </div>
</div></>)
};

export default Article;
