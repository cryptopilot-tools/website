"use client";
import { useLanguage } from "@/app/language-context";
import { translations } from "@/lib/translations";
import { LINKS } from "@/lib/constants";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer
      className="py-12 bg-[#1C1B18] text-[#F5F4EF]"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-[#F5F4EF]">CryptoPilot</span>
          <p className="text-sm mt-1" style={{ color: "#9B998F" }}>
            {t.footer.tagline}
          </p>
          <p className="text-xs mt-1 max-w-sm" style={{ color: "#75736B" }}>
            {t.footer.disclaimer}
          </p>
          <p className="text-xs mt-1" style={{ color: "#75736B" }}>
            {t.footer.copyright}
          </p>
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
  );
}
