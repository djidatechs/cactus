import { type NextPage } from "next";
import { useEffect, useState } from "react";
import Article from "./Article";
import ShopElement from "./Article";
import ShopFooter from "./BlogFooter";
import BlogHeader from "./BlogHeader";

interface Props {
    fetcher : string , 
    title? : string,
    titleStyle? : string,
    footer?: string,

  }

const BlogSpace: NextPage<Props> = ({fetcher,title,footer,titleStyle}:Props) => {
  const [loading , setLoading] = useState<boolean>(true);
  const [articles , setArticles] = useState<any[]>([]);
    
  useEffect(()=>{
    fetch(fetcher)
      .then(response => response.json())
      .then(json =>{
        setLoading(false)
        setArticles(json)
      })
      .catch(e=>{})
  },[])
  if (loading) return (<><BlogHeader text={title} titleStyle={titleStyle} /><div className="h-[50vh] w-full rounded-none bg-black my-3 btn btn-square loading"></div></> )
  return (
    <>
      <BlogHeader text={title} titleStyle={titleStyle} />
      <div className="bg-black  p-4 py-5 w-full">
        <div className="overflow-x-scroll flex w-full">
          {
            !articles.length
            ?<div className="h-[50vh] w-full rounded-none bg-black my-3 btn btn-square loading"></div>
            : articles.slice(0, 6).map(article=>(
              <Article
              key={article.id}
              title={article.title}
              desc={article.body}
              id={article.id}
              
              />
            ))
          }
          
     
     </div>

       
       
      </div>
      {/* <ShopFooter text={footer}/> */}
    </>
  );
};

export default BlogSpace;
