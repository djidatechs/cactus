import { type NextPage } from "next";
import Topwall from "../../Shop/TopWall/Topwall";
import NewReview from "./NewReview";
import Review from "./Review";




const Reviews: NextPage = () => {
  
  return (
   <>
   <Topwall title="Reviews" titleStyle="text-base-100"/>
   <div className="p-12 bg-black space-y-4">
  <Review/>
  <Review/>
  <Review/>
  <NewReview/>


   </div>
   </>
  );
};

export default Reviews;
