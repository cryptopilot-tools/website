"use client";
import { useLanguage } from "@/app/language-context";
import { translations } from "@/lib/translations";
import { PROVIDERS_NOW, PROVIDERS_SOON } from "@/lib/constants";

export default function ProvidersPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <main className="flex-1 flex flex-col bg-[#1C1B18] text-[#F5F4EF]">

      {/* Section 1 — title + available now, dark */}
      <section className="py-12 bg-[#1C1B18]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#F5F4EF]">
            {t.providers.title}
          </h2>
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
                className="text-sm font-medium"
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
      </section>

      {/* Section 2 — coming soon + rest, lighter, fills remaining viewport */}
      <section className="flex-1 py-12 bg-[#252420]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span
            className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium"
            style={{ background: "rgba(255,255,255,0.07)", color: "#9B998F" }}
          >
            {t.providers.soonLabel}
          </span>
          <div className="flex flex-wrap justify-center gap-[10px] mb-8">
            {PROVIDERS_SOON.map((name) => (
              <span
                key={name}
                className="text-sm font-medium"
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

          <p
            className="text-base max-w-2xl mx-auto mb-3"
            style={{ color: "#9B998F" }}
          >
            {t.providers.region}
          </p>
          <p
            className="text-xs mx-auto text-center"
            style={{ color: "#75736B", maxWidth: "430px" }}
          >
            {t.providers.trademark}
          </p>
        </div>
      </section>

    </main>
  );
}
