import { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../Components/Title";

export default function OrderTracking() {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "fa" ? "rtl" : "ltr";

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);   // {orderCode, status, history:[]}
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!code || code.trim().length < 4) {
      setError(t("track.required"));
      return;
    }

    setLoading(true);
    try {
      // TODO: اینجا به بک‌اند واقعی وصل کن:
      // const res = await fetch(`/api/track?code=${encodeURIComponent(code)}`);
      // const data = await res.json();

      // --- Mock برای تست UI:
      await new Promise((r) => setTimeout(r, 700));
      const mock = {
        orderCode: code.trim().toUpperCase(),
        status: "in_transit", // pending | confirmed | in_transit | delivered | canceled
        history: [
          { ts: "2025-11-10 10:14", label: "order_confirmed" },
          { ts: "2025-11-11 12:05", label: "handed_to_carrier" },
        ],
        trackingLink: "https://tipaxco.com/tracking", // اختیاری
      };
      setResult(mock);
    } catch (err) {
      setError(t("track.fail"));
    } finally {
      setLoading(false);
    }
  };

  // برای تایم‌لاین
  const steps = [
    { key: "pending",        title: t("track.step_pending") },
    { key: "confirmed",      title: t("track.step_confirmed") },
    { key: "in_transit",     title: t("track.step_in_transit") },
    { key: "delivered",      title: t("track.step_delivered") },
  ];

  const activeIndex = result
    ? Math.max(
        0,
        ["pending", "confirmed", "in_transit", "delivered"].indexOf(result.status)
      )
    : 0;

  return (
    <div className="bg-customGray min-h-[70vh] pt-10 pb-16 px-4" dir={dir}>
      <div className="max-w-3xl mx-auto">
        <div className="text-2xl flex justify-center mb-8">
          <Title text1={t("track.title1")} text2={t("track.title2")} />
        </div>

        {/* فرم */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border rounded-lg p-5 flex flex-col sm:flex-row gap-3"
        >
          <input
            className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder={t("track.input_ph")}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-5 py-2 rounded-md text-white ${
              loading ? "bg-gray-400" : "bg-black hover:bg-gray-800"
            } transition`}
          >
            {loading ? t("track.loading") : t("track.submit")}
          </button>
        </form>

        {/* پیام خطا */}
        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md p-3">
            {error}
          </div>
        )}

        {/* نتیجه */}
        {result && (
          <div className="mt-6 bg-white border rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">
                {t("track.order_code")}: <span>{result.orderCode}</span>
              </div>
              <div
                className={`text-sm px-3 py-1 rounded-full ${
                  result.status === "delivered"
                    ? "bg-green-100 text-green-700"
                    : result.status === "canceled"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {t(`track.status.${result.status}`, { defaultValue: result.status })}
              </div>
            </div>

            {/* تایم‌لاین */}
            <div className="mt-2">
              <div className="flex items-center justify-between">
                {steps.map((s, idx) => (
                  <div key={s.key} className="flex-1 flex items-center">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-semibold ${
                        idx <= activeIndex ? "bg-black text-white" : "bg-gray-200 text-gray-600"
                      }`}
                      title={s.title}
                    >
                      {idx + 1}
                    </div>
                    {idx < steps.length - 1 && (
                      <div
                        className={`h-1 flex-1 mx-2 ${
                          idx < activeIndex ? "bg-black" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                {steps.map((s) => (
                  <span key={s.key}>{s.title}</span>
                ))}
              </div>
            </div>

            {/* تاریخچه رویدادها */}
            {result.history?.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2">{t("track.history")}</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {result.history.map((h, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span>{t(`track.events.${h.label}`, { defaultValue: h.label })}</span>
                      <span className="text-gray-500">{h.ts}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* لینک رهگیری شرکت حمل (اختیاری) */}
            {result.trackingLink && (
              <a
                href={result.trackingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm underline text-gray-800 hover:text-black"
              >
                {t("track.external_link")}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
