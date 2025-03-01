"use client";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-r from-[#0066b8] via-[#003A70] to-[#0066b8] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo - Sol Kolon */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-start">
            <Image
              src="/logomini.png"
              alt="Erdem Erbey Logo"
              width={150}
              height={150}
              className="mb-0 w-auto h-auto"
            />
          </div>

          {/* İletişim - Orta Kolon */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-semibold mb-4">İLETİŞİM</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaPhone className="flex-shrink-0" />
                0224 452 32 25
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="flex-shrink-0" />
                av.erdemerbey@gmail.com
              </p>
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="flex-shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Konak Mahallesi, Lefkoşe Caddesi<br />
                  Origami Flat Ofis No:42 Kat:6 D:43<br />
                  16110 Nilüfer/Bursa
                </span>
              </p>
            </div>
          </div>

          {/* Site Haritası - Orta Kolon */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 -ml-8">SİTE HARİTASI</h3>
            <ul className="space-y-2 -ml-8">
              <li><Link href="/">Ana Sayfa</Link></li>
              <li><Link href="/hakkinda">Hakkında</Link></li>
              <li><Link href="/faaliyet-alanlari">Faaliyet Alanları</Link></li>
              <li><Link href="/iletisim">İletişim</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Faaliyet Alanları - Sağ Kolon */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold mb-4">FAALİYET ALANLARI</h3>
            <ul className="space-y-2">
              <li>Sigorta Hukuku</li>
              <li>Ticaret Hukuku</li>
              <li>Kira Hukuku</li>
              <li>Tazminat Hukuku</li>
              <li>Arabuluculuk</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 relative">
          <p className="text-center text-sm">
            © 2023 ERDEM ERBEY Hukuk & Danışmanlık. Tüm hakları saklıdır.
          </p>
          
          {/* Başa Dön Butonu */}
          <button
            onClick={scrollToTop}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors duration-200"
          >
            Başa Dön
            <FaArrowUp className="animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 