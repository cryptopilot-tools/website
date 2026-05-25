"use client";
import { useEffect } from "react";
import { useLanguage } from "@/app/language-context";
import { translations } from "@/lib/translations";
import { BEEHIIV_FORM_ID } from "@/lib/constants";

export default function WaitlistPage() {
  const { lang } = useLanguage();
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
    <main className="flex-1 flex flex-col bg-[#1C1B18] text-[#F5F4EF]">

      {/* Section 1 — title + subtitle, dark */}
      <section className="py-12 bg-[#1C1B18]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#F5F4EF]">
            {t.waitlist.title}
          </h2>
          <p
            className="text-lg max-w-xl mx-auto mt-4"
            style={{ color: "#B8B6AC" }}
          >
            {t.waitlist.body}
          </p>
        </div>
      </section>

      {/* Section 2 — form container, lighter, fills remaining viewport */}
      <section className="flex-1 py-12 bg-[#252420]">
        <div className="max-w-5xl mx-auto px-6">
          <div
            style={{
              background: "#1C1B18",
              padding: "24px",
              borderRadius: "12px",
              border: "0.5px solid rgba(255,255,255,0.1)",
              minHeight: 320,
            }}
          >
            <div id="beehiiv-form-container" />
          </div>
        </div>
      </section>

    </main>
  );
}
