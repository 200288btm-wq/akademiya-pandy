import { Heart, Users, Home, Sparkles } from "lucide-react";

export function WhyUsSection() {
  const reasons = [
    {
      icon: <Home size={32} />,
      title: "Рядом с домом",
      description: "В Ботаническом районе, рядом с ТЦ «Дирижабль» — удобно добираться пешком или на машине",
    },
    {
      icon: <Heart size={32} />,
      title: "Без давления",
      description: "Мы не требуем быть идеальными. Каждый ребёнок развивается в своём темпе, и это нормально",
    },
    {
      icon: <Users size={32} />,
      title: "Маленькие группы",
      description: "До 10 детей в группе — педагог видит каждого ребёнка и может уделить внимание всем",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Педагоги с душой",
      description: "Наши преподаватели любят детей и своё дело. Они создают атмосферу, куда хочется возвращаться",
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Волнистый фон */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path
            d="M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z"
            fill="#7BAF8E"
          />
          <path
            d="M0,500 Q360,400 720,500 T1440,500 L1440,800 L0,800 Z"
            fill="#F2A65A"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#0c0805] mb-4">
            Почему дети хотят возвращаться?
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#0c0805] max-w-2xl mx-auto">
            Мы создали место, где каждый ребёнок чувствует себя важным и принятым
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#7BAF8E] to-[#F2A65A] rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="font-['Nunito',sans-serif] font-bold text-xl text-[#0c0805] mb-3">
                {reason.title}
              </h3>
              <p className="font-['Nunito_Sans',sans-serif] text-[#0c0805] leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
