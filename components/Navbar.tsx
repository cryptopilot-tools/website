"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/app/language-context";
import { NAV } from "@/lib/constants";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)]"
      style={{ background: "rgba(28,27,24,0.92)" }}
    >
      {/* Barra principal */}
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#F5F4EF]"
        >
          CryptoPilot
        </Link>

        {/* Grupo desktop (oculto en móvil) */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/what-is"
            className={`text-sm transition-colors ${
              pathname === "/what-is"
                ? "text-[#4ADE80]"
                : "text-[#9B998F] hover:text-[#F5F4EF]"
            }`}
          >
            {NAV[lang].what}
          </Link>
          <Link
            href="/how-it-works"
            className={`text-sm transition-colors ${
              pathname === "/how-it-works"
                ? "text-[#4ADE80]"
                : "text-[#9B998F] hover:text-[#F5F4EF]"
            }`}
          >
            {NAV[lang].how}
          </Link>
          <Link
            href="/providers"
            className={`text-sm transition-colors ${
              pathname === "/providers"
                ? "text-[#4ADE80]"
                : "text-[#9B998F] hover:text-[#F5F4EF]"
            }`}
          >
            {NAV[lang].providers}
          </Link>

          {/* Botón Join — desktop (ANTES del toggle) */}
          <Link
            href="/waitlist"
            className="px-4 py-2 rounded-lg bg-[#22C55E] text-[#1C1B18] text-sm font-semibold hover:bg-[#16A34A] transition-colors"
          >
            {NAV[lang].joinWaitlist}
          </Link>

          {/* Toggle EN/ES — desktop (DESPUÉS del Join) */}
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
        </nav>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden text-[#F5F4EF] text-2xl leading-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Panel desplegable móvil — en flujo normal (NO fixed/absolute) */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-[rgba(255,255,255,0.08)]"
          style={{ background: "#252420" }}
        >
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="/what-is"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#9B998F] hover:text-[#F5F4EF] transition-colors"
            >
              {NAV[lang].what}
            </Link>
            <Link
              href="/how-it-works"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#9B998F] hover:text-[#F5F4EF] transition-colors"
            >
              {NAV[lang].how}
            </Link>
            <Link
              href="/providers"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#9B998F] hover:text-[#F5F4EF] transition-colors"
            >
              {NAV[lang].providers}
            </Link>

            {/* Toggle EN/ES — móvil */}
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

            {/* Botón Join — móvil */}
            <Link
              href="/waitlist"
              onClick={() => setMenuOpen(false)}
              className="inline-block text-center px-4 py-2 rounded-lg bg-[#22C55E] text-[#1C1B18] text-sm font-semibold hover:bg-[#16A34A] transition-colors"
            >
              {NAV[lang].joinWaitlist}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
