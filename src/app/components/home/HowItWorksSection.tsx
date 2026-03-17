export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Выберите направление",
      description: "Посмотрите наши программы и выберите то, что интересно вашему ребёнку. Не уверены? Мы поможем!",
    },
    {
      number: "2",
      title: "Придите на пробное",
      description: "Первое занятие бесплатно — приходите, познакомьтесь с педагогом и почувствуйте атмосферу.",
    },
    {
      number: "3",
      title: "Решите сами",
      description: "Никакого давления. Если ребёнку понравилось — отлично! Если нет — тоже нормально.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#0c0805] mb-4">
            Как это работает?
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#0c0805] max-w-2xl mx-auto">
            Три простых шага до первого занятия
          </p>
        </div>

        {/* Шаги */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Соединительные линии */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1">
            <div className="absolute left-[16.66%] right-[16.66%] top-0 h-full bg-gradient-to-r from-[#7BAF8E] via-[#F2A65A] to-[#7BAF8E] opacity-20" />
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Номер */}
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7BAF8E] to-[#F2A65A] rounded-full flex items-center justify-center">
                  <span className="font-['Nunito',sans-serif] font-bold text-4xl text-white">
                    {step.number}
                  </span>
                </div>
                {/* Декоративное кольцо */}
                <div className="absolute inset-0 rounded-full border-4 border-[#7BAF8E] opacity-20 scale-125" />
              </div>

              {/* Контент */}
              <div className="text-center">
                <h3 className="font-['Nunito',sans-serif] font-bold text-2xl text-[#0c0805] mb-3">
                  {step.title}
                </h3>
                <p className="font-['Nunito_Sans',sans-serif] text-[#0c0805] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#programs"
            className="inline-block bg-[#F2A65A] hover:bg-[#e89542] text-white px-10 py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Записаться на пробное занятие
          </a>
        </div>
      </div>
    </section>
  );
}
