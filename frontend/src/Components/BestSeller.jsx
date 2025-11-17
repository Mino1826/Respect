import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'react-i18next'; 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BestSeller = () => {
  const { products, toggleLanguage } = useContext(ShopContext);
  const [bestProducts, setBestProducts] = useState([]);
  const { t } = useTranslation(); 

  useEffect(() => {
    // فقط محصولاتی که bestseller=true هستند
    const filtered = products.filter(p => p.bestseller === true);
    // اگر خواستی محدودش کنی:
    setBestProducts(filtered.slice(0, 6));
  }, [products]);

  return (
    <div className="mt-12 bg-customGray">
      <div className="text-center py-8 text-3xl">
        <Title text1={t('seller')} text2={t('best')} /> 
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          {t('bestseller_description')} 
        </p>
      </div>

      <Swiper
        className="w-[90%] h-[80%] mx-auto"
        breakpoints={{
          640: { slidesPerView: 3 },
          0: { slidesPerView: 1 },
        }}
        modules={[Navigation, Pagination]}
        navigation={{ clickable: true }}
        loopFillGroupWithBlank={true}
        spaceBetween={40}
        loop={true}
      >
        {bestProducts.length > 0 ? (
          bestProducts.map((item) => (
            <SwiperSlide key={item._id} className="flex justify-center ">
              <ProductItem
                id={item._id}
                image={item.image}                     // ProductItem خودش image[0] رو هندل می‌کنه
                name={item.name[toggleLanguage]}       // چون name بر اساس زبان آبجکت است
                price={item.price}
              />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-lg">{t('no_product')}</p>
        )}
      </Swiper>
    </div>
  );
}

export default BestSeller;
