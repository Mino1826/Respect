// src/pages/B2B.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function B2B() {
  const { t, i18n } = useTranslation();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          {t("b2b_title")}
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8 text-justify">
          {t("b2b_intro")}
        </p>

        <section className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {t("b2b_tips_title")}
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>{t("b2b_tips_1")}</li>
            <li>{t("b2b_tips_2")}</li>
            <li>{t("b2b_tips_3")}</li>
            <li>{t("b2b_tips_4")}</li>
            <li>{t("b2b_tips_5")}</li>
          </ul>
        </section>

        <section className="border-t border-gray-200 pt-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {t("b2b_contact_title")}
          </h2>

          <ul className="space-y-2 text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold">{t("b2b_contact_telegram")}:</span>{" "}
              <a
                href="https://t.me/mkrv26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                mkrv26
              </a>
            </li>
            <li>
              <span className="font-semibold">{t("b2b_contact_whatsapp")}:</span>{" "}
              <a
                href="https://wa.me/09353176649"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                09353176649
              </a>
            </li>
            <li>
              <span className="font-semibold">{t("b2b_contact_instagram")}:</span>{" "}
              <a
                href="https://www.instagram.com/respects_ir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                respects_ir
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
