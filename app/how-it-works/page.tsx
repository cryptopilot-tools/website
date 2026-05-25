"use client";
import { useLanguage } from "@/app/language-context";
import { translations } from "@/lib/translations";

export default function HowItWorksPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <main className="flex-1 flex flex-col bg-[#1C1B18] text-[#F5F4EF]">

      {/* Sección 1 — título solo, fondo oscuro */}
      <section className="py-12 bg-[#1C1B18]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#F5F4EF]">
            {t.howItWorks.title}
          </h2>
        </div>
      </section>

      {/* Sección 2 — 3 cards, fondo claro, llena el resto del viewport */}
      <section className="flex-1 py-12 bg-[#252420]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-[#1C1B18] rounded-xl p-8"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span
                className="text-4xl font-bold mb-4 block"
                style={{ color: "#4ADE80" }}
              >
                01
              </span>
              <h3 className="text-xl font-semibold mb-3 text-[#F5F4EF]">
                {t.howItWorks.step1Title}
              </h3>
              <p className="text-base" style={{ color: "#B8B6AC" }}>{t.howItWorks.step1Body}</p>
            </div>
            <div
              className="bg-[#1C1B18] rounded-xl p-8"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span
                className="text-4xl font-bold mb-4 block"
                style={{ color: "#4ADE80" }}
              >
                02
              </span>
              <h3 className="text-xl font-semibold mb-3 text-[#F5F4EF]">
                {t.howItWorks.step2Title}
              </h3>
              <p className="text-base" style={{ color: "#B8B6AC" }}>{t.howItWorks.step2Body}</p>
            </div>
            <div
              className="bg-[#1C1B18] rounded-xl p-8"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span
                className="text-4xl font-bold mb-4 block"
                style={{ color: "#4ADE80" }}
              >
                03
              </span>
              <h3 className="text-xl font-semibold mb-3 text-[#F5F4EF]">
                {t.howItWorks.step3Title}
              </h3>
              <p className="text-base" style={{ color: "#B8B6AC" }}>{t.howItWorks.step3Body}</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
