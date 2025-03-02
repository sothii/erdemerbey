"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Map = () => {
  const [userAddress, setUserAddress] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const officeAddress = "Konak Mahallesi, Lefkoşe Caddesi, Origami Flat Ofis No:42 Kat:6 D:43, Nilüfer/Bursa";

  const handleGetDirections = () => {
    if (userAddress) {
      window.open(
        `https://www.google.com/maps/dir/${encodeURIComponent(userAddress)}/${encodeURIComponent(officeAddress)}`,
        '_blank'
      );
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log(formData);
  };

  return (
    <section className="relative bg-white py-16 z-[2]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Adres Bilgileri */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg min-h-[600px] h-auto flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-serif text-[#003A70] mb-6">
                Ofis Adresimiz
              </h3>
              <div className="space-y-4 text-black">
                <p className="leading-relaxed">
                  Konak Mahallesi, Lefkoşe Caddesi,<br />
                  Origami Flat Ofis No:42<br />
                  Kat:6 D:43, 16110<br />
                  Nilüfer/Bursa
                </p>
                
                <div className="pt-2">
                  <p className="flex items-center gap-2">
                    <span className="font-medium">Tel:</span>
                    <a href="tel:02244523225" className="hover:text-[#003A70] transition-colors">
                      0224 452 32 25
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-medium">E-posta:</span>
                    <a href="mailto:av.erdemerbey@gmail.com" className="hover:text-[#003A70] transition-colors">
                      av.erdemerbey@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mt-auto pt-8">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Konumunuz
                </label>
                <input
                  type="text"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                  placeholder="Adresinizi girin"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003A70] focus:border-transparent transition-all duration-200 bg-gray-50 text-black"
                />
              </div>
              
              <button
                onClick={handleGetDirections}
                className="w-full px-4 py-3 bg-[#003A70] text-white rounded-lg hover:bg-[#002347] transition-colors duration-200"
              >
                Yol Tarifi Al
              </button>
            </div>
          </motion.div>

          {/* Harita */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-auto min-h-[600px]"
          >
            <iframe 
              width="100%" 
              height="100%"
              style={{ border: 0, minHeight: "600px", height: "100%" }}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Konak,%20Lefko%C5%9Fe%20Cd.%20Origami%20Flat%20Ofis%20No:42%20Kat:6%20D:43,%2016110%20Ni%CC%87l%C3%BCfer/Bursa+(Erdem%20Erbey%20Hukuk%20Dan%C4%B1%C5%9Fmanl%C4%B1k)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white p-8 rounded-lg shadow-lg min-h-[600px] h-auto flex flex-col"
          >
            <h3 className="text-2xl font-serif text-[#003A70] mb-6">
              Bize Ulaşın
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-6 flex-1 flex flex-col">
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003A70] focus:border-transparent transition-all duration-200 bg-gray-50 text-black"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  E-posta
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003A70] focus:border-transparent transition-all duration-200 bg-gray-50 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003A70] focus:border-transparent transition-all duration-200 bg-gray-50 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Mesajınız
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003A70] focus:border-transparent transition-all duration-200 bg-gray-50 text-black"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#003A70] text-white rounded-lg hover:bg-[#002347] transition-colors duration-200 mt-auto"
              >
                Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map; 