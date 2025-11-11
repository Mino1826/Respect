import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import RelatedProducts from "../Components/RelatedProducts";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async"; // برای SEO

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const { t } = useTranslation();

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [scent, setScent] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]); // ذخیره دیدگاه‌ها
  const [newReview, setNewReview] = useState("");

  const scents = [
    t("product.scents.coconut"),
    t("product.scents.cinnamon"),
    t("product.scents.vanilla"),
    t("product.scents.chocolate"),
    t("product.scents.cookie"),
    t("product.scents.lavender"),
    t("product.scents.coffee"),
    t("product.scents.lemon"),
  ];

  useEffect(() => {
    const found = products.find((item) => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image[0]);
    }
  }, [productId, products]);

  const handleAddToCart = () => {
    addToCart(productData._id);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview("");
    }
  };

  if (!productData) return null;

  return (
    <div className="bg-customGray border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* 🔹 SEO بهینه */}
      <Helmet>
        <title>{`${productData.name} | Respect Candles`}</title>
        <meta
          name="description"
          content={`${productData.name} - ${t("product.products_description")}`}
        />
      </Helmet>

      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* تصاویر */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt={productData.name}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer mx-2 rounded-md"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              alt={`${productData.name} candle`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* توضیحات */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <p className="mt-5 text-3xl font-medium">
            {productData.price.toLocaleString()} {currency}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5 leading-relaxed">
            {productData.description || t("product.products_description")}
          </p>

          <p className="text-gray-700 text-sm mt-3">
            ⏱️ {t("product.preparation_time")}: <b>۵ - ۷ {t("product.working_days")}</b>
          </p>

          {/* 🔸 رنگ */}
          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">
              {t("product.choose_color")}
            </label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder={t("product.enter_color")}
              className="border border-gray-300 rounded w-full p-2"
            />
          </div>

          {/* 🔸 رایحه */}
          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">
              {t("product.choose_scent")}
            </label>
            <select
              value={scent}
              onChange={(e) => setScent(e.target.value)}
              className="border border-gray-300 rounded w-full p-2"
            >
              <option value="">{t("product.select_scent")}</option>
              {scents.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* 🔸 تعداد */}
          <div className="mt-6 flex items-center gap-4">
            <label className="text-sm font-medium">{t("quantity")}:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-300 w-20 text-center p-2 rounded"
            />
          </div>

          {/* 🔸 اطلاع گیفت */}
          <p className="text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-md mt-6 p-3">
            🎁 {t("product.bulk_gift_info")}
          </p>

          {/* 🔸 دکمه سبد خرید */}
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-8 py-3 mt-6 text-sm rounded hover:bg-gray-800 transition"
          >
            {t("product.add_to_cart")}
          </button>
        </div>
      </div>

      {/* 🔹 توضیحات و دیدگاه‌ها */}
      <div className="mt-20 border-t border-gray-300">
        <div className="flex flex-col md:flex-row">
          {/* توضیحات محصول */}
          <div className="md:w-1/2 border-r border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">
              {t("product.description")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("product.products_description")}
            </p>
          </div>

          {/* دیدگاه مشتریان */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-lg font-semibold mb-4">
              {t("product.your_review")}
            </h2>

            <form onSubmit={handleSubmitReview} className="flex flex-col gap-3">
              <textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder={t("product.write_review")}
                className="border border-gray-300 rounded-md p-2 h-24"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
              >
                {t("product.submit_review")}
              </button>
            </form>

            <div className="mt-6">
              {reviews.length === 0 ? (
                <p className="text-gray-500">{t("product.no_reviews")}</p>
              ) : (
                reviews.map((review, index) => (
                  <div key={index} className="border-b py-2 text-gray-700">
                    {review}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
