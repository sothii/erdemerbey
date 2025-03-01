"use client";
import dynamic from 'next/dynamic';

// Client-side only import
const AnimatedTestimonials = dynamic(
  () => import('./animated-testimonials').then((mod) => mod.AnimatedTestimonials),
  { ssr: false } // SSR'ı devre dışı bırak
);

const PractiseAreas = () => {
  const practiseAreas = [
    {
      quote: "Sigorta hukuku, sigorta şirketleri ile sigortalı arasında yapılan sözleşmelerin hukuki çerçevesini belirleyen bir daldır. Bu alandaki düzenlemeler, sigorta poliçesinin kapsamı, sigortalıların ve sigorta şirketlerinin hakları ve yükümlülükleri gibi temel konuları kapsar. Sigorta sözleşmeleri, taraflar arasında güven ilişkisi kurarak, olası zararların karşılanmasını güvence altına alır. Bu sözleşmelerin hukuki açıdan doğru ve geçerli olabilmesi için, tarafların açıklık, dürüstlük ve belirli yasal gerekliliklere uyması gerekir.",
      name: "Sigorta Hukuku",
      designation: "Sigorta Sözleşmeleri ve Tarafların Hakları",
      src: "/sigortahukuk.png"
    },
    {
      quote: "Tazminat hukuku, bir kişinin uğradığı zararların giderilmesi amacıyla uygulanan hukuki kurallar bütünüdür. Bu alan, haksız fiil, sözleşmeye aykırılık veya diğer hukuka aykırı durumlar sonucu meydana gelen zararların tazmin edilmesini sağlar. Tazminat, maddi veya manevi zararların karşılanmasını amaçlar ve bu süreçte zarar gören kişi, zarar veren tarafa karşı dava açma hakkına sahiptir. Hukuki süreçler, zararın boyutunun tespit edilmesinden, tazminat miktarının belirlenmesine kadar çeşitli adımları içerir. Tazminat hukuku, bireylerin haklarını koruyarak adaletin sağlanmasına yardımcı olur.",
      name: "Tazminat Hukuku",
      designation: "Zararların Tazmin Edilmesi ve Hukuki Süreçler",
      src: "/tazminathukuk.png"
    },
    {
      quote: "Ticaret hukuku, ticari faaliyetlerin düzenlenmesi ve ticari ilişkilerde tarafların hak ve sorumluluklarını belirleyen bir hukuk dalıdır. Bu alan, ticaret yapan kişiler, şirketler, iş sözleşmeleri, mal ve hizmet ticareti gibi konuları kapsar. Ticaret hukuku, işletmelerin kuruluşu, ticari sözleşmelerin hazırlanması, iflas, ortaklık yapıları gibi geniş bir yelpazeyi içerir. Ayrıca, ticari davalarda tarafların haklarını koruyarak, haksız rekabet, ticari markalar, patentler gibi meselelerde de düzenlemeler yapar. Bu hukuk dalı, ticari hayatın düzenli ve adil bir şekilde işlemesi için önemli bir rol oynar.",
      name: "Ticaret Hukuku",
      designation: "Ticari İlişkiler ve Şirketler Arası Düzenlemeler",
      src: "/ticarethukuk.png"
    },
    {
      quote: "Kira hukuku, bir malın belirli bir süre için kiralanmasıyla ilgili hukuki düzenlemeleri kapsar. Bu alan, kiracı ile kiralayan arasındaki hak ve yükümlülükleri belirler. Kira sözleşmeleri, tarafların mal kullanımı, kira bedeli, süresi, bakım ve onarım gibi konularda anlaşmalarını içerir. Kiralayan, kiralanan malın kullanımını sağlamakla yükümlü olurken, kiracı ise malı özenle kullanma ve kira bedelini ödeme sorumluluğuna sahiptir. Kira hukuku, tarafların karşılıklı haklarını koruyarak, sözleşmeye aykırı durumlarda dava açma ve çözüm arama imkânı sunar.",
      name: "Kira Hukuku",
      designation: "Kiracı ve Kiralayan Arasındaki Hukuki İlişkiler",
      src: "/kirahukuk.png"
    },
    {
      quote: "Arabuluculuk, taraflar arasındaki anlaşmazlıkların, bir arabulucu eşliğinde ve mahkemeye gitmeden çözülmesini sağlayan alternatif bir uyuşmazlık çözüm yöntemidir. Arabulucu, tarafsız bir üçüncü kişi olarak, her iki tarafın da görüşlerini dinler ve çözüm önerileri sunarak uzlaşma sağlanmasına yardımcı olur. Bu süreç, genellikle daha hızlı, daha az maliyetli ve gizli bir çözüm sunar. Arabuluculuk, özellikle ticaret, aile, iş ve işçi-işveren ilişkilerinde etkin bir yöntem olarak kullanılmaktadır. Başarılı bir arabuluculuk süreci, tarafların karşılıklı memnuniyetle çözüme ulaşmalarını sağlar.",
      name: "Arabuluculuk",
      designation: "Uyuşmazlıkların Çözülmesinde Alternatif Yöntem",
      src: "/arabulucu.png"
    }
  ];

  return (
    <section className="bg-white py-20 relative mt-[-30vh] z-[2]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-[#003A70] mb-12 text-left pl-[46%]">
          Faaliyet Alanları
        </h2>
        
        <AnimatedTestimonials 
          testimonials={practiseAreas}
          autoplay={true}
        />
      </div>
    </section>
  );
};

export default PractiseAreas; 