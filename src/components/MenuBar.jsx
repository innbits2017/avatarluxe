"use client";
import { useEffect, useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export function MenuBar() {
  const navItems = [
    { name: "Home", link: "#features" },
    { name: "Services", link: "#pricing" },
    { name: "About Us", link: "#aboutus" },
    { name: "Testimonial", link: "#testimonial" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-auto">
      {/* IMPORTANT: no Tailwind width utilities on this div (so inline style wins) */}
      <div
        className="transition-all duration-500 ease-in-out"
        style={{
          width: isScrolled ? "1000px" : "100%",
          // center when collapsed to 1000px
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="bg-black/30 backdrop-blur-sm shadow-sm rounded-3xl">
          <Navbar>
            <NavBody>
              <NavbarLogo />
              <NavItems items={navItems} />
              <div className="flex items-center gap-4">
                <NavbarButton variant="primary">Book Appointment</NavbarButton>
              </div>
            </NavBody>

            {/* mobile nav as before */}
            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </MobileNavHeader>

              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
              >
                {navItems.map((item, idx) => (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300 block py-2"
                  >
                    <span className="block">{item.name}</span>
                  </a>
                ))}

                <div className="flex w-full flex-col gap-4 mt-4 px-2">
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                  >
                    Login
                  </NavbarButton>
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                  >
                    Book a call
                  </NavbarButton>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </div>
      </div>
    </header>
  );
}
