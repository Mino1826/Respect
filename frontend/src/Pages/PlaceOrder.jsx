import { useContext, useState } from "react";
import CartTotal from "../Components/CartTotal";
import Title from "../Components/Title";
import { ShopContext } from "../Context/ShopContext";
import { useTranslation } from 'react-i18next';

const PlaceOrder = () => {
  const { t } = useTranslation();
  const [method, setMethod] = useState('cod');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [note, setNote] = useState(''); // ✅ توضیحات مشتری

  const {
    navigate,
    setCheckoutNote,
    address, setAddress,
    createOrder, // از Context
  } = useContext(ShopContext);

  const provinces = [
    t("provinces.0"), t("provinces.1"), t("provinces.2"),
    t("provinces.3"), t("provinces.4"), t("provinces.5"),
    t("provinces.6"), t("provinces.7"), t("provinces.8"),
    t("provinces.9"), t("provinces.10"), t("provinces.11"),
    t("provinces.12"), t("provinces.13"), t("provinces.14"),
    t("provinces.15"), t("provinces.16"), t("provinces.17"),
    t("provinces.18"), t("provinces.19"), t("provinces.20"),
    t("provinces.21"), t("provinces.22"), t("provinces.23"),
    t("provinces.24")
  ];

  const countiesOfTehran = [
    t("tehran_counties.0"), t("tehran_counties.1"), t("tehran_counties.2"),
    t("tehran_counties.3"), t("tehran_counties.4"), t("tehran_counties.5"),
    t("tehran_counties.6"), t("tehran_counties.7"), t("tehran_counties.8"),
    t("tehran_counties.9"), t("tehran_counties.10"), t("tehran_counties.11"),
    t("tehran_counties.12"), t("tehran_counties.13"), t("tehran_counties.14"),
    t("tehran_counties.15"), t("tehran_counties.16")
  ];

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
    setCity('');
    setAddress({ ...address, province: e.target.value, city: "" });
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setAddress({ ...address, city: e.target.value });
  };

  const handlePlaceOrder = async () => {
    try {
      // 1) ذخیره‌ی note در Context (اگه بخوای جای دیگه هم داشته باشی)
      setCheckoutNote(note);

      // 2) نمونه payload — این را با ساختار بک‌اند خودت مچ کن
      const payload = {
        // cartItems: ...  ← اگر سبد را در Context داری اینجا اضافه کن
        paymentMethod: method,                // 'cod' یا روش‌های دیگر
        shippingAddress: {
          firstName: address.firstName,
          lastName: address.lastName,
          email: address.email,
          fullAddress: address.fullAddress,
          province: province,
          city: city,
          postalCode: address.postalCode,
          phone: address.phone,
        },
        customerNote: note,                   // ✅ توضیحات مشتری
      };

      // 3) ارسال به بک‌اند
      await createOrder(payload);

      // 4) هدایت به صفحه سفارش‌ها
      navigate('/orders');
    } catch (err) {
      console.error("order error:", err);
      alert(t("b2b_form_error", { defaultValue: "مشکلی پیش آمد. دوباره تلاش کنید." }));
    }
  };

  return (
    <div className="bg-customGray flex flex-col sm:flex-row justify-around gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/* اطلاعات ارسال */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[50%] bg-customGray shadow-md rounded-lg p-6 mx-2 mt-6 h-[60%]">
        <div className="text-xl text-center sm:text-2xl py-4 border-b-2 border-gray-200">
          <Title text1={t('shipping_info')} text2={t('info')} />
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-2 px-4 w-full"
              type="text"
              placeholder={t('first_name')}
              onChange={(e)=>setAddress({...address, firstName: e.target.value})}
            />
            <input
              className="border border-gray-300 rounded py-2 px-4 w-full"
              type="text"
              placeholder={t('last_name')}
              onChange={(e)=>setAddress({...address, lastName: e.target.value})}
            />
          </div>

          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="email"
            placeholder={t('email_address')}
            onChange={(e)=>setAddress({...address, email: e.target.value})}
          />
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="text"
            placeholder={t('full_address')}
            onChange={(e)=>setAddress({...address, fullAddress: e.target.value})}
          />

          <div className="flex gap-3">
            <select id='province' value={province} onChange={handleProvinceChange} className='border border-gray-300 rounded py-2 px-4 w-full'>
              <option value="">{t('select_province')}</option>
              {provinces.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            <select
              id='city'
              value={city}
              onChange={handleCityChange}
              className='border border-gray-300 rounded py-2 px-4 w-full'
              disabled={!province}
            >
              <option value="">{t('select_city')}</option>
              {province === 'تهران' && countiesOfTehran.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="number"
            placeholder={t('postal_code')}
            onChange={(e)=>setAddress({...address, postalCode: e.target.value})}
          />
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="number"
            placeholder={t('phone')}
            onChange={(e)=>setAddress({...address, phone: e.target.value})}
          />

          {/* ✅ توضیحات تکمیلی مشتری */}
          <div className="mt-2">
            <label className="block text-gray-700 mb-2 font-medium">
              {t('additional_notes_title', { defaultValue: 'توضیحات تکمیلی' })}
            </label>
            <textarea
              rows="4"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={t('additional_notes_placeholder', { defaultValue: 'اگر نکته‌ای درباره زمان ارسال، هماهنگی پیک یا بسته‌بندی دارید، اینجا بنویسید...' })}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black text-gray-700 resize-none"
            />
          </div>
        </div>
      </div>

      {/* مجموع سبد خرید و پرداخت */}
      <div className="mt-8 w-full sm:max-w-[50%]">
        <div className="mt-8">
          <CartTotal />
        </div>

        <div className="mt-12 mx-6 flex flex-col items-start">
          <Title text1={t('payment_method')} text2={t('method')} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod('cod')} className="flex gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">{t('secure_payment')}</p>
            </div>
          </div>

          <div className="flex items-center w-full text-end mt-8">
            <button onClick={handlePlaceOrder} className="bg-black text-white px-16 py-3 text-sm my-2">
              {t('place_order')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
