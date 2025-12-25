import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] pt-20 pb-10 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-white block mb-6"
            >
              <span className="text-[#eb0028]">TEDx</span>
              <span>Trial</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              This independent TEDx event is operated under license from TED.
            </p>
          </div>

          {/* Links 1 */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              Event
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#eb0028] transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#eb0028] transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#eb0028] transition-colors">
                  Tickets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#eb0028] transition-colors">
                  Venue
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              About
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#eb0028] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#eb0028] transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#eb0028] transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#eb0028] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              Stay Updated
            </h4>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#eb0028] transition-colors"
              />
              <button className="bg-[#eb0028] hover:bg-[#c40022] text-white px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2024 TEDxTrial. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
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
