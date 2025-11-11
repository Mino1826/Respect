import { useContext, useState, useMemo } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import { useTranslation } from "react-i18next";

const CartTotal = () => {
  const { currency, getCartAmount } = useContext(ShopContext);
  const { t, i18n } = useTranslation();
  const [shippingMethod, setShippingMethod] = useState("flat_rate15");

  // عددسازی امن (حذف کاما/کاراکترهای غیردیجیت)
  const toNumber = (v) => {
    const n = Number(String(v).replace(/[^\d.-]/g, ""));
    return Number.isFinite(n) ? n : 0;
  };

  // مبلغ خام سبد
  const rawSubtotal = getCartAmount();

  // اگر مبلغ کمتر از ۱۰۰۰ باشد، فرض می‌کنیم «به هزار تومان» است → ضربدر ۱۰۰۰
  const subtotal = useMemo(() => {
    const n = toNumber(rawSubtotal);
    return n < 1000 ? n * 1000 : n; // 220 → 220000
  }, [rawSubtotal]);

  // فقط پیشتاز هزینه دارد
  const shippingOptions = {
    flat_rate15: { label: t("shippingMethod.flat_rate15"), cost: 85000 }, // پست پیشتاز
    flat_rate22: { label: t("shippingMethod.flat_rate22"), cost: 0 },     // اسنپ باکس (پس‌کرایه)
    flat_rate23: { label: t("shippingMethod.flat_rate23"), cost: 0 },     // تیپاکس (پس‌کرایه)
  };

  const handleShippingChange = (e) => setShippingMethod(e.target.value);

  const shippingCost = toNumber(shippingOptions[shippingMethod]?.cost || 0);
  const finalTotal = subtotal + shippingCost;

  const nf = new Intl.NumberFormat(i18n.language?.startsWith("fa") ? "fa-IR" : "en-US");
  const fmt = (n) => nf.format(toNumber(n));

  return (
    <div className="bg-customGray w-full flex flex-col">
      <div className="text-2xl mx-4 pt-3 text-center">
        <Title text1={t("total")} text2={t("cart")} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm mx-6">
        {/* جمع جزء */}
        <div className="flex justify-between">
          <p>{t("subtotal")}</p>
          <p>{fmt(subtotal)} {currency}</p>
        </div>

        <hr className="border-gray-400 mb-3 mt-2" />

        {/* روش‌های ارسال */}
        <div className="flex flex-col gap-2">
          <p>{t("shipping")}</p>
          <ul className="flex flex-col gap-5 leading-loose">
            {Object.keys(shippingOptions).map((method) => (
              <li key={method}>
                <input
                  className="mx-2 my-2"
                  type="radio"
                  name="shipping_method"
                  id={method}
                  value={method}
                  checked={shippingMethod === method}
                  onChange={handleShippingChange}
                />
                <label htmlFor={method} className="inline-flex items-center gap-2 text-gray-800">
                  {shippingOptions[method].label}
                  {method === "flat_rate15" && shippingOptions[method].cost > 0 && (
                    <span className="text-gray-600 text-sm">
                      ({fmt(shippingOptions[method].cost)} {currency})
                    </span>
                  )}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-400 mb-3 mt-2" />

        {/* مجموع نهایی */}
        <div className="flex justify-between mb-4">
          <b>{t("finalTotal")}</b>
          <b>{fmt(finalTotal)} {currency}</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
