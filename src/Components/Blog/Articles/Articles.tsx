import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Article from "./Article";
import Paginator from "../../general/Pagination";


interface Props {
    fetcher : string , 
    
}


const Articles: NextPage<Props> = ({fetcher} : Props ) => {
    const [loading , setLoading] = useState(true)
    const [articles , setArticles] = useState<any[]>([])
    useEffect(()=>{
        fetch(fetcher)
        .then(res=>res.json())
        .then(json=>{
            setLoading(false)
            setArticles(json)
        })
        .catch(e=>{console.log("FAULT")})
    }, [])

    if (loading || !articles.length) return <div className="h-[20vh] w-full rounded-none sm:bg-black my-3 btn btn-square loading"></div>
    return (
        <>
        <div className="min-h-16 bg-black  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  p-4  gap-6">
            {
                articles.splice(0,12).map(article => (
                    <Article
                    key={article.id}
                    title={article.title}
                    desc={article.body}
                    id={article.id}
                    image={`https://picsum.photos/id/${article.id}/400/225`}
                    />
                ))
            }
        </div>
        <Paginator/>
        </>
    );
};

export default Articles;
