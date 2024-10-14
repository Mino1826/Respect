import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Footer = () => {

 const {scrollToTop} = useContext(ShopContext)
  return (
    <div>
      <div className="bg-customGray flex flex-row sm:grid grid-cols-[1fr_1fr_1fr] gap-14 text-sm">
        <div>
          <Link to='/'>
          <img onClick={scrollToTop} className="mb-2 w-60 m-1" src={assets.logo} alt="" />
          </Link>
          
        </div>
        <div>
          <p className="text-xl font-medium mb-5 mt-6 text-center">لینک ها</p>
          <hr className="border-gray-400 mb-3 w-[350px]"/>

          <ul className="flex flex-col justify-center gap-1 text-gray-600 cursor-pointer">
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <p>صفحه اصلی</p>
            </NavLink>

            <NavLink
              to="/collection"
              className="flex flex-col items-center gap-1"
            >
              <p>محصولات</p>
            </NavLink>

            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p>درباره ما</p>
            </NavLink>

            <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p>ارتباط با ما</p>
            </NavLink>
            <NavLink
              to="/delivery"
              className="flex flex-col items-center gap-1"
            >
              <p>نحوه ارسال</p>
            </NavLink>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 mt-6 text-center">اطلاعات تماس</p>
          <hr className="border-gray-400 mb-3 w-[350px]"/>
          <ul className="flex flex-col text-center gap-4 text-gray-600 cursor-pointer">
            <li>Tel: 09353176649</li>
            <li>Email: mino.khosravi2025@gmail.com</li>

            <ul className="flex flex-row gap-4 justify-around text-center">
              <li>
                <a
                  href="https://www.instagram.com/k_garden12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition duration-300"
                >
                  <FaInstagram size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://telegram.org/@mkrv_candle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition duration-300"
                >
                  <FaTelegram size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.whatsapp.com/Mkrv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition duration-300"
                >
                  <FaWhatsapp size={30} />
                </a>
              </li>
            </ul>
          </ul>
        </div>
        
      </div>

      <div>
        <p className="py-5 bg-customGray text-sm text-center">
          کلیه حقوق این سایت متعلق به فروشگاه Respect می باشد{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
