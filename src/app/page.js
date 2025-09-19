'use client';
import { MenuBar } from '@/components/MenuBar';
import { easeIn, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomCursor from '@/components/CustomCursor';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Button } from '@/components/ui/button';
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import HorizontalScrollCarousel from '@/components/horizontalScrollSection';
import Image from 'next/image';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import Footer from '@/components/footer';
import { BackgroundBeamsDemo } from '@/components/BackgroundBeamsDemo';
import { BackgroundBeams } from "../components/ui/background-beams";
import TestimonialSection from "../components/TestimonialSection";

export default function Home() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.animate(
        [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
        {
          duration: 15000,
          iterations: Infinity,
          easing: "linear",
        }
      );
    }
  }, []);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const letterSpacing = useTransform(heroScroll, [0, 1], ['0.50em', '0.30em']);

  const { scrollYProgress: videoScroll } = useScroll({
    target: videoRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(videoScroll, [0, 1], [0, 2]);
  const radius = useTransform(videoScroll, [0, 1], ['100%', '0%']);

  const videos = [
    {
      id: '-9rtUhR1pRs',
      title: 'GFC for hairloss at Avatarluxe | PRP',
      name: 'Bye Bye Hairloss',
      creds: 'MBBS, MS, MCh — Plastic Surgery',
    },
    {
      id: 'Giig67nMzVU',
      title: 'Synthetic Hair Transplant in Bangalore',
      name: 'Biofibre',
      creds: 'MBBS, DNB — Dermatology',
    },
    {
      id: 'OPiQa5uBUr8',
      title: 'Hair Transplant Process — Walkthrough',
      name: 'Transplant',
      creds: 'MD — Hair Restoration',
    },
    {
      id: 'gsLLV1qmOYY',
      title: 'Hydra Facial',
      name: 'Cleaner & Brighter Face',
      creds: 'Cosmetic Specialist',
    },
    {
      id: 'wAshxi4ghfs',
      title: 'Skin Brightrning',
      name: 'Skin Brightening',
      creds: 'Glutathione Drip',
    },
    {
      id: 'k2EHaGBGWjg',
      title: 'Why choose Avatarluxe? Clinic Tour',
      name: 'Skin Brightening',
      creds: 'QSwitch Laser Toning',
    },
  ];

  const [open, setOpen] = useState(false); // used for YouTube modal
  const [active, setActive] = useState(null); // active video id for modal

  // Hero local video playing state
  const [heroPlaying, setHeroPlaying] = useState(false);

  // Open YouTube modal (called when clicking carousel card)
  const openYouTube = (videoId) => {
    setActive(videoId);
    setOpen(true);
    // prevent body scroll while modal open
    document.body.style.overflow = 'hidden';
  };

  const closeYouTube = () => {
    setOpen(false);
    setActive(null);
    document.body.style.overflow = '';
  };

  // Play/pause the hero local video on click
  const toggleHeroPlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      // unmute and play on user interaction
      vid.muted = false;
      vid.play().catch((err) => {
        // fallback: show console error but keep UI consistent
        console.warn('Hero video play failed:', err);
      });
      setHeroPlaying(true);
    } else {
      vid.pause();
      setHeroPlaying(false);
    }
  };

  const serviceItems = [
    {
      id: 1,
      name: 'Hair Treatment',
      image: '/images/services/0000_Hair-website.jpg',
    },
    {
      id: 2,
      name: 'Skin Treatment',
      image: '/images/services/0001_Skin-website-.jpg',
    },
    {
      id: 3,
      name: 'Laser Treatment',
      image: '/images/services/0003_Laser_website.jpg',
    },
    {
      id: 4,
      name: 'Plastic Surgery',
      image: '/images/services/0002_Plastic_surgery_website.jpg',
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <MenuBar />

      <section
        ref={heroRef}
        className="w-full min-h-screen flex text-center justify-center items-center bg-black relative"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative px-4 -mt-[50px]"
          style={{ letterSpacing: "0.2em" }}
        >
          AVATARLUXE
        </motion.h1>
        <BackgroundBeams />
      </section>

      <CustomCursor />

      <section className="bg-black text-white">
        {/* Top headline */}
        <div className="px-6 lg:px-24 pt-16">
          <h2 className="mx-auto max-w-6xl text-5xl md:text-5xl lg:text-5xl font-light leading-tight">
            Redefine your beauty with our accomplished Plastic Surgeons, Aesthetic physicians & Skin specialists at Avatarluxe™ in Bangalore.
          </h2>
        </div>

        {/* Bottom row: left label | middle copy | right rotating circle */}
        <div className="px-6 lg:px-24 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left: label */}
            <div className="md:w-1/4">
              <p className="text-sm tracking-widest text-gray-400">WHAT WE DO</p>
            </div>

            {/* Middle: paragraph */}
            <div className="md:w-2/4">
              <p className="text-xl md:text-2xl leading-relaxed">
                No matter what your Hair, skin and aesthetic goals are, our tremendously skilled Professionals will treat you accurately under the right protocol.
              </p>
            </div>

            {/* Right: rotating circle + play */}
            <div className="md:w-1/4 flex justify-center md:justify-end">
              <div className="relative w-44 h-44 flex items-center justify-center">
                {/* faint outline ring behind */}
                <svg viewBox="0 0 160 160" className="absolute w-full h-full">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.2"
                  />
                </svg>

                {/* rotating text around a circle */}
                <svg
                  ref={circleRef}
                  viewBox="0 0 160 160"
                  className="absolute w-full h-full"
                >
                  <defs>
                    <path
                      id="textCircle"
                      d="
                        M 80,80
                        m -55,0
                        a 55,55 0 1,1 110,0
                        a 55,55 0 1,1 -110,0
                      "
                    />
                  </defs>
                  <text
                    fill="#D9AE69"
                    fontSize="12"
                    className="uppercase"
                    letterSpacing="2.5"
                  >
                    <textPath href="#textCircle" startOffset="0%">
                      AVATARLUXE – NURTURE YOUR – BEST SELF –
                    </textPath>
                  </text>
                </svg>

                {/* Play icon (decorative) */}
                <svg
                  viewBox="0 0 24 24"
                  className="relative z-10 w-10 h-10"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 6v12l10-6z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO VIDEO SECTION - play on click (user interaction) */}
      <section ref={videoRef} className="w-full min-h-screen bg-black flex justify-center items-center overflow-hidden relative">
        <motion.div
          style={{
            scale: scale,
            borderRadius: radius,
            animation: easeIn,
            animationDelay: 0.1,
          }}
          className="overflow-hidden mx-auto z-20 transition-all ease-in-out relative"
        >
          {/* Actual video element — do NOT autoplay: user must click to start */}
          <video
            ref={videoRef}
            autoPlay
            muted={true} // start muted until user clicks play (we unmute on first click)
            loop
            playsInline
            className="w-full h-full object-cover max-h-[70vh] min-w-[420px]"
            // not using autoPlay to avoid browser restrictions
          >
            <source src="/videos/avatar_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </motion.div>
      </section>

      {/* Timeline blocks */}
      <section className="py-6">
        <div className="relative overflow-hidden group flex flex-col md:flex-row gap-6 border-b-2 border-white justify-between text-3xl p-10 text-white transition-colors duration-300 ease-in-out hover:text-black bg-black hover:bg-white effect-hover">
          <div>
            <h2 className="font-bold">2004</h2>
          </div>
          <div className="flex-1 text-base md:text-lg text-center">
            <p>Consultants with a collective experience of over 25+ years in the field of Aesthetics (Hair, Skin, Laser & Plastic surgery)</p>
          </div>
          <div>
            <h2 className="text-4xl">Launch</h2>
          </div>
        </div>
        <div className="relative overflow-hidden group flex flex-col md:flex-row gap-6 border-b-2 border-white justify-between text-3xl p-10 text-white transition-colors duration-300 ease-in-out hover:text-black bg-black hover:bg-white effect-hover">
          <div>
            <h2 className="font-bold">2015</h2>
          </div>
          <div className="flex-1 text-base md:text-lg text-center">
            <p>Consultants with a collective experience of over 25+ years in the field of Aesthetics (Hair, Skin, Laser & Plastic surgery)</p>
          </div>
          <div>
            <h2 className="text-4xl">Growth</h2>
          </div>
        </div>
        <div className="relative overflow-hidden group flex flex-col md:flex-row gap-6 border-b-2 border-white justify-between text-3xl p-10 text-white transition-colors duration-300 ease-in-out hover:text-black bg-black hover:bg-white effect-hover">
          <div>
            <h2 className="font-bold">2020</h2>
          </div>
          <div className="flex-1 text-base md:text-lg text-center">
            <p>Consultants with a collective experience of over 25+ years in the field of Aesthetics (Hair, Skin, Laser & Plastic surgery)</p>
          </div>
          <div>
            <h2 className="text-4xl">Famous</h2>
          </div>
        </div>
        <div className="relative overflow-hidden group flex flex-col md:flex-row gap-6 border-b-2 border-white justify-between text-3xl p-10 text-white transition-colors duration-300 ease-in-out hover:text-black bg-black hover:bg-white effect-hover">
          <div>
            <h2 className="font-bold">2025</h2>
          </div>
          <div className="flex-1 text-base md:text-lg text-center">
            <p>Consultants with a collective experience of over 25+ years in the field of Aesthetics (Hair, Skin, Laser & Plastic surgery)</p>
          </div>
          <div>
            <h2 className="text-4xl">Leader</h2>
          </div>
        </div>
      </section>

      {/* Services carousel with clickable thumbnails that open YouTube modal */}
      <section className="bg-black text-white min-h-screen mb-10 mt-10">
        <HorizontalScrollCarousel
          items={serviceItems}
          title="OUR SERVICES"
          subtitle="ADVANCED SOLUTIONS FOR SKIN, HAIR & AESTHETICS"
          heightPerCard={100}
          cardWidth={500}
        />
      </section>

      <section className="bg-black text-white min-h-screen">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative mb-5">OUR CASE STUDIES</h2>
        <p className="text-center text-gray-400 mt-2 mb-10 text-sm tracking-wide">
          PERSONALIZED CARE, PROVEN OUTCOMES
        </p>
        <CaseStudiesSection />
      </section>

      <section className="bg-black text-white min-h-screen">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative mb-5 mt-30">HOW DO THEY RATE US</h2>
        <p className="text-center text-gray-400 mt-2 text-sm tracking-wide">
          TRUSTED BY HUNDREDS, LOVED BY ALL
        </p>
        <TestimonialSection />
      </section>

            {/* Video cards carousel - clicking a card opens YouTube modal */}
      <section className="bg-black text-white py-6 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-5xl lg:text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative mb-4"
          >
            HEAR THEM OUT
          </motion.h2>
          <p className="text-center text-gray-400 mt-2 text-sm tracking-wide">
            THE CREATORS OF YOUR NEXT LOOK
          </p>

          <div className="max-w-6xl mx-auto px-4 mt-5">
            <div className="relative">
              <div
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 py-6"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {videos.map((r) => (
                  <div
                    key={r.id}
                    className="snap-start flex-shrink-0 w-[320px] md:w-[380px] rounded-2xl bg-gradient-to-b from-white/3 to-white/2 border border-white/6 shadow-2xl overflow-hidden cursor-pointer"
                    onClick={() => openYouTube(r.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openYouTube(r.id); }}
                  >
                    <div className="relative aspect-video">
                      <img
                        src={`https://img.youtube.com/vi/${r.id}/hqdefault.jpg`}
                        alt={r.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center">
                          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="font-semibold text-lg">{r.name}</h4>
                      <p className="text-sm text-gray-300 mt-1 line-clamp-2">{r.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* left/right subtle gradient fades */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/90 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/90 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Modal */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-60 flex items-center justify-center transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* backdrop */}
        <div
          onClick={closeYouTube}
          className="absolute inset-0 bg-black/75"
        />

        <div className="relative z-70 w-full max-w-3xl mx-4">
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
            {open && active && (
               <iframe
                src={`https://www.youtube.com/embed/${active}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
              />

            )}

            <button
              onClick={closeYouTube}
              aria-label="Close video"
              className="absolute top-3 right-3 z-50 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      <BackgroundBeamsDemo />
      <Footer />
    </div>
  );
}
