import { useModal } from "../ModalContext";

export function HowItWorksSection() {
  const { openModal } = useModal();

  const steps = [
    {
      image: "https://i.ibb.co/4wjS96ks/Gemini-Generated-Image-95p8bf95p8bf95p8-removebg-preview-1.png",
      title: "Выберите направление",
      description: "Посмотрите наши программы и выберите то, что интересно вашему ребёнку. Не уверены? Мы поможем!",
    },
    {
      image: "https://i.ibb.co/rf3CV4Sm/Gemini-Generated-Image-st7kqqst7kqqst7k-removebg-preview-1.png",
      title: "Придите на пробное",
      description: "Первое занятие бесплатно — приходите, познакомьтесь с педагогом и почувствуйте атмосферу.",
    },
    {
      image: "https://i.ibb.co/6R5wHQbW/Gemini-Generated-Image-sipu2ssipu2ssipu-removebg-preview-1.png",
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
          {/* Пунктирная линия */}
          <div className="hidden md:block absolute top-14 left-0 right-0 pointer-events-none">
            <svg width="100%" height="4" xmlns="http://www.w3.org/2000/svg">
              <line x1="16.66%" y1="2" x2="83.33%" y2="2"
                stroke="#7BAF8E" strokeWidth="2"
                strokeDasharray="8 6" strokeOpacity="0.4" />
            </svg>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="w-28 h-28 mx-auto mb-6 relative"
                style={{ filter: "drop-shadow(1px 3px 6px rgba(0,0,0,0.15))" }}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
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
