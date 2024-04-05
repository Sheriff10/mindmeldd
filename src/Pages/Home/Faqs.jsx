import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";
export default function Faqs() {

   const imgArr = ["/CHILL DOGS.png", "/buds.png", "/TRIBE.png", "/FANCATS.png"];
   const faqFunc = (title, text) => {
      return { title, text };
   };
   const faqArr = [
      faqFunc(
         "What is the MindMeld",
         "Dolor sit amet consectetur elit sed do eius mod tempor incd idunt labore magna.aliqua enim ad minim veniam quis"
      ),
      faqFunc(
         "How can i talk to a professional",
         "Dolor sit amet consectetur elit sed do eius mod tempor incd idunt labore magna.aliqua enim ad minim veniam quis"
      ),
      faqFunc(
         "What are the resources does the have? ",
         "Dolor sit amet consectetur elit sed do eius mod tempor incd idunt labore magna.aliqua enim ad minim veniam quis Dolor sit amet consectetur elit sed do eius mod tempor incd idunt labore magna.aliqua enim ad minim veniam quis"
      ),
   ];
   return (
      <div className="faqs py-16 ">
         <div className="container mx-auto px-5">
            <div className="grid lg:grid-cols-2  gap-5">

               <div className="faq-text">
                  <div className="head py-4">
                     <h1 className="font-poppins  text-yellow-500 text-4xl font-bold">
                        Frequently asked <br /> Questions
                     </h1>
                  </div>
                  <div className="body">
                     <span className="text-black font-thin">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nisi sequi earum cum, consequuntur rerum
                        cumque.
                     </span>{" "}
                     <br /> <br />
                     <small className=" text-yellow-500 hidden lg:block text-lg underline">
                        <Link to={"/home/faqs"}>See more</Link>
                     </small>
                  </div>
               </div>

               <div className="items-center">
                  {faqArr.map((i, index) => (
                     <Dropdown text={i.text} title={i.title} key={index} />
                  ))}
               </div>
               <small className=" text-yellow-500 text-lg underline lg:hidden">
                  <Link to={"/home/faqs"}>See more</Link>
               </small>
            </div>
         </div>
      </div>
   );
}
