import { ArrowRight, Utensils, CalendarClock, TrendingDown } from "lucide-react";

export function CampBannerSection() {
  return (
    <section className="py-12 md:py-16 bg-[#F0EDD8]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <a
          href="https://akademiya-kanikul.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl bg-[#1E3A6E] transition-transform duration-300 hover:scale-[1.01]"
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-6 md:gap-8 p-6 md:p-12 items-center">

            {/* Левая колонка */}
            <div>
              {/* Метка "Летний лагерь" */}
              <div className="inline-flex items-center self-start mb-5 md:mb-6 px-4 py-1.5 bg-[#F5C842] rounded-md">
                <span className="text-[#1E3A6E] font-['Nunito',sans-serif] font-extrabold text-xs md:text-sm uppercase tracking-widest">
                  Летний лагерь
                </span>
              </div>

              {/* Главный заголовок */}
              <h2 className="font-['Nunito',sans-serif] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-3 md:mb-4">
                <span className="text-white">Лето </span>
                <span className="text-[#F5C842]">в вашем</span>
                <br />
                <span className="text-[#F5C842]">ритме</span>
              </h2>

              {/* Подзаголовок */}
              <p className="font-['Nunito_Sans',sans-serif] text-white/80 text-base md:text-lg leading-relaxed mb-6 md:mb-7 max-w-md">
                Творческий лагерь от Академии Панды в Екатеринбурге — без фиксированных смен, приходите когда удобно вам
              </p>

              {/* Плашки с преимуществами */}
              <div className="flex flex-wrap gap-2 md:gap-2.5 mb-7 md:mb-8">
                <Feature icon={<Utensils className="w-4 h-4" />} text="Питание включено" />
                <Feature icon={<CalendarClock className="w-4 h-4" />} text="Запись за 2 дня" />
                <Feature icon={<TrendingDown className="w-4 h-4" />} text="Больше дней — выгоднее" />
              </div>

              {/* CTA-кнопка */}
              <div className="inline-flex items-center gap-3 self-start bg-[#F5C842] hover:bg-[#D4A82E] text-[#1E3A6E] font-['Nunito',sans-serif] font-extrabold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl transition-colors">
                Узнать подробнее
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Правая колонка — карточки отрядов */}
            <div className="flex flex-col gap-3 md:gap-4">
              <SquadCard
                ageLabel="от 7 лет"
                title="Зелёная мастерская"
                description="Нейрогимнастика и развивающие занятия"
              />
              <SquadCard
                ageLabel="от 9 лет"
                title="Городские художники"
                description="Городской скетчинг, прогулки по Екатеринбургу"
              />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 md:px-3.5 py-2 text-white font-['Nunito_Sans',sans-serif] font-semibold text-sm">
      <span className="text-[#F5C842]">{icon}</span>
      {text}
    </div>
  );
}

function SquadCard({
  ageLabel,
  title,
  description,
}: {
  ageLabel: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/10 border border-white/15 rounded-2xl p-5 md:p-6">
      <div className="inline-block bg-[#F5C842] text-[#1E3A6E] font-['Nunito',sans-serif] font-extrabold text-[11px] px-2.5 py-1 rounded uppercase tracking-wider mb-3">
        {ageLabel}
      </div>
      <p className="font-['Nunito',sans-serif] font-extrabold text-white text-xl md:text-2xl leading-tight mb-2">
        {title}
      </p>
      <p className="font-['Nunito_Sans',sans-serif] text-white/70 text-sm md:text-base leading-snug">
        {description}
      </p>
    </div>
  );
}
