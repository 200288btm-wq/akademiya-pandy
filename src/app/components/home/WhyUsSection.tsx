export function WhyUsSection() {
  const reasons = [
    {
      icon: "https://i.ibb.co/XrZPGN68/a-cute-minimal-watercolor-house-sticker-kin9-Ua-JRQj-WCK1-My-Vv-Pow-B4-U-Zf8c-QK2j-ZZ-OOh-G0-VA-removeb.png",
      title: "Рядом с домом",
      description: "В Ботаническом районе, рядом с ТЦ «Дирижабль» — удобно добираться пешком или на машине",
    },
    {
      icon: "https://i.ibb.co/cc8Xtkgm/a-simple-watercolor-heart-sticker-render-h4-Hu24-OSjm-G2-Onoros7h-A-nm-Lt-C0-Mv-Rniu-QOBj-ND5-D1-A-remove.png",
      title: "Без давления",
      description: "Мы не требуем быть идеальными. Каждый ребёнок развивается в своём темпе, и это нормально",
    },
    {
      icon: "https://i.ibb.co/tTsthPMF/Gemini-Generated-Image-68jmvd68jmvd68jm-removebg-preview-1.png",
      title: "Маленькие группы",
      description: "До 10 детей в группе — педагог видит каждого ребёнка и может уделить внимание всем",
    },
    {
      icon: "https://i.ibb.co/fGth2Wxq/a-cute-minimal-watercolor-sticker-featur-Amh-KYV-TRy8f-Z7tr-ZCBg-Yr-2h-Rq6-RV-vx33g-Mf60rg-removebg-p.png",
      title: "Педагоги с душой",
      description: "Наши преподаватели любят детей и своё дело. Они создают атмосферу, куда хочется возвращаться",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path d="M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z" fill="#7BAF8E" />
          <path d="M0,500 Q360,400 720,500 T1440,500 L1440,800 L0,800 Z" fill="#F2A65A" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#3D3D3D] mb-4">
            Почему дети хотят возвращаться?
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#3D3D3D] max-w-2xl mx-auto">
            Мы создали место, где каждый ребёнок чувствует себя важным и принятым
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 group relative overflow-hidden"
              style={{
                backgroundColor: "#faf8f3",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.35' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.6 0 0 0 0 0.5 0 0 0 0 0.3 0 0 0 0.25 0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            >
              {/* Стикер */}
              <div className="flex justify-center mb-5 relative z-10">
                <div
                  style={{
                    filter: "drop-shadow(1px 3px 6px rgba(0,0,0,0.20)) drop-shadow(0px 1px 2px rgba(0,0,0,0.12))",
                    transform: index % 2 === 0 ? "rotate(-3deg)" : "rotate(2.5deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <img
                    src={reason.icon}
                    alt={reason.title}
                    className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <h3 className="font-['Nunito',sans-serif] font-bold text-xl text-[#3D3D3D] mb-3 text-center relative z-10">
                {reason.title}
              </h3>
              <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] leading-relaxed text-center relative z-10">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
