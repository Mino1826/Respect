import React, { useState } from "react";
import Title from "./Title";
import { useTranslation } from "react-i18next";

const Delivery = () => {
  const { t } = useTranslation();
  const [note, setNote] = useState("");

  const handleNoteChange = (e) => setNote(e.target.value);

  return (
    <div className="mt-18 mb-10 p-6 bg-customGray rounded-lg shadow-2xl text-center">
      <Title text1={t("delivery.title1")} text2={t("delivery.title2")} />

      {/* نحوه ارسال */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">
          {t("delivery.shippingMethod.title")}
        </h3>
        <p className="text-gray-500 mt-2">
          {t("delivery.shippingMethod.description")}
        </p>
      </div>
      <hr className="border-gray-400 mt-4" />

      {/* زمان تحویل */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">
          {t("delivery.deliveryTime.title")}
        </h3>
        <p className="text-gray-500 mt-2">
          {t("delivery.deliveryTime.details")}
        </p>
      </div>
      <hr className="border-gray-400 mt-4" />

      {/* نکات */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">
          {t("delivery.note.title")}
        </h3>
        <p className="text-gray-500 mt-2">
          {t("delivery.note.description")}
        </p>
      </div>
      <hr className="border-gray-400 mt-4" />

      {/* توضیحات تکمیلی مشتری */}
      <div className="mt-6 text-right">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          📝 {t("delivery.customerNote.title", { defaultValue: "توضیحات تکمیلی" })}
        </h3>
        <p className="text-gray-500 mb-3">
          {t("delivery.customerNote.description", {
            defaultValue:
              "اگر نکته‌ای خاص درباره زمان ارسال، بسته‌بندی یا توضیحی برای فروشنده دارید، در این قسمت وارد کنید.",
          })}
        </p>
        <textarea
          value={note}
          onChange={handleNoteChange}
          rows="4"
          placeholder={t("delivery.customerNote.placeholder", {
            defaultValue: "پیام خود را اینجا بنویسید...",
          })}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black text-gray-700 resize-none"
        />
      </div>
    </div>
  );
};

export default Delivery;
