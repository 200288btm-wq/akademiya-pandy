export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#7BAF8E] opacity-5 rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#F2A65A] opacity-5 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#0c0805]">
              {"Академия Панды"}<br />{"больше чем просто занятия"}
            </h2>

            <div className="space-y-4 font-['Nunito_Sans',sans-serif] text-lg text-[#0c0805] leading-relaxed">
              <p>
                {"К нам дети приходят с интересом, а уходят с новыми навыками и счастливыми глазами."}
              </p>
              <p>
                {"Мы создаём тёплую атмосферу, где каждый ребёнок чувствует себя важным и принятым, со своим темпом, своими интересами и своими маленькими победами."}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{"🧠"}</span>
                <div>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#0c0805]">
                    {"Нейроподход и бережное развитие"}
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-base text-[#4a4a4a]">
                    {"Занятия построены с учётом того, как работает мозг ребёнка, через движение, игру и творчество включается внимание, мышление и желание учиться."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{"💛"}</span>
                <div>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#0c0805]">
                    {"Каждый ребёнок в своём темпе"}
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-base text-[#4a4a4a]">
                    {"Сравниваем ребёнка только с ним самим. Здесь ценят усилие и попытку, а результат приходит сам."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{"👥"}</span>
                <div>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#0c0805]">
                    {"Маленькие группы до 10 детей"}
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-base text-[#4a4a4a]">
                    {"Педагог видит каждого ребёнка, знает его особенности и вовремя поддерживает."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{"📍"}</span>
                <div>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#0c0805]">
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
