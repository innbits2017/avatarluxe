import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white border-t"
      style={{ borderColor: "rgba(212, 175, 55, 0.2)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl mb-4 tracking-wider">
              AVATARLUXE
            </h3>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Koramangala's premier Level-2 Aesthetic & Plastic Surgery
              Hospital, specializing in world-class breast enhancement
              procedures.
            </p>

            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="size-9 rounded-full flex items-center justify-center transition hover:opacity-80"
                    style={{ backgroundColor: "#D4AF37" }}
                  >
                    <Icon className="size-4 text-black" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                "Breast Augmentation",
                "Hair Transplant",
                "Body Contouring",
                "Medi Facials",
                "Laser Treatments",
                "Liposuction",
                "Bio Fibre Hair Implant",
                "Nido Hair",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#treatments"
                    className="hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visiting Hours */}
          <div>
            <h4 className="text-base sm:text-lg mb-4">Visiting Hours</h4>
            <div className="space-y-3 text-sm text-white/70">
              
              <div className="flex items-start gap-2">
                <Clock
                  className="size-4 mt-0.5"
                  style={{ color: "#D4AF37" }}
                />
                <div>
                  <div className="text-white mb-1">
                    Monday
                  </div>
                  <div>Closed</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock
                  className="size-4 mt-0.5"
                  style={{ color: "#D4AF37" }}
                />
                <div>
                  <div className="text-white mb-1">Tuesday to Sunday</div>
                  <div>10:30 AM - 07:30 PM</div>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/70">

              <div className="flex items-start gap-2">
                <MapPin
                  className="size-4 mt-0.5"
                  style={{ color: "#D4AF37" }}
                />
                <div>
                  36/C, 1st Main Road, S.T.Bed, Koramangala 4th Block, Bengaluru – 560 034 Karnataka
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone
                  className="size-4 mt-0.5"
                  style={{ color: "#D4AF37" }}
                />
                <div>
                  <a href="tel:+91 988 446 9279">+91 988 446 9279</a> <br />
                  <a href="tel:080 – 4111 2827">080 – 4111 2827</a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail
                  className="size-4 mt-0.5"
                  style={{ color: "#D4AF37" }}
                />
                <div>
                  contact@avatarluxe.in 
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/70"
          style={{ borderColor: "rgba(212, 175, 55, 0.2)" }}
        >
          <p>© 2026 Avatarluxe Aestheticians Pvt Ltd. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;