import { type NextPage } from "next";




const Checker: NextPage = () => {
    //fake data
    const Manifacturer = ["Adidas"," nike" ," lacost" , "gucci"];
   
  return (
    <div className="mt-8">
         <label className="cursor-pointer label mb-2 bg-base-300 bg-opacity-50">
                    <span className="label-text">All</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
        </label>
        {
            Manifacturer.map((e,i)=>(
                <label key={"checker"+i} className="cursor-pointer label mb-2 bg-base-300 bg-opacity-50">
                    <span className="label-text">{e}</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                </label>
            ))
        }
    </div>
    
  );
};

export default Checker;

