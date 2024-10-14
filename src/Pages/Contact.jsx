// import { assets } from "../assets/assets"
import Delivery from "../Components/delivery";

import Title from "../Components/Title"
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-customGray p-8">
      <div className="text-center text-2xl pt-10 border-t border-gray-300">
        <Title text1={'ارتباط'} text2={"با ما"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-18">
        {/* تصویر (می‌توانید آدرس تصویر را اضافه کنید) */}
        <img className="w-full md:max-w-[480px] rounded-lg shadow-md" src='' alt="Store" />

        <div className="flex flex-col justify-center items-start gap-6 md:w-2/4">
          <p className="font-semibold text-xl text-gray-800">ما به ارتباط با مشتریان و ایجاد ارتباط نزدیک با آنها اعتقاد داریم. هدف ما این است که با شما در تماس باشیم و به نیازها و نظرات شما توجه کنیم.</p>

      

          <h3 className="font-semibold text-xl text-gray-600">اطلاعات تماس</h3>
          <p className="text-gray-500">Tel: 09353176649 <br /> Email: mino.khosravi2025@gmail.com</p>

       


          <p className="text-gray-500">
            اگر سوالی دارید یا نیاز به کمک دارید، لطفاً با ما تماس بگیرید. تیم ما همواره آماده پاسخگویی به شماست.
          </p>

          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/k_garden12" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition duration-300">
              <FaInstagram size={30} />
            </a>
            <a href="https://telegram.org/@mkrv_candle" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition duration-300">
              <FaTelegram size={30} />
            </a>
            <a href="https://www.whatsapp.com/Mkrv" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition duration-300">
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
      </div>
      <Delivery/>

      
    </div>
  )
}

export default Contact;