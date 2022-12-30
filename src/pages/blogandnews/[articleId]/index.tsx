import { type NextPage } from "next";
import Head from "next/head";
import Reviews from "../../../Components/Blog/Articles/Reviews";
import Topwall from "../../../Components/Shop/TopWall/Topwall";
import Image from "next/image";


const Article: NextPage = () => {

  return (
    <>
      
      <Topwall title="Top portable computers in Algeria" titleStyle="text-base-100"/>
      <div  className="w-full bg-black grid grid-cols-3 gap-6 p-8">
       <img className="w-full rounded-md" src="https://i.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so"   alt="blog image"/> 
       <img className="w-full rounded-md" src="https://i.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so"  alt="blog image"/> 
       <img className="w-full rounded-md" src="https://i.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so"  alt="blog image"/> 
      </div>
      <div className="w-full bg-black p-8">
        <p className="lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At varius vel pharetra vel turpis. Sed augue lacus viverra vitae congue eu consequat. Porta nibh venenatis cras sed felis eget velit aliquet. Ligula ullamcorper malesuada proin libero. Imperdiet nulla malesuada pellentesque elit eget. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Justo nec ultrices dui sapien. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Placerat vestibulum lectus mauris ultrices eros in cursus. Nam aliquam sem et tortor consequat id.
          Diam sollicitudin tempor id eu nisl. Arcu non odio euismod lacinia at quis. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Quis hendrerit dolor magna eget est lorem ipsum. Sed augue lacus viverra vitae. Nibh ipsum consequat nisl vel pretium lectus quam id. Id diam vel quam elementum pulvinar etiam non. Eu lobortis elementum nibh tellus. Parturient montes nascetur ridiculus mus. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Imperdiet dui accumsan sit amet nulla. Aliquam etiam erat velit scelerisque in dictum non. Velit ut tortor pretium viverra suspendisse potenti nullam. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. A lacus vestibulum sed arcu non odio euismod lacinia at. Odio morbi quis commodo odio aenean sed. Pharetra massa massa ultricies mi. Feugiat pretium nibh ipsum consequat nisl.
          
        </p>
      </div>
      <Reviews/>
      
    </>
  );
};

export default Article;
