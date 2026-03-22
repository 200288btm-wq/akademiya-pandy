import { useModal } from "../ModalContext";

export function HowItWorksSection() {
  const { openModal } = useModal();

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
        <div className="text-center mb-16">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#3D3D3D] mb-4">
            {"Как это работает?"}
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#3D3D3D] max-w-2xl mx-auto">
            {"Три простых шага до первого занятия"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1">
            <div className="absolute left-[16.66%] right-[16.66%] top-0 h-full bg-gradient-to-r from-[#7BAF8E] via-[#F2A65A] to-[#7BAF8E] opacity-20" />
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7BAF8E] to-[#F2A65A] rounded-full flex items-center justify-center">
                  <span className="font-['Nunito',sans-serif] font-bold text-4xl text-white">
                    {step.number}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-[#7BAF8E] opacity-20 scale-125" />
              </div>
              <div className="text-center">
                <h3 className="font-['Nunito',sans-serif] font-bold text-2xl text-[#3D3D3D] mb-3">
                  {step.title}
                </h3>
                <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => openModal()}
            className="inline-block bg-[#F2A65A] hover:bg-[#e89542] text-white px-10 py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-lg border-none cursor-pointer"
          >
            {"Записаться на пробное занятие"}
          </button>
        </div>
      </div>
    </section>
  );
}
