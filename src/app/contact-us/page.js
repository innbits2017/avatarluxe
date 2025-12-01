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
import { BackgroundBeams } from "../../components/ui/background-beams";

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
      <section className='mt-20 mb-10'>
        <BackgroundBeamsDemo />
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start gap-8">
        {/* Left: Address */}
        <div className="flex-1 flex items-start gap-4 border border-gray-300 p-5 rounded-lg min-h-[200px]">
          {/* Icon */}
          <svg
            className="w-7 h-7 font-light mt-1 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>

          <div>
            <h3 className="text-xl font-semibold font-light">
              Avatarluxe™ Aestheticians Pvt Ltd
            </h3>

            <address className="not-italic mt-3 font-light space-y-1">
              <div>36/C, 1st Main Road,</div>
              <div>S.T.Bed, Koramangla 4th Block,</div>
              <div>Bengaluru – 560 034 Karnataka</div>
            </address>
          </div>
        </div>

        {/* Middle: Phone(s) */}
        <div className="flex-1 flex items-start gap-4 border border-gray-300 p-5 rounded-lg min-h-[200px]">
          {/* Icon */}
          <svg
            className="w-7 h-7 font-light mt-1 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.37 2.4.72 3.54a2 2 0 0 1-.45 2.11L8.09 10.91a15.05 15.05 0 0 0 6 6l1.53-1.53a2 2 0 0 1 2.11-.45c1.14.35 2.33.6 3.54.72A2 2 0 0 1 22 16.92z" />
          </svg>

          <div className="font-light">
            <h3 className="text-xl font-semibold font-light">
              Call Us
            </h3>
            <p className="font-semibold mb-1">
              Phone: <span className="font-normal">+91 9884469279</span>
            </p>
            <p className="font-semibold">
              Phone: <span className="font-normal">080 – 4111 2827</span>
            </p>
          </div>
        </div>

        {/* Right: Email */}
        <div className="flex-1 flex items-start gap-4 border border-gray-300 p-5 rounded-lg min-h-[200px]">
          {/* Icon */}
          <svg
            className="w-7 h-7 font-light mt-1 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M4 4h16v16H4z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>

          <div className="font-light">
            <h3 className="text-xl font-semibold font-light">
              Email Us
            </h3>
            <p className="font-semibold font-light">
              Email: <a href="mailto:contact@avatarluxe.in" className="font-normal underline">contact@avatarluxe.in</a>
            </p>

           
          </div>
        </div>
      </div>
      </section>


            {/* Video cards carousel - clicking a card opens YouTube modal */}
      <section className="bg-black text-white py-6 pt-10 mt-2">
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

      <Footer />
    </div>
  );
}
