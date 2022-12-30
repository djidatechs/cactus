import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";


interface Props {
    title : string , 
    desc : string , 
    id : number , 
    image : string
    
}


const Article: NextPage<Props> = ({title,desc,id , image} : Props ) => {
    const router = useRouter();
    const changePage = () => router.push("/blogandnews/"+id.toString()); 

  return (
    
        <div onClick={changePage} className="card w-full bg-base-100  shadow-xl rounded-none transition duration-300 ease-out cursor-pointer hover:scale-[1.02]">
            <figure className="w-full"><img className="w-full"  src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-sm">{title}</h2>
                <p className="text-sm">{desc.length <= 72 ? desc : desc.substring(0,69)+"..."}</p>
                
                <h2 className="card-title text-sm">
                    <div className="avatar inline">
                        <div className="w-8 rounded-full">
                            <img src="https://placeimg.com/192/192/people" className="w-5 h-5"  alt="" />
                        </div>
                    </div>
                    {"Djida Issam"}
                </h2>
                <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Read</button>
                </div>
            </div>
        </div>
    
  );
};

export default Article;
