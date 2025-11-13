"use client";
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
import { useEffect, useState } from "react";

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
    const onScroll = () => setIsScrolled(window.scrollY > 10); // tweak threshold if needed
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-auto">
      {/* outer wrapper stays full width so fixed header covers entire viewport */}
      <div
        className={`
          mx-auto transition-all duration-300 ease-out
          ${isScrolled ? "w-[1000px] rounded-3xl" : "w-full"}
        `}
        style={{ transformOrigin: "center top" }}
      >
        {/* background (keeps full rounded look when collapsed to 1000px) */}
        <div
          className={`bg-black/30 backdrop-blur-sm shadow-sm transition-all duration-300
            ${isScrolled ? "px-4 py-2" : "px-4 py-4"}
          `}
        >
          {/* content container (centers inner navbar when collapsed) */}
          <div className={`${isScrolled ? "mx-auto" : ""}`}>
            <Navbar>
              {/* Desktop Navigation */}
              <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                  <NavbarButton variant="primary">Book Appointment</NavbarButton>
                </div>
              </NavBody>

              {/* Mobile Navigation */}
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
      </div>
    </header>
  );
}
