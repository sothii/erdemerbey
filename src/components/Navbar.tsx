"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: "ANA SAYFA", href: "/" },
    { title: "HAKKINDA", href: "#about" },
    { title: "FAALİYET ALANLARI", href: "#services" },
    { title: "İLETİŞİM", href: "#contact" },
    { title: "BLOG", href: "#blog" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'transform-gpu' : ''}`}>
      <div className="relative w-full">
        {/* Logo - Basitleştirilmiş yapı */}
        <Link href="/" className={`absolute left-0 top-0 z-10 transition-all duration-300 block ${
          isScrolled ? 'w-[440px]' : 'w-[800px]'
        }`}>
          <Image
            src="/logo.png"
            alt="Erdem Erbey Logo"
            width={800}
            height={140}
            className="w-auto h-auto object-contain"
            priority
          />
        </Link>

        {/* Üst Bar - Mavi Gradient Kısım */}
        <div className={`bg-gradient-to-r from-[#0b385d] via-[#348ad2] to-[#0b385d] transition-all duration-300 ${
          isScrolled ? 'h-12' : 'h-16'
        }`}>
          <div className="container mx-auto px-4">
            <div className={`flex justify-end items-center h-full relative z-20 transition-all duration-300 ${
              isScrolled ? 'text-sm' : 'text-base'
            }`}>
              <span className="text-base italic text-white">Hukuki Destek İçin Hemen Randevu Alın!</span>
              <div className="flex items-center ml-8">
                <FaPhone className="h-5 w-5 text-white mr-3" />
                <span className="text-lg font-bold text-white">0224 452 32 25</span>
              </div>
              <div className="flex items-center gap-4 ml-8">
                <a href="#" className="text-white hover:opacity-80 transition-all duration-300">
                  <FaFacebookF className="h-4 w-4" />
                </a>
                <a href="#" className="text-white hover:opacity-80 transition-all duration-300">
                  <FaLinkedinIn className="h-4 w-4" />
                </a>
                <a href="#" className="text-white hover:opacity-80 transition-all duration-300">
                  <FaInstagram className="h-4 w-4" />
                </a>
                <a href="#" className="text-white hover:opacity-80 transition-all duration-300">
                  <FaTiktok className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ana Menü - Siyah Gradient Kısım */}
        <nav className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80' 
            : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent'
        }`}>
          <div className="container mx-auto px-4">
            <div className={`flex justify-end items-center transition-all duration-300 ${
              isScrolled ? 'h-12' : 'h-16'
            }`}>
              {/* Desktop Menü */}
              <div className="hidden md:flex items-center gap-16">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`text-white hover:text-gray-300 transition-all duration-300 tracking-wider font-humanist ${
                      isScrolled ? 'text-base' : 'text-lg'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Mobil Menü Butonu */}
              <div className="md:hidden flex justify-between w-full items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white p-2"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobil Menü */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-black"
            >
              <div className="container mx-auto px-4 py-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block py-3 text-white hover:text-gray-300 text-lg tracking-wider text-right font-humanist"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 