import { useContext, useState } from "react";
import CartTotal from "../Components/CartTotal";
import Title from "../Components/Title";
import { ShopContext } from "../Context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const [province, setProvince] = useState(''); // بدون حالت پیش فرض
  const [city, setCity] = useState(''); // برای شهر
  const { navigate } = useContext(ShopContext);

  const provinces = [
    'تهران',
    'آذربایجان غربی',
    'آذربایجان شرقی',
    'اصفهان',
    'بوشهر',
    'چابهار',
    'خراسان جنوبی',
    'خراسان رضوی',
    'خوزستان',
    'زنجان',
    'سمنان',
    'سیستان و بلوچستان',
    'فارس',
    'قزوین',
    'قم',
    'کردستان',
    'کرمان',
    'کرمانشاه',
    'گلستان',
    'گیلان',
    'لرستان',
    'مازندران',
    'هرمزگان',
    'همدان',
    'یزد'
  ];

  const countiesOfTehran = [
    'تهران',
    'شمیرانات',
    'دماوند',
    'بهارستان',
    'پردیس',
    'پیشوا',
    'فیروزکوه',
    'سخنرانی',
    'ورامین',
    'اسلامشهر',
    'ملارد',
    'شهر ری',
    'رباط کریم',
    'قرچک',
    'شهر قدس',
    'ساوجبلاغ',
    'شهریار',
  ];

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
    setCity(''); // reset city when province changes
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="bg-customGray flex flex-col sm:flex-row justify-around gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/* اطلاعات ارسال */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[50%] bg-customGray shadow-md rounded-lg p-6 mx-2 mt-6 h-[60%]">
        <div className="text-xl text-center sm:text-2xl py-4 border-b-2 border-gray-200">
          <Title text1={'اطلاعات'} text2={'ارسال'} />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-3">
            <input className="border border-gray-300 rounded py-2 px-4 w-full " type="text" placeholder="نام" />
            <input className="border border-gray-300 rounded py-2 px-4 w-full " type="text" placeholder="نام خانوادگی" />
          </div>

          <input className="border border-gray-300 rounded py-2 px-4 w-full" type="email" placeholder="آدرس ایمیل (اختیاری)" />
          <input className="border border-gray-300 rounded py-2 px-4 w-full " type="text" placeholder="آدرس کامل" />

          <div className="flex gap-3">
            <select id='province' value={province} onChange={handleProvinceChange} className='border border-gray-300 rounded py-2 px-4 w-full'>
              <option value="">انتخاب استان</option>
              {provinces.map((province) => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
            <select id='city' value={city} onChange={handleCityChange} className='border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' disabled={!province}>
              <option value="">انتخاب شهر</option>
              {province === 'تهران' && countiesOfTehran.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <input className="border border-gray-300 rounded py-2 px-4 w-full " type="number" placeholder="کد پستی" />
          <input className="border border-gray-300 rounded py-2 px-4 w-full " type="number" placeholder="تلفن" />
        </div>
      </div>

      {/* مجموع سبد خرید */}
      <div className="mt-8 w-full sm:max-w-[50%]">
        <div className="mt-8">
          <CartTotal />
        </div>
        <div className="mt-12 mx-6 flex flex-col items-start">
          <Title text1={'روش'} text2={'پرداخت'} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod('cod')} className="flex gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">پرداخت امن زرین پال</p>
            </div>
          </div>

          <div className="flex items-center w-full text-end mt-8">
            <button onClick={() => navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm my-2">ثبت سفارش</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;