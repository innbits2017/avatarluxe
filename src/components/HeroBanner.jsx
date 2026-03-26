"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HoverColumns() {
  const [active, setActive] = useState(null);

  const items = [
    {
      id: 0,
      img: "images/services/synthetic-hair-implants.webp",
    },
    {
      id: 1,
      img: "images/home/surgical-treatment-banner-new.webp",
    },
    {
      id: 2,
      img: "images/home/Laser-skin-treatment-AvatarLuxe.webp",
    },
  ];

  const content = [
  {
    id: 0,
    subtitle: "Advanced Hair Transplants",
    title: "Hair Treatments",
    desc: "Restoring confidence with cutting-edge synthetic hair solutions and natural aesthetics.",
    cta: "EXPLORE TREATMENTS",
  },
  {
    id: 1,
    subtitle: "Advanced Breast Augmentation",
    title: "Surgical Treatments",
    desc: "Precision-led procedures with advanced technology for safe, effective, and lasting aesthetic results.",
    cta: "EXPLORE TREATMENTS",
  },
  {
    id: 2,
    subtitle: "Advanced Laser Treatment ",
    title: "Skin Treatments",
    desc: "Non-invasive laser therapies to rejuvenate skin, enhance glow, and restore youthful radiance.",
    cta: "EXPLORE TREATMENTS",
  },
];

  return (
    <section className="flex h-[600px] w-full overflow-hidden">
      {items.map((item, i) => {
        const isActive = active === i;

        return (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={`
                relative cursor-pointer overflow-hidden
                transition-[flex-basis] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                flex-shrink-0 flex-grow-0
                ${
                    active === null
                    ? "basis-1/3"
                    : isActive
                        ? "basis-[80%]"
                        : "basis-[10%]"
                }
                `}
          >
            {/* IMAGE (NO SCALE CHANGE) */}
            <img
              src={item.img}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 
            bg-gradient-to-t 
            from-black/100 via-black/50 to-transparent">
            </div>

            {/* CONTENT (ONLY ACTIVE) */}
            <div className={`
              absolute bottom-10 left-6 z-10 max-w-sm
              transition-all duration-500
                ${
                    active === null
                    ? "opacity-100 translate-y-0"
                    : isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6 pointer-events-none"
                }
                `}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-2 sm:mb-2">
                <CheckCircle className="size-4" style={{ color: '#D4AF37' }} />
                    <span className="text-xs sm:text-sm text-white/80">{content[i].subtitle}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {content[i].title}
              </h3>
              <p className="text-zinc-200 mb-4">
                {content[i].desc}
              </p>
              <Button
                variant="outline"
                className="rounded-none border-b-[#D4AF37]/80 px-3 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black"
                onClick={() => scrollToSection("team-section")}
              >
                {content[i].cta}
              </Button>
            </div>
          </div>
        );
      })}
    </section>
  );
}