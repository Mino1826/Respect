import { useContext, useMemo } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Orders = () => {
  const { t } = useTranslation();
  const { products, cartItems, currency } = useContext(ShopContext);

  // فقط محصولات انتخاب‌شده در سبد خرید را می‌آورد
  const items = useMemo(() => {
    if (!cartItems) return [];
    return Object.entries(cartItems)
      .filter(([id, qty]) => qty > 0)
      .map(([id, qty]) => {
        const product = products.find((p) => p._id === id);
        if (!product) return null;
        return {
          id,
          name: product.name,
          image: Array.isArray(product.image) ? product.image[0] : product.image,
          price: product.price,
          qty,
        };
      })
      .filter(Boolean);
  }, [cartItems, products]);

  return (
    <div className="bg-customGray border-t pt-16 min-h-[70vh]">
      {/* عنوان صفحه */}
      <div className="text-2xl flex justify-center mb-6">
        <Title text1={t("my_orders")} text2={t("ordersMe")} />
      </div>

      {/* اگر سبد خرید خالی بود */}
      {items.length === 0 ? (
        <div className="text-center text-gray-600 py-10">
          <p>{t("no_product")}</p>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto w-full px-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="py-4 border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img
                  className="w-16 sm:w-20 rounded-md shadow"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p>
                      {t("orders_page.price", { defaultValue: "قیمت" })}:{" "}
                      {currency}
                      {item.price.toLocaleString()}
                    </p>
                    <p>
                      {t("orders_page.quantity", { defaultValue: "تعداد" })}:{" "}
                      {item.qty}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="min-w-2 h-2 rounded-full bg-green-500" />
                  <p className="text-sm md:text-base">
                    {t("ready_to_ship")}
                  </p>
                </div>
                <NavLink
  to="/track-order"
  className="inline-block border px-4 py-2 text-sm font-medium rounded-sm hover:text-black hover:bg-gray-100 transition"
>
  {t("track.menu", { defaultValue: "پیگیری سفارش" })}
</NavLink>

                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
