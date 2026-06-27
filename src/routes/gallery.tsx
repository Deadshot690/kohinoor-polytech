import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { lazy, Suspense } from "react";

const GranuleSphere = lazy(() => import("@/components/three/GranuleSphere"));

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Kohinoor Polytech" },
      { name: "description", content: "Inside our facility, products, machinery and team." },
      { property: "og:title", content: "Gallery — Kohinoor Polytech" },
      { property: "og:description", content: "Inside our facility, products and team." },
    ],
  }),
  component: Gallery,
});

const tiles = [
  { t: "Factory floor", c: "from-brand-blue/50 to-brand-blue-2/30", h: "h-72", isInteractive: true, color: "#2563EB" },
  { t: "Granule close-up · Blue", c: "from-brand-cyan/40 to-brand-blue/30", h: "h-56", isInteractive: true, color: "#06B6D4" },
  { t: "Twin-screw extrusion line", c: "from-brand-green/40 to-brand-cyan/30", h: "h-80", isInteractive: true, color: "#22C55E" },
  { t: "Quality lab", c: "from-brand-blue-2/40 to-brand-green/30", h: "h-60", isInteractive: true, color: "#06B6D4" },
  { t: "Granule close-up · Red", c: "from-red-500/40 to-rose-600/30", h: "h-64", isInteractive: true, color: "#EF4444" },
  { t: "Sorting station", c: "from-brand-green/40 to-brand-blue/30", h: "h-72", isInteractive: true, color: "#22C55E" },
  { t: "Packing line", c: "from-brand-blue/40 to-brand-cyan/30", h: "h-64", isInteractive: true, color: "#2563EB" },
  { t: "Granule close-up · Yellow", c: "from-yellow-400/40 to-amber-500/30", h: "h-68", isInteractive: true, color: "#EAB308" },
  { t: "Drone view · Plant", c: "from-brand-cyan/40 to-brand-blue-2/30", h: "h-80", isInteractive: true, color: "#06B6D4" },
  { t: "Team at work", c: "from-brand-blue-2/40 to-brand-green/30", h: "h-56", isInteractive: true, color: "#22C55E" },
  { t: "Granule close-up · Green", c: "from-brand-green/50 to-brand-cyan/30", h: "h-72", isInteractive: true, color: "#22C55E" },
];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Inside <span className="text-gradient">Kohinoor</span>.</>}
        sub="Factory floor, machinery and the polymers that power industrial manufacturing."
      />
      <Section>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {tiles.map((t, i) => (
            <div key={i} className={`mb-5 break-inside-avoid rounded-2xl overflow-hidden glass group`}>
              <div className={`relative ${t.h} bg-gradient-to-br ${t.c} grid-bg flex flex-col justify-end`}>
                {t.isInteractive && (
                  <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Suspense fallback={null}>
                      <GranuleSphere color={t.color} />
                    </Suspense>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <div className="text-sm font-medium">{t.t}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
