"use client";
import Link from "next/link";
import { useLanguage } from "@/app/language-context";
import { translations } from "@/lib/translations";
import { LINKS } from "@/lib/constants";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <main className="bg-[#1C1B18] text-[#F5F4EF]">
      {/* Hero */}
      <section className="py-16 bg-[#252420]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight mb-6 text-[#F5F4EF]">
            {t.hero.title}
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto mb-10"
            style={{ color: "#B8B6AC" }}
          >
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/waitlist"
              className="px-8 py-3 rounded-lg bg-[#22C55E] text-[#1C1B18] font-semibold hover:bg-[#16A34A] transition-colors"
            >
              {t.hero.ctaPrimary}
            </Link>
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
    </main>
  );
}
