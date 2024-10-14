import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="min-h-full max-h-full min-w-full overflow-wrap-anywhere object-cover object-center rounded-inherit"
        src={assets.hero_img}
        alt="شمع سازی"
      />

      <div className="py-2 relative overflow-hidden whitespace-nowrap  w-full  bg-customGray ">
        <div className="flex animate-scroll">
          <div className="space-x-12 flex">
           <p className="text-s px-10">✺</p>
            <p className="text-s"> ترکیبی از هنر و آرامش</p>
            <p className="text-s">✺</p>
            <p className="text-s"> زیبایی در جزئیات </p>
            <p className="text-s">✺</p>
            <p className="text-s">نور و عطر طبیعت در خانه شما</p>
            <p className="text-s">✺</p>
            <p className="text-s"> ترکیبی از هنر و آرامش</p>
            <p className="text-s">✺</p>
            <p className="text-s"> زیبایی در جزئیات </p>
            <p className="text-s">✺</p>
            <p className="text-s">نور و عطر طبیعت در خانه شما</p>
            <p className="text-s">✺</p>
            <p className="text-s"> ترکیبی از هنر و آرامش</p>
            <p className="text-s">✺</p>
            <p className="text-s"> زیبایی در جزئیات </p>
            <p className="text-s">✺</p>
            <p className="text-s">نور و عطر طبیعت در خانه شما</p>
            <p className="text-s">✺</p>
          </div>
          
        </div>
        <hr className="border-gray-400 mt-4 "/>
      </div>
      
    </div>
  );
};

export default Hero;
