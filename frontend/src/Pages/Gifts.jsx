import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Title from "../Components/Title";

export default function Gifts() {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "fa" ? "rtl" : "ltr";

  const contacts = [
    { href: "https://www.instagram.com/respects_ir", Icon: FaInstagram, label: t("gifts.cta.instagram") },
    { href: "https://t.me/mkrv26", Icon: FaTelegram, label: t("gifts.cta.telegram") },
    { href: "https://wa.me/989353176649", Icon: FaWhatsapp, label: t("gifts.cta.whatsapp") },
  ];

  return (
    <div className="bg-customGray min-h-[70vh] pt-10 pb-16 px-4" dir={dir}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-2xl flex justify-center mb-8">
          <Title text1={t("gifts.title1")} text2={t("gifts.title2")} />
        </div>

        {/* Intro */}
        <section className="bg-white border rounded-lg p-6 shadow-sm space-y-4 mb-6">
          <h2 className="text-lg font-semibold">{t("gifts.intro_title")}</h2>
          <p className="text-gray-700">{t("gifts.intro_text")}</p>
        </section>

        {/* How to order */}
        <section className="bg-white border rounded-lg p-6 shadow-sm space-y-4 mb-6">
          <h3 className="text-base font-semibold">{t("gifts.how_title")}</h3>
          <ol className="list-decimal ps-5 space-y-2 text-gray-700">
            <li>{t("gifts.how_1")}</li>
            <li>{t("gifts.how_2")}</li>
            <li>{t("gifts.how_3")}</li>
            <li>{t("gifts.how_4")}</li>
          </ol>
          <div className="flex flex-wrap gap-3 pt-2">
            {contacts.map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border rounded-md px-3 py-2 hover:bg-gray-50 transition text-gray-800"
              >
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Ideas */}
        <section className="bg-white border rounded-lg p-6 shadow-sm space-y-3 mb-6">
          <h3 className="text-base font-semibold">{t("gifts.ideas_title")}</h3>
          <ul className="list-disc ps-5 space-y-1 text-gray-700">
            <li>{t("gifts.ideas_1")}</li>
            <li>{t("gifts.ideas_2")}</li>
            <li>{t("gifts.ideas_3")}</li>
          </ul>
        </section>

        {/* Customizable options */}
        <section className="bg-white border rounded-lg p-6 shadow-sm space-y-3 mb-6">
          <h3 className="text-base font-semibold">{t("gifts.custom_title")}</h3>
          <ul className="list-disc ps-5 space-y-1 text-gray-700">
            <li>{t("gifts.custom_1")}</li>
            <li>{t("gifts.custom_2")}</li>
            <li>{t("gifts.custom_3")}</li>
            <li>{t("gifts.custom_4")}</li>
            <li>{t("gifts.custom_5")}</li>
          </ul>
        </section>

        {/* Important timing */}
        <section className="bg-white border rounded-lg p-6 shadow-sm space-y-3 mb-6">
          <h3 className="text-base font-semibold">{t("gifts.important_title")}</h3>
          <ul className="list-disc ps-5 space-y-1 text-gray-700">
            <li>{t("gifts.important_1")}</li>
            <li>{t("gifts.important_2")}</li>
            <li>{t("gifts.important_3")}</li>
          </ul>
        </section>

        {/* Pricing & payment */}
        <section className="bg-white border rounded-lg p-6 shadow-sm space-y-3 mb-6">
          <h3 className="text-base font-semibold">{t("gifts.price_title")}</h3>
          <ul className="list-disc ps-5 space-y-1 text-gray-700">
            <li>{t("gifts.price_1")}</li>
            <li>{t("gifts.price_2")}</li>
            <li>{t("gifts.price_3")}</li>
          </ul>
        </section>

        {/* Delivery */}
        <section className="bg-white border rounded-lg p-6 shadow-sm space-y-3 mb-6">
          <h3 className="text-base font-semibold">{t("gifts.delivery_title")}</h3>
          <ul className="list-disc ps-5 space-y-1 text-gray-700">
            <li>{t("gifts.delivery_1")}</li>
            <li>{t("gifts.delivery_2")}</li>
            <li>{t("gifts.delivery_3")}</li>
          </ul>
        </section>

        {/* Consulting */}
        <section className="bg-white border rounded-lg p-6 shadow-sm space-y-3 mb-6">
          <h3 className="text-base font-semibold">{t("gifts.consult_title")}</h3>
          <p className="text-gray-700">{t("gifts.consult_text")}</p>
        </section>

        {/* Cancellation */}
        <section className="bg-white border rounded-lg p-6 shadow-sm space-y-3">
          <h3 className="text-base font-semibold">{t("gifts.cancel_title")}</h3>
          <ul className="list-disc ps-5 space-y-1 text-gray-700">
            <li>{t("gifts.cancel_1")}</li>
            <li>{t("gifts.cancel_2")}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
