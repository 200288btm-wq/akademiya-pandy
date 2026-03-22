import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Где находится центр?",
      answer: "Мы находимся в Ботаническом районе Екатеринбурга, рядом с ТЦ «Дирижабль». Удобно добираться как на машине, так и на общественном транспорте.",
    },
    {
      question: "Сколько детей в группе?",
      answer: "В наших группах до 10 детей. Это позволяет педагогу уделить внимание каждому ребёнку и создать комфортную атмосферу.",
    },
    {
      question: "Нужна ли подготовка для первого занятия?",
      answer: "Нет, никакой подготовки не требуется! Мы принимаем детей с любым уровнем подготовки. Педагог подберёт задания под каждого ребёнка.",
    },
    {
      question: "Как проходит пробное занятие?",
      answer: "Пробное занятие длится столько же, сколько обычное. Ребёнок участвует во всех активностях вместе с группой. Вы можете остаться и понаблюдать или подождать в холле.",
    },
    {
      question: "Можно ли попробовать перед покупкой абонемента?",
      answer: "Да, конечно! Первое занятие по любому направлению полностью бесплатно. Приходите, познакомьтесь с педагогом и посмотрите, как всё устроено.",
    },
    {
      question: "Как выбрать подходящее направление для ребёнка?",
      answer: "Напишите нам в Telegram или WhatsApp — мы поможем! Расскажем про каждое направление и поможем выбрать то, что подойдёт именно вашему ребёнку.",
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#7BAF8E] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F2A65A] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#3D3D3D] mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#3D3D3D]">
            Ответы на самые популярные вопросы родителей
          </p>
        </div>

        {/* Аккордеон */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-['Nunito',sans-serif] font-bold text-lg text-[#3D3D3D] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-[#7BAF8E] transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
