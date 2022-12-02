import { type NextPage } from "next";
import Head from "next/head";
import FooterForm from "./FooterForm";


const Home: NextPage = () => {

  return (
    <>
    <FooterForm/>
    <footer className="footer p-10 text-base-content">
    <div>
      <label className="font-bold ml-11 text-4xl">Cactus</label>
      <p>Cactus Shop .co<br/>Your new shop for everything you need</p>
    </div> 
    <div>
      <span className="footer-title">Social media</span> 
      <a className="link link-hover">Facebook</a>
      <a className="link link-hover">Instagram</a>
      <a className="link link-hover">Pinterest</a>
    </div> 
    <div>
      <span className="footer-title">Company</span> 
      <a className="link link-hover">About us</a> 
      <a className="link link-hover">Contact</a> 
      <a className="link link-hover">Jobs</a> 
      <a className="link link-hover">Press kit</a>
    </div> 
    <div>
      <span className="footer-title">Legal</span> 
      <a className="link link-hover">Terms of use</a> 
      <a className="link link-hover">Privacy policy</a> 
      <a className="link link-hover">Cookie policy</a>
    </div>
  </footer>
  </>
  );
};

export default Home;
