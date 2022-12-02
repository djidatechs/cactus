import { type NextPage } from "next";

interface Props {
    
    text? : string,
    
  }

const ShopFooter: NextPage<Props> = ({text}:Props) => {

  return (
    <>
      <h1 className="p-4 font-thin text-sm  bg-black my-2 text-primary">{text}</h1>
    </>
  );
};

export default ShopFooter;
