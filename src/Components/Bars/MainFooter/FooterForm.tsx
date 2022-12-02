import { type NextPage } from "next";
import React from 'react';
import FormMan from '../../../Assets/FormMan.png'; // Tell webpack this JS file uses this image
const FooterForm: NextPage = () => {

  return (
    <>
    {/* <div className="h-[50vh] w-full rounded-none bg-black my-3 btn btn-square loading"></div> */}
        <div className="md:grid grid-cols-6 w-full bg-black p-4 gap-2 mb-5 rounded-b-xl">
            <div className="col-span-3 lg:col-span-4 p-6 space-y-4">
                <label className="text-white font-bold text-2xl text-center">Stay home & get your daily needs from our shop</label>
                <p>Start your daily shoping with 
                    <button className="font-bold text-primary ml-1">Cactus</button>
                </p>
                <input type="text" placeholder="Enter your email adress" className="input input-ghost bg-base-100 w-full md:max-w-xs block" />
                <input type="text" placeholder="Enter your phone number" className="input input-ghost bg-base-100 w-full md:max-w-xs block" />
                <button className="btn btn-primary w-full md:max-w-xs">Subscribe</button>
                
            </div>
            <div className="p-9 col-span-3 lg:col-span-2">
                <img src={FormMan.src} className="rounded-xl" alt="FormMan" />
            </div>
        </div>
    </>
  );
};

export default FooterForm;
