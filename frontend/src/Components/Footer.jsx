import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { assets } from "../assets/assets";

 function Footer() {
  const { t } = useTranslation();

  useEffect(() => {
    const id = "3946752"; // 👈 مقدار id از کد اینماد
    const code = "EIAndYDx3phWJVmaz3ol2FSCfIEPu26J"; // 👈 مقدار Code از کد اینماد
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://Trustseal.eNamad.ir/logo.aspx?id=${id}&p=${code}`;
    const container = document.getElementById("enamad-seal");
    if (container) container.appendChild(script);
    return () => {
      if (container && script.parentNode) container.removeChild(script);
    };
  }, []);
  

  // --- eNamad script loader (OPTION A) ---
  // اگر کد رسمی اینماد داری، شناسه‌ها رو اینجا بذار و از حالت کامنت خارج کن.
  // useEffect(() => {
  //   // نمونه‌ی عمومی: آدرس واقعی را از پنل اینماد بگیر
  //   const id = "YOUR_ENAMAD_ID";
  //   const script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.async = true;
  //   script.src = `https://Trustseal.eNamad.ir/logo.aspx?id=${id}&p=YOUR_P_CODE`;
  //   const container = document.getElementById("enamad-seal");
  //   if (container) container.appendChild(script);
  //   return () => { if (container && script.parentNode) container.removeChild(script); };
  // }, []);

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top feature cards */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 grid gap-6 sm:grid-cols-2">
        <Feature iconSrc={assets.support} alt={t("footer_support")}>
          {t("footer_support")}
        </Feature>

        <Feature iconSrc={assets.delivery} alt={t("footer_shipping_fast")}>
          {t("footer_shipping_fast")}
        </Feature>
      </div>

      {/* Links (responsive grid) */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Column 1 */}
        <div className="space-y-4 text-center md:text-right">
          <h3 className="text-sm font-semibold text-gray-900">{t("links")}</h3>
          <ul className="space-y-2 text-gray-700">
            <li><NavLink to="/about" className="hover:text-black">{t("about")}</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-black">{t("contact_us")}</NavLink></li>
            <li><NavLink to="/b2b" className="hover:text-black">{t("b2b", { defaultValue: "سفارش عمده" })}</NavLink></li>
            <li><NavLink to="/privacy" className="hover:text-black">{t("privacyPolicy")}</NavLink></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="space-y-4 text-center md:text-right">
          <h3 className="text-sm font-semibold text-gray-900">
            {t("delivery.title", { defaultValue: "" })}
          </h3>
          <ul className="space-y-2 text-gray-700">
       
            <li><NavLink to="/track-order" className="hover:text-black">{t("track.menu", { defaultValue: "پیگیری سفارش" })}</NavLink></li>
            <li><NavLink to="/terms" className="hover:text-black">{t("terms", { defaultValue: "قوانین و مقررات" })}</NavLink></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-4 text-center md:text-right">
          <h3 className="text-sm font-semibold text-gray-900">{t("contactInfo_footer")}</h3>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-medium">{t("phone")}:</span> {t("tel", { defaultValue: "09353176649" })}</li>
            <li><span className="font-medium">{t("email")}:</span> {t("emailContact", { defaultValue: "mino.khosravi2025@gmail.com" })}</li>
          </ul>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4 pt-2">
            <a href="https://www.instagram.com/respects_ir" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-black transition">
              <FaInstagram size={28} />
            </a>
            <a href="https://t.me/mkrv26" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-500 hover:text-black transition">
              <FaTelegram size={28} />
            </a>
            <a href="https://wa.me/09353176649" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-500 hover:text-black transition">
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* eNamad row */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-6">
        <div className="flex justify-center">
          {/* OPTION A: اسکریپت رسمی اینماد - این div مقصد اسکریپته */}
          <div id="enamad-seal" className="justify-center" />

          {/* OPTION B: پِلیس‌هولدر تصویری؛ فایل را در public/enamad.png بگذار */}
          <a
            href="https://enamad.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            aria-label="eNamad"
          >
            <img
              src="/enamad.png"
              alt="eNamad"
              className="h-24 w-auto object-contain opacity-90"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 text-center text-xs sm:text-sm text-gray-600">
          {t("rights")}
        </div>
      </div>
    </footer>
  );
}

/* ============ small atom ============ */
function Feature({ iconSrc, alt, children }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm w-full max-w-[260px]">
        <div className="flex flex-col items-center">
          <img
            src={iconSrc}
            alt={alt}
            width="64"
            height="64"
            className="h-16 w-auto object-contain"
            loading="lazy"
          />
          <p className="mt-3 text-gray-700 text-sm sm:text-base text-center">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;