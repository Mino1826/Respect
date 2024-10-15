import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="bg-customGray border-t pt-16 ">
      <div className="text-2xl flex justify-center">
        <Title text1={"سفارشات"} text2={"من"} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 mx-5 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency} 
                    <span>{item.price} </span>
                    
                  </p>
                  <p>تعداد: ۱</p>
                </div>
                
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">آماده ارسال</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                پیگیری سفارش
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;