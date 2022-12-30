import { type NextPage } from "next";
import Head from "next/head";
import Topwall from "../../Components/Shop/TopWall/Topwall";



const Paginator: NextPage = () => {

  return (
    <div className="bg-black w-full text-center p-4">
      <div className="btn-group p-0 m-0">
        <button className="btn btn-active ">1</button>
        <button className="btn bg-base-100 ">2</button>
        <button className="btn bg-base-100">3</button>
        <button className="btn bg-base-100 btn-disabled ">...</button>

        <button className="btn bg-base-100">15</button>
        <button className="btn bg-base-100">16</button>
      </div>
  </div>
  );
};

export default Paginator;
