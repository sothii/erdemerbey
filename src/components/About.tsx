"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative bg-white mt-[-10vh] z-[3]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center">
          {/* İçerik Alanı - Sol (2 birim) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-8 py-20 col-span-2"
          >
            <h2 className="text-4xl font-serif text-black mb-6">Hakkında</h2>
            <h3 className="text-2xl font-serif text-black mb-8">
              Erdem Erbey Şenyurt
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Marmara Üniversitesi Hukuk Fakültesi lisans eğitimini 2008 yılında 
                tamamlamıştır. 2010 yılında avukatlık staj eğitimini tamamlamış, 
                Bursa Barosu&apos;na kayıtlı olarak avukatlık mesleğine başlamıştır.
              </p>
              <p>
                Bursa Barosu bünyesinde Çevre Hukuku, Hayvan Hakları Hukuku 
                Komisyonlarında görev almıştır.
              </p>
              <p>
                2014 yılından bu yana Bursa Mahkemelerinde başta sigorta ve ticaret 
                mevzuatından kaynaklı nitelikli hesap uzmanlığı olmak üzere çeşitli 
                uzmanlık alanlarında bilirkişilik görevini aktif olarak sürdürmektedir.
              </p>
              <p>
                2017 yılından bu yana arabuluculuk faaliyetini yürütmekte; İş Hukuku 
                ve Sigorta Hukuku alanlarında Uzman Arabulucu ünvanı ile arabuluculuk 
                hizmeti sunmaktadır.
              </p>
              <p>
                2021-2024 yılları arasında 2 dönem Bursa Barosu Disiplin Kurulu üyeliği 
                görevini yapmıştır.
              </p>
            </div>
          </motion.div>

          {/* Resim Alanı - Sağ (3 birim) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative col-span-3"
          >
            <div className="relative h-[90vh] scale-[1.8] translate-x-[-30%] translate-y-[-7.3%]">
              <Image
                src="/about.png"
                alt="Erdem Erbey"
                fill
                className="object-contain object-right"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 