import { type NextPage } from "next";
import ShopHeader from "../Shop/ShopSpace/ShopHeader";

interface Props {
    text? : string,
    titleStyle?: string , 
  }

const StickyBar: NextPage<Props> = ({text,titleStyle}:Props) => {

  return (<ShopHeader text={text} titleStyle={titleStyle}/>)
}
export default StickyBar;
