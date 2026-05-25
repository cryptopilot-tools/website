"use client";
import Link from "next/link";
import { useLanguage } from "@/app/language-context";
import { translations } from "@/lib/translations";
import { LINKS } from "@/lib/constants";

export default function WhatIsPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <main className="flex-1 flex flex-col bg-[#1C1B18] text-[#F5F4EF]">
      {/* What Is */}
      <section className="py-12 bg-[#1C1B18]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
              <h2 className="text-3xl font-bold text-[#F5F4EF]">
                {t.whatIs.title}
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:min-h-[240px]">
              <p className="text-lg" style={{ color: "#B8B6AC" }}>
                {t.whatIs.p1}
              </p>
              <p className="text-lg" style={{ color: "#B8B6AC" }}>
                {t.whatIs.p2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="flex-1 py-12 bg-[#252420]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-[#F5F4EF]">
            {t.openSource.title}
          </h2>
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
              className="px-8 py-3 rounded-lg bg-[#22C55E] text-[#1C1B18] text-base font-semibold hover:bg-[#16A34A] transition-colors text-center"
            >
              {t.openSource.ctaGithub}
            </a>
            <Link
              href="/waitlist"
              className="px-8 py-3 rounded-lg text-base font-semibold transition-colors text-center text-[#4ADE80]"
              style={{ border: "1px solid #22C55E" }}
            >
              {t.openSource.ctaWaitlist}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
