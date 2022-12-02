import { type NextPage } from "next";

interface Props {
    
    text? : string,
    titleStyle?: string , 
    
  }

const BlogHeader: NextPage<Props> = ({text,titleStyle}:Props) => {

  return (
    <>
      <h1 className={`sticky sm:static top-[5rem] 
      p-2 font-extrabold text-md 
      bg-black  ${titleStyle}  text-center 
      border-b-[6px] sm:border-b-0 border-t-0 border-base-100  z-30 `}
      
      >{text}</h1>
    </>
  );
};

export default BlogHeader;
