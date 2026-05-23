"use client";

import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";
import { LINKS, BEEHIIV_FORM_ID } from "@/lib/constants";

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = translations[lang];

  useEffect(() => {
    const containerId = "beehiiv-form-container";
    const container = document.getElementById(containerId);
    if (!container) return;
    if (container.querySelector("script[data-beehiiv-form]")) return;
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    script.async = true;
    script.setAttribute("data-beehiiv-form", BEEHIIV_FORM_ID);
    container.appendChild(script);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">CryptoPilot</span>
          <div className="flex gap-1">
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              aria-label="Switch to English"
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                lang === "en"
                  ? "bg-[#2563eb] text-white"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              aria-pressed={lang === "es"}
              aria-label="Cambiar a español"
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                lang === "es"
                  ? "bg-[#2563eb] text-white"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </header>

      <main className="bg-white text-[#1a1a1a]">

      {/* Hero */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight mb-6 whitespace-pre-line">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="px-8 py-3 rounded-lg bg-[#2563eb] text-white font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:border-gray-500 transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* What is */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">{t.whatIs.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-4">{t.whatIs.p1}</p>
          <p className="text-lg text-gray-600 max-w-3xl">{t.whatIs.p2}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t.howItWorks.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <span className="text-4xl font-bold text-[#2563eb] mb-4 block">01</span>
              <h3 className="text-xl font-semibold mb-3">{t.howItWorks.step1Title}</h3>
              <p className="text-gray-600">{t.howItWorks.step1Body}</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <span className="text-4xl font-bold text-[#2563eb] mb-4 block">02</span>
              <h3 className="text-xl font-semibold mb-3">{t.howItWorks.step2Title}</h3>
              <p className="text-gray-600">{t.howItWorks.step2Body}</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <span className="text-4xl font-bold text-[#2563eb] mb-4 block">03</span>
              <h3 className="text-xl font-semibold mb-3">{t.howItWorks.step3Title}</h3>
              <p className="text-gray-600">{t.howItWorks.step3Body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">{t.providers.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-2">{t.providers.now}</p>
          <p className="text-lg text-gray-600 max-w-3xl mb-2">{t.providers.soon}</p>
          <p className="text-lg text-gray-600 max-w-3xl">{t.providers.region}</p>
        </div>
      </section>

      {/* Open source */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">{t.openSource.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-4">
            {t.openSource.p1}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mb-10">
            {t.openSource.p2}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-[#2563eb] text-white font-semibold hover:bg-[#1d4ed8] transition-colors text-center"
            >
              {t.openSource.ctaGithub}
            </a>
            <a
              href="#waitlist"
              className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:border-gray-500 transition-colors text-center"
            >
              {t.openSource.ctaWaitlist}
            </a>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.waitlist.title}</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
            {t.waitlist.body}
          </p>
          <div
            id="beehiiv-form-container"
            style={{ minHeight: 320 }}
            className="mx-auto max-w-lg"
          />
        </div>
      </section>

      </main>

      <footer className="py-12 border-t border-gray-100 bg-white text-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold">CryptoPilot</span>
            <p className="text-sm text-gray-500 mt-1">{t.footer.tagline}</p>
            <p className="text-xs text-gray-400 mt-1 max-w-sm">{t.footer.disclaimer}</p>
            <p className="text-xs text-gray-400 mt-1">{t.footer.copyright}</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
            >
              GitHub
            </a>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
            >
              Discord
            </a>
            <a
              href={LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
