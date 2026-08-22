import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useContent } from "../../content/ContentContext";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { faq } = useContent();
  const faqs = faq.filter((item) => item.showOnHome);

  if (faqs.length === 0) return null;

  return (
    <section className="py-20 relative bg-[#F0EDD8]">
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
