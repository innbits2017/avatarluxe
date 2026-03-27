"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { ArrowRight, Plus, CheckCircle, } from "lucide-react";
import { MenuBar } from "@/components/MenuBar";
import Footer from "@/components/footer";   
import { Button } from "@/components/ui/button";
import CTA from "@/components/Cta";
import { BackgroundBeams } from "@/components/ui/background-beams";


const SERVICE_CATEGORIES = [
    {
        id: "transplant",
        title: "Hair Transplant",
        description: "Surgical precision meets artistic vision.",
        treatments: [
            { 
                name: "Long Hair Transplant", 
                detail: "A technique where with the help of FUT, we take out the strip without Trimming off your hair completely, instead take out the strip with long hair and implant it as it is, ensuring patient's social life is not hampered and can return to social life soon after 4-5 days of the hair transplant.",
                benefits: [
                    "Stimulates hair follicles for natural hair growth",
                    "Improves scalp blood circulation",
                    "Strengthens thinning and weak hair",
                    "Promotes collagen and elastin production",
                    "Supports healthier scalp and hair density"
                ]
            },
            { name: "FUE", detail: "Individual hair follicles are carefully extracted from the donor area, typically the back or sides of the head, using a minimally invasive method. These follicles are then meticulously transplanted to the recipient area to create a fuller and more youthful hairline. Our team's / Hair Transplants Doctors in Bangalore attention to detail ensures that each follicle is placed at the correct angle and density, resulting in a seamlessly natural appearance." },
            { name: "Un-shaved FUE", detail: "If one is not keen on shaving off his scalp nor is willing to undergo FUT and still considering a hair transplant, then this is most ideal way to go about, this technique will help you achieve your hair restoration goal and also ensure to not hamper your social life." },
            { name: "Saffire Blade", detail: "Sapphire blade technology uses ultra-sharp blades made from sapphire crystals to create precise and tiny incisions during the hair transplant procedure. This advanced technique allows for better control, minimal tissue damage, and faster healing. The finer incisions also help achieve higher graft density and a more natural-looking hairline, ensuring optimal results for patients." },
            { name: "Direct Hair Transplant", detail: "Direct Hair Transplant (DHT) is an advanced technique where hair follicles are extracted and implanted directly into the recipient area using a specialized implantation tool. This method eliminates the need for creating prior channels, allowing precise control over the angle, depth, and direction of each hair follicle. The result is a natural appearance, improved graft survival rate, and quicker recovery time." }
        ],
        image: "/images/services/hair-transplant.webp"
    },
    {
        id: "control",
        title: "Hair Fall Control Treatment",
        description: "Hair fall is a common concern affecting both men and women. Our advanced hair fall control treatments in Bangalore focus on strengthening hair follicles, improving scalp health, and promoting natural hair regrowth using safe and non-surgical techniques.",
        treatments: [
            { 
            name: "Growth Factor Concentrate", 
            detail: "GFC (Growth Factor Concentrate) is an advanced hair growth treatment derived from your own blood. Activated platelets release concentrated growth factors that stimulate hair follicles, improve scalp health, and promote natural hair regrowth.", 
            benefits: [
                    "Stimulates hair follicles for natural hair growth",
                    "Improves scalp blood circulation",
                    "Strengthens thinning and weak hair",
                    "Promotes collagen and elastin production",
                    "Supports healthier scalp and hair density"
                ]
            },
            { 
            name: "Platelet rich plasma", 
            detail: "PRP (Platelet Rich Plasma) is a popular non-surgical hair loss treatment where platelet-rich plasma extracted from your blood is used to stimulate hair follicles and promote natural hair growth.",
            benefits: [
                    "Stimulates hair follicles for natural hair regrowth",
                    "Improves scalp blood circulation",
                    "Strengthens weak and thinning hair",
                    "Prolongs the hair growth (anagen) phase",
                    "Accelerates the transition from resting to growth phase",
                    "Promotes collagen and elastin production for healthier scalp and skin",
                ]
            },
            { 
                name: "Stem Cell Therapy", 
                detail: "Stem Cell Therapy is an advanced hair loss treatment that uses stem cells to repair and regenerate damaged hair follicles, helping stimulate natural hair growth and improve scalp health.",
                benefits: [
                    "Stimulates dormant hair follicles for natural hair regrowth",
                    "Helps repair and regenerate damaged hair follicles",
                    "Improves scalp health and follicle strength",
                    "Promotes thicker and stronger hair growth",
                    "Supports long-term hair restoration",
                    "Advanced non-surgical solution for hair thinning and hair loss",
                ]
            },
            { name: "Mesotherapy", 
              detail: "Mesotherapy is a minimally invasive hair loss treatment that delivers vitamins, minerals, and nutrients directly into the scalp to nourish hair follicles and promote natural hair growth.",
              benefits: [
                    "Nourishes and strengthens hair follicles",
                    "Improves blood circulation in the scalp",
                    "Reduces hair fall and hair thinning",
                    "Promotes healthier and thicker hair growth",
                    "Delivers essential nutrients directly to hair roots",
                    "Safe, non-surgical treatment with minimal downtime",
                ]
            },
            { 
                name: "Microneedling", 
                detail: "Microneedling is a minimally invasive skin rejuvenation and hair loss treatment that uses tiny micro-needles to stimulate collagen production, improve scalp circulation, and activate hair follicles for natural hair growth." ,
                benefits: [
                    "Stimulates natural hair growth and strengthens hair follicles",
                    "Boosts collagen production for healthier skin and scalp",
                    "Improves blood circulation in the scalp",
                    "Reduces acne scars, dark spots, wrinkles, and enlarged pores",
                    "Enhances overall skin texture and scalp health",
                    "Safe, non-surgical treatment with little to no downtime",
                ]
            },
        ],
        image: "/images/services/hairfall-control.webp"
    },
    {
        id: "cosmetic",
        title: "Cosmetic Restoration",
        description: "Instant non-surgical volume solutions.",
        treatments: [
            { 
                name: "French Lace", 
                detail: "French Lace Hair is a lightweight and breathable non-surgical hair replacement solution that provides a natural-looking hairline and comfortable daily wear.", 
                benefits:
                [
                    "Natural and undetectable hairline",
                    "Lightweight and breathable",
                    "Comfortable for everyday use",
                    "Easy to style and maintain"
                ]
            },
            { 
                name: "Hollywood Lace", 
                detail: "Hollywood Lace Hair is a premium hair replacement system with an ultra-thin lace base that creates a highly natural and invisible hairline.", 
                benefits:
                [
                    "Ultra-natural hairline",
                    "Lightweight and comfortable",
                    "Durable lace material",
                    "Allows flexible styling"
                ]
            },
            { name: "Afro Style", 
              detail: "Afro Hair solutions are designed for individuals with curly and textured hair, offering natural-looking hair replacement or enhancement.",
              benefits:
              [
                    "Designed for curly hair texture",
                    "Natural curl pattern",
                    "Customizable density",
                    "Comfortable to wear"
              ]
            },
            { name: "Hair Extension", 
              detail: "Hair Extensions are a popular hair enhancement solution used to add length, volume, and thickness to natural hair.",
              benefits:
              [
                    "Adds instant length and volume",
                    "Improves hair thickness",
                    "Natural-looking results",
                    "Easy to style"
              ]
            }
        ],
        image: "/images/services/hair-extension.webp"
    },
    {
        id: "synthetic",
        title: "Synthetic Transplant",
        description: "Immediate density using artificial fibers.",
        treatments: [
            { 
                name: "Bio-fibre", 
                detail: "Bio-Fibre Hair Implant is a non-surgical hair restoration solution where biocompatible synthetic hair fibers are implanted into the scalp to provide instant hair density. It is ideal for individuals with severe hair loss or limited donor hair for hair transplant.",
                benefits:
                [
                    "Provides immediate hair density and coverage",
                    "Suitable for advanced hair loss cases",
                    "Ideal for people with low donor hair",
                    "Natural-looking and customizable results",
                    "Minimally invasive procedure",
                ] 
            },
            { 
                name: "Nido", 
                detail: "Nido Hair System is a non-surgical hair replacement solution that uses a customized hair patch to restore hair volume and create a natural-looking hairline. It is designed to match your natural hair texture, color, and density.",
                benefits: 
                [
                    "Instant solution for hair loss and baldness",
                    "Natural-looking hairline and density",
                    "Comfortable and lightweight to wear",
                    "No surgery required",
                    "Customizable to match natural hair style and color"
                ]
            }
        ],
        image: "/images/services/hair-patch.webp"
    }
];

const stats = [
    { label: "Procedures", value: "10k+" },
    { label: "Success Rate", value: "98%" },
    { label: "Global Awards", value: "15" },
    { label: "Years Exp", value: "20+" }
];

const videos = [
    { id: "-9rtUhR1pRs", title: "GFC for hairloss", name: "Bye Bye Hairloss" },
    { id: "Giig67nMzVU", title: "Synthetic Hair Transplant", name: "Biofibre" },
    { id: "OPiQa5uBUr8", title: "Hair Transplant Process", name: "Transplant" },
    { id: "gsLLV1qmOYY", title: "Hydra Facial", name: "Cleaner Face" },
    { id: "wAshxi4ghfs", title: "Skin Brightening", name: "Glutathione" },
    { id: "k2EHaGBGWjg", title: "Clinic Tour", name: "Avatar Luxe" },
];

export default function HomePage() {

    const containerRef = useRef(null)

    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(null)

    const openYouTube = (id) => {
        setActive(id)
        setOpen(true)
        document.body.style.overflow = "hidden"
    }

    const closeYouTube = () => {
        setOpen(false)
        setActive(null)
        document.body.style.overflow = ""
    }

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const scaleX = useSpring(scrollYProgress)

    return (

        <div ref={containerRef} className="bg-black text-white min-h-screen">

            <MenuBar />

            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
                style={{ scaleX }}
            />

            <main>
                {/* HERO */}

                     <section className="relative min-h-[92vh] w-full">
                
                        <div className="absolute inset-0 bg-black/70" />
                
                        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16">
                
                          <div className="inline-flex items-center gap-2 py-2 bg-white/10 backdrop-blur-sm px-4 rounded-full mb-2 sm:mb-2">
                            <CheckCircle className="size-4" style={{ color: '#D4AF37' }} />
                            <span className="text-xs sm:text-sm text-white/80">Hair Treatments</span>
                          </div>
                
                          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold">
                            Redefining Confidence Through Precision <span style={{color:"#D4AF37"}}>Hair Excellence</span>
                          </h1>
                
                          <p className="mt-7 max-w-3xl text-zinc-300">
                            We are a modern restoration studio where medical mastery, aesthetic artistry,
                            and personalized care come together to create transformative outcomes.
                          </p>
                
                          <div className="mt-10 flex flex-wrap gap-4">
                
                            <Button
                              className="rounded-none border border-white/30 bg-white px-7 py-6 text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-zinc-200"
                              onClick={() => scrollToSection("about-story-section")}
                            >
                              Discover Our Story
                            </Button>
                
                            <Button
                              variant="outline"
                              className="rounded-none border-white/35 bg-transparent px-7 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black"
                              onClick={() => scrollToSection("team-section")}
                            >
                              Meet the Team
                            </Button>
                
                          </div>
                          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-5 border-t border-white/10 pt-7">

                            {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-3xl font-semibold">{stat.value}</p>
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                                {stat.label}
                                </p>
                            </div>
                            ))}

                        </div>
                
                        </div>
                        <BackgroundBeams />
                      </section>

                {/* SERVICES */}

                <section>

                    {SERVICE_CATEGORIES.map((category, index) => (
                        <ServiceBlock
                            key={category.id}
                            category={category}
                            index={index}
                        />
                    ))}

                </section>

                {/* VIDEO SECTION */}

                <section className="bg-black text-white py-16">

                    <h2 className="text-4xl text-center mb-10">Hear Them Out</h2>

                    <div className="flex gap-6 overflow-x-auto px-6">

                        {videos.map(v => (
                            <div
                                key={v.id}
                                className="w-[320px] flex-shrink-0 cursor-pointer"
                                onClick={() => openYouTube(v.id)}
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                                    className="rounded-lg"
                                />

                                <h4 className="mt-3">{v.name}</h4>

                            </div>
                        ))}

                    </div>

                </section>

                {/* YOUTUBE MODAL */}

                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center ${open ? '' : 'hidden'}`}
                >

                    <div
                        onClick={closeYouTube}
                        className="absolute inset-0 bg-black/80"
                    />

                    <div className="relative w-full max-w-3xl">

                        <div className="aspect-video">

                            {active && (

                                <iframe
                                    src={`https://www.youtube.com/embed/${active}?autoplay=1`}
                                    allow="autoplay"
                                    allowFullScreen
                                    className="w-full h-full"
                                />

                            )}

                        </div>

                        <button
                            onClick={closeYouTube}
                            className="absolute top-4 right-4 bg-black text-white p-2 rounded-full"
                        >
                            ✕
                        </button>

                    </div>

                </div>

                <CTA />

            </main>

            <Footer />

        </div>

    )

}

function ServiceBlock({ category, index }) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
     const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    };

    return (

        <div ref={ref} className="border-b border-white/10">

            <div className="grid lg:grid-cols-12 min-h-[600px]">

                <div className="lg:col-span-4 p-10 border-r border-white/10 flex flex-col justify-between">

                    <div>

                        <span className="text-[#D4AF37] text-sm mb-4 block">
                            0{index + 1}
                        </span>

                        <h3 className="text-5xl mb-6 max-w-3xl text-zinc-300">
                            {category.title}
                        </h3>

                        <p className="text-gray-300 max-w-md">
                            {category.description}
                        </p>

                    </div>

                    <Link
                        href="/services"
                        className="flex items-center gap-2 uppercase tracking-widest text-sm"
                    >

                        <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>

                        Explore Details

                        <ArrowRight size={16} />

                    </Link>

                </div>

                <div className="lg:col-span-5 p-10 border-r border-white/10 flex items-center">

                  
 <div className="space-y-4">
      {category.treatments.map((t, index) => (
        <div
          key={index}
          className=" rounded-lg overflow-hidden mb-0"
        >
          {/* HEADER */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-4 group text-left border-b border-white/10 mb-5"
          >
            <div className="flex items-center gap-4">
              <span
                className={`w-2 h-2 rounded-full bg-[#D4AF37] transition ${
                  activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />

              <h4 className="text-[18px]">{t.name}</h4>
            </div>

            {/* ICON */}
            <span
              className={`transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {/* CONTENT */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4 pr-4">
              <p className="ml-6 border-l border-white/10 pl-6 max-w-3xl text-zinc-300">
                {t.detail}
              </p>

              {t.benefits && (
                <ul className="ml-6 pl-6 mt-3 space-y-1 text-zinc-300">
                  {t.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D4AF37]">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>


                </div>

                <div className="lg:col-span-3 relative">

                    <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute bottom-0 right-0 w-12 h-12 border-l border-t border-white/20 bg-black flex items-center justify-center">

                        <Plus size={16} />

                    </div>

                </div>

            </div>

        </div>

    )

}