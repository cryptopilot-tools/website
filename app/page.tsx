"use client";

import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";
import { LINKS, BEEHIIV_FORM_ID, PROVIDERS_NOW, PROVIDERS_SOON } from "@/lib/constants";

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
      <header className="sticky top-0 z-50 bg-[#1C1B18] border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-[#F5F4EF]">CryptoPilot</span>
          <div className="flex gap-1">
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              aria-label="Switch to English"
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                lang === "en"
                  ? "bg-[#22C55E] text-[#1C1B18]"
                  : "text-[#9B998F] hover:text-[#F5F4EF]"
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
                  ? "bg-[#22C55E] text-[#1C1B18]"
                  : "text-[#9B998F] hover:text-[#F5F4EF]"
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </header>

      <main className="bg-[#1C1B18] text-[#F5F4EF]">

      {/* Hero */}
      <section className="py-24 bg-[#252420]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight mb-6 text-[#F5F4EF]">
            {t.hero.title}
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: "#B8B6AC" }}>
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="px-8 py-3 rounded-lg bg-[#22C55E] text-[#1C1B18] font-semibold hover:bg-[#16A34A] transition-colors"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-semibold transition-colors text-[#4ADE80]"
              style={{ border: "1px solid #22C55E" }}
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* What Is */}
      <section className="py-20 bg-[#1C1B18]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-[#F5F4EF]">{t.whatIs.title}</h2>
          <p className="text-lg max-w-3xl mb-4" style={{ color: "#B8B6AC" }}>{t.whatIs.p1}</p>
          <p className="text-lg max-w-3xl" style={{ color: "#B8B6AC" }}>{t.whatIs.p2}</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#252420]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F5F4EF]">
            {t.howItWorks.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1C1B18] rounded-xl p-8" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="text-4xl font-bold mb-4 block" style={{ color: "#4ADE80" }}>01</span>
              <h3 className="text-xl font-semibold mb-3 text-[#F5F4EF]">{t.howItWorks.step1Title}</h3>
              <p style={{ color: "#B8B6AC" }}>{t.howItWorks.step1Body}</p>
            </div>
            <div className="bg-[#1C1B18] rounded-xl p-8" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="text-4xl font-bold mb-4 block" style={{ color: "#4ADE80" }}>02</span>
              <h3 className="text-xl font-semibold mb-3 text-[#F5F4EF]">{t.howItWorks.step2Title}</h3>
              <p style={{ color: "#B8B6AC" }}>{t.howItWorks.step2Body}</p>
            </div>
            <div className="bg-[#1C1B18] rounded-xl p-8" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="text-4xl font-bold mb-4 block" style={{ color: "#4ADE80" }}>03</span>
              <h3 className="text-xl font-semibold mb-3 text-[#F5F4EF]">{t.howItWorks.step3Title}</h3>
              <p style={{ color: "#B8B6AC" }}>{t.howItWorks.step3Body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-20 bg-[#1C1B18]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#F5F4EF]">{t.providers.title}</h2>

          {/* Available now */}
          <div className="mb-8">
            <span
              className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium"
              style={{ background: "rgba(34,197,94,0.15)", color: "#86EFAC" }}
            >
              {t.providers.nowLabel}
            </span>
            <div className="flex flex-wrap justify-center gap-[10px]">
              {PROVIDERS_NOW.map((name) => (
                <span
                  key={name}
                  className="font-medium"
                  style={{
                    background: "rgba(34,197,94,0.12)",
                    color: "#4ADE80",
                    border: "1px solid rgba(34,197,94,0.4)",
                    padding: "8px 18px",
                    borderRadius: "8px",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Coming soon */}
          <div className="mb-8">
            <span
              className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium"
              style={{ background: "rgba(255,255,255,0.07)", color: "#9B998F" }}
            >
              {t.providers.soonLabel}
            </span>
            <div className="flex flex-wrap justify-center gap-[10px]">
              {PROVIDERS_SOON.map((name) => (
                <span
                  key={name}
                  className="font-medium"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    color: "#C8C6BC",
                    border: "0.5px solid rgba(255,255,255,0.12)",
                    padding: "7px 16px",
                    borderRadius: "8px",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <p className="text-base max-w-2xl mx-auto mb-3" style={{ color: "#9B998F" }}>
            {t.providers.region}
          </p>
          <p
            className="mx-auto text-center"
            style={{ color: "#75736B", fontSize: "12px", maxWidth: "430px" }}
          >
            {t.providers.trademark}
          </p>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-20 bg-[#252420]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-[#F5F4EF]">{t.openSource.title}</h2>
          <p className="text-lg max-w-3xl mb-4" style={{ color: "#B8B6AC" }}>
            {t.openSource.p1}
          </p>
          <p className="text-lg max-w-3xl mb-10" style={{ color: "#B8B6AC" }}>
            {t.openSource.p2}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-[#22C55E] text-[#1C1B18] font-semibold hover:bg-[#16A34A] transition-colors text-center"
            >
              {t.openSource.ctaGithub}
            </a>
            <a
              href="#waitlist"
              className="px-8 py-3 rounded-lg font-semibold transition-colors text-center text-[#4ADE80]"
              style={{ border: "1px solid #22C55E" }}
            >
              {t.openSource.ctaWaitlist}
            </a>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 bg-[#1C1B18]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#F5F4EF]">{t.waitlist.title}</h2>
          <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "#B8B6AC" }}>
            {t.waitlist.body}
          </p>
          <div
            className="mx-auto"
            style={{
              background: "#252420",
              padding: "24px",
              borderRadius: "12px",
              border: "0.5px solid rgba(255,255,255,0.1)",
              maxWidth: "480px",
              minHeight: 320,
            }}
          >
            <div id="beehiiv-form-container" />
          </div>
        </div>
      </section>

      </main>

      <footer className="py-12 bg-[#1C1B18] text-[#F5F4EF]" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-[#F5F4EF]">CryptoPilot</span>
            <p className="text-sm mt-1" style={{ color: "#9B998F" }}>{t.footer.tagline}</p>
            <p className="text-xs mt-1 max-w-sm" style={{ color: "#75736B" }}>{t.footer.disclaimer}</p>
            <p className="text-xs mt-1" style={{ color: "#75736B" }}>{t.footer.copyright}</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#F5F4EF]"
              style={{ color: "#4ADE80" }}
            >
              GitHub
            </a>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#F5F4EF]"
              style={{ color: "#4ADE80" }}
            >
              Discord
            </a>
            <a
              href={LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#F5F4EF]"
              style={{ color: "#4ADE80" }}
            >
              X
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
