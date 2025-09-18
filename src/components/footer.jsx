import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm">
      {/* Top section: Social & Rise.Shine.Repeat */}
      <div className="grid md:grid-cols-2 border-b border-gray-700 px-12 py-16">
        <div className="flex flex-col gap-6">
          {/* Social Icons */}
          <div className="flex gap-6 text-xl">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-dribbble"></i>
            <i className="fas fa-globe"></i>
          </div>
          <p className="text-gray-400 max-w-sm">
            Dive into a world of fresh content and exciting updates.
            <br />
            Follow us and let's embark on this adventure together.
          </p>
        </div>
        <div className="flex justify-end items-center">
            <h2 className="text-5xl font-light">
                Enhance. <span className="text-gray-400">Refine.</span>{' '}
                <span className="font-semibold">Reveal.</span>
            </h2>
        </div>
      </div>

      {/* Middle section: Stay Tuned & Links */}
      <div className="grid md:grid-cols-4 border-b border-gray-700 px-12 py-16 gap-12">
        {/* Stay Tuned */}
        <div>
          <h3 className="text-lg font-medium mb-4">Stay Tuned</h3>
          <p className="text-gray-400 mb-6">
            Stay updated with the latest digital trends, insights, and expert advice from the RAFT team — delivered directly to your inbox.
          </p>
          <input
            type="email"
            placeholder="Your E-mail"
            className="bg-transparent border-b border-gray-500 outline-none w-full mb-6 placeholder-gray-500"
          />
          <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition flex items-center gap-2">
            Send Message <span>→</span>
          </button>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="font-semibold text-sm mb-4">COMPANY</h4>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Laser Hair Removal</li>
            <li>Hair Transplant</li>
            <li>Our Team</li>
            <li>Partners</li>
            <li>Case Studies</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">SERVICES</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Contact Us</li>
            <li>Surgical Treatments</li>
            <li>Non-Surgical Treatments</li>
            <li></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Opening hours</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Monday: Closed</li>
            <li>Tuesday: 10:30 – 7:30pm</li>
            <li>Wednesday: 10:30 – 7:30pm</li>
            <li>Thursday: 10:30 – 7:30pm</li>
            <li>Friday: 10:30 – 7:30pm</li>
            <li>Saturday: 10:30 – 7:30pm</li>
            <li>Sunday: 10:30 – 7:30pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom section: Logo & Info */}
      <div className="grid md:grid-cols-3 px-12 py-10 text-gray-400 text-xs border-t border-gray-700 items-center">
        <div className="text-left font-bold text-white text-lg">Avatarluxe</div>
        <div className="text-center">
          <p>36/C, 1st Main Road,</p>
          <p>S.T.Bed, Koramangala 4th Block,</p>
          <p>Bengaluru – 560034 Karnataka</p>
        </div>
        <div className="text-right">
          <p>contact@avatarluxe.in</p>
          <p>Ph:+91 988 446 9279</p>
          <p>Ph: 080 – 4111 2827</p>
          <p>Thursday, Jun 5, 2025</p>
          <p>11:26:32 AM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
