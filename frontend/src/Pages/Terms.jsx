import { useTranslation } from "react-i18next";

// اگر Title داری و مطمئن هستی درست کار می‌کند، آن‌را اضافه کن
// اگر مطمئن نیستی، موقتاً کامنت کن تا ببینیم ارور از Title نیست
import Title from "../Components/Title";

 function Terms() {
  const { t, i18n } = useTranslation();
  const dir = i18n?.language === "fa" ? "rtl" : "ltr";

  return (
    <div className="bg-customGray min-h-[70vh] pt-10 pb-16 px-4" dir={dir}>
      <div className="max-w-5xl mx-auto">
        {/* اگر Title ارور داد، موقتاً کامنتش کن */}
        <div className="text-2xl flex justify-center mb-8">
          <Title text1={t("terms_title_1", { defaultValue: "قوانین و" })}
                 text2={t("terms_title_2", { defaultValue: "مقررات" })} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-gray-800 leading-7 space-y-8">
          <section>
            <p>{t("terms.intro", {
              defaultValue:
                "کاربر گرامی لطفاً موارد زیر را جهت استفاده مناسب از خدمات Respect به دقت ملاحظه فرمایید..."
            })}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">
              {t("terms.section1_title", { defaultValue: "۱– تعاریف" })}
            </h2>
            <p>{t("terms.section1_desc", {
              defaultValue: "مطابق قانون تجارت الکترونیک..."
            })}</p>
            <ul className="list-disc ps-5 space-y-1 mt-3 text-gray-700">
              <li>{t("terms.section1_1", { defaultValue: "۱-۱–فروشگاه: ..." })}</li>
              <li>{t("terms.section1_2", { defaultValue: "۲-۱–سایت: ..." })}</li>
              <li>{t("terms.section1_3", { defaultValue: "۳-۱–محتوای سایت: ..." })}</li>
              <li>{t("terms.section1_4", { defaultValue: "۴-۱–کاربر میهمان: ..." })}</li>
              <li>{t("terms.section1_5", { defaultValue: "۵-۱–عضو: ..." })}</li>
              <li>{t("terms.section1_6", { defaultValue: "۶-۱–مشتری: ..." })}</li>
              <li>{t("terms.section1_7", { defaultValue: "۷-۱–سفارش: ..." })}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">
              {t("terms.section2_title", { defaultValue: "۲– شرایط انعقاد بیع برای خرید از سایت" })}
            </h2>
            <p>{t("terms.section2_desc", {
              defaultValue:
                "در محیط الکترونیکی نیز مانند محیط فیزیکی هر داد و ستدی نشان‌دهنده وقوع یک عقد یا قرارداد است..."
            })}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">
              {t("terms.section3_title", { defaultValue: "۳– راه‌های ارتباط الکترونیکی سایت" })}
            </h2>
            <p>{t("terms.section3_desc", {
              defaultValue:
                "هنگامی که شما از سرویس‌ها و خدمات respects.ir استفاده می‌کنید..."
            })}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">
              {t("terms.section4_title", { defaultValue: "۴– مراحل ثبت سفارش و خرید" })}
            </h2>
            <p>{t("terms.section4_desc", {
              defaultValue:
                "کاربران محترم برای مشاهده، دریافت اطلاعات و حتی ثبت سفارش ملزم به ثبت‌نام در سایت نیستند..."
            })}</p>
            <p className="mt-3">
              {t("terms.section4_extra", { defaultValue: "این متن جایگزین کامل قوانین قبلی است." })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Terms;