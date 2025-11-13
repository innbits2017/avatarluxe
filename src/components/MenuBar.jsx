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
import { useState } from "react";

export function MenuBar() {
  const navItems = [
    { name: "Home", link: "#features" },
    { name: "Services", link: "#pricing" },
    { name: "About Us", link: "#aboutus" },
    { name: "Testimonial", link: "#testimonial" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // fixed header wrapper
    <header className="fixed top-0 left-0 w-full z-50">
      {/* semi-transparent background with blur so image shows through */}
       <div className="mt-4 w-[92%] md:w-[90%] lg:w-[85%] bg-black/30 backdrop-blur-sm rounded-3xl shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative w-full">
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
                      className="relative text-neutral-600 dark:text-neutral-300"
                    >
                      <span className="block">{item.name}</span>
                    </a>
                  ))}

                  <div className="flex w-full flex-col gap-4">
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
