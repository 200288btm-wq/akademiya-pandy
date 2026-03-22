function PawIcon({ color = "#7BAF8E" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: 2 }}>
      {/* Toe beans - sketchy style */}
      <ellipse cx="28" cy="28" rx="10" ry="12" fill={color} opacity="0.85"
        style={{ filter: "url(#sketch)" }} />
      <ellipse cx="50" cy="20" rx="11" ry="13" fill={color} opacity="0.85" />
      <ellipse cx="72" cy="28" rx="10" ry="12" fill={color} opacity="0.85" />
      <ellipse cx="18" cy="46" rx="8" ry="10" fill={color} opacity="0.80" />
      {/* Main pad - irregular sketchy shape */}
      <path d="M50 38 C30 36 18 50 20 65 C22 78 35 88 50 88 C65 88 78 78 80 65 C82 50 70 36 50 38Z"
        fill={color} opacity="0.88" />
      {/* Sketch texture lines */}
      <path d="M35 60 Q50 55 65 60" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" fill="none" />
      <path d="M30 70 Q50 65 70 70" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.2" fill="none" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#7BAF8E] opacity-5 rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#F2A65A] opacity-5 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <h2 className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D]">
              <span className="text-4xl md:text-5xl">{"Академия Панды,"}</span><br />
              <span className="text-2xl md:text-3xl font-semibold">{"больше чем просто занятия"}</span>
            </h2>

            <div className="space-y-4 font-['Nunito_Sans',sans-serif] text-lg text-[#3D3D3D] leading-relaxed">
              <p>
                {"К нам дети приходят с интересом, а уходят с новыми навыками и счастливыми глазами."}
              </p>
              <p>
                {"Мы создаём тёплую атмосферу, где каждый ребёнок чувствует себя важным и принятым, со своим темпом, своими интересами и своими маленькими победами."}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <PawIcon color="#7BAF8E" />
                <div>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D]">
                    {"Нейроподход и бережное развитие"}
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-base text-[#4a4a4a]">
                    {"Занятия построены с учётом того, как работает мозг ребёнка, через движение, игру и творчество включается внимание, мышление и желание учиться."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PawIcon color="#F2A65A" />
                <div>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D]">
                    {"Каждый ребёнок в своём темпе"}
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-base text-[#4a4a4a]">
                    {"Сравниваем ребёнка только с ним самим. Здесь ценят усилие и попытку, а результат приходит сам."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PawIcon color="#7BAF8E" />
                <div>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D]">
                    {"Маленькие группы до 10 детей"}
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-base text-[#4a4a4a]">
                    {"Педагог видит каждого ребёнка, знает его особенности и вовремя поддерживает."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PawIcon color="#F2A65A" />
                <div>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D]">
                    {"Рядом с домом"}
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-base text-[#4a4a4a]">
                    {"г. Екатеринбург, ул. Хуторская 1. Ботанический район. Рядом с домом, удобно и спокойно."}
                  </p>
                </div>
              </div>
            </div>

            <p className="font-['Nunito_Sans',sans-serif] text-[#7BAF8E] font-semibold text-lg">
              {"Мы рады видеть каждого ребёнка таким, какой он есть."}
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/Jw1ZxgYP/photo-2025-10-10-19-59-29.jpg"
                alt="Занятия в Академии Панды"
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#F0EDD8]/50 to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#F2A65A] rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#7BAF8E] rounded-full opacity-20 animate-pulse delay-75" />
          </div>

        </div>
      </div>
    </section>
  );
}
