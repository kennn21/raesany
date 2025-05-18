'use client';

import Image from 'next/image';
import { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="flex justify-between items-center px-4 py-4">
          <div className="w-1/4">
            <a href="#" className="block">
              <Image src="/logo.svg" alt="Logo" width={100} height={100} />
            </a>
          </div>

          <div className="w-1/4 flex justify-end">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <div className="w-8 h-6 flex flex-col justify-between">
                <div className="w-full h-1 bg-black"></div>
                <div className="w-full h-1 bg-black"></div>
                <div className="w-full h-1 bg-black"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-24 text-gray-950">
            <div className="container mx-auto px-4">
              <nav className="flex flex-col items-center text-2xl space-y-6">
                <a
                  href="#home"
                  className="hover:text-pink-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#portfolio"
                  className="hover:text-pink-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio
                </a>
                {/* <a
                  href="#videos"
                  className="hover:text-pink-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Videos
                </a> */}
                {/* <a
                  href="#collaborations"
                  className="hover:text-pink-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Collaborations
                </a> */}
                <a
                  href="#story"
                  className="hover:text-pink-300"
                  onClick={() => setMenuOpen(false)}
                >
                  My Story
                </a>
                {/* <a
                  href="#instagram"
                  className="hover:text-pink-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Instagram
                </a> */}
                <a
                  href="#contact"
                  className="hover:text-pink-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
