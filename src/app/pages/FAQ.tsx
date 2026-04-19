import { useState } from "react";
import { Layout } from "../components/Layout";
import { ChevronDown } from "lucide-react";

function TelegramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#29A8E0"/>
      <path d="M17.5 7L5 11.5L9.5 13L11 17.5L13.5 14.5L17 16.5L17.5 7Z" fill="white"/>
      <path d="M9.5 13L11 17.5L13 14L9.5 13Z" fill="#C8DAEA"/>
    </svg>
  );
}

function VKIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#0077FF"/>
      <path d="M12.9 15.5C8.8 15.5 6.5 12.8 6.4 8.2H8.4C8.5 11.7 10 13.1 11.2 13.4V8.2H13.1V11C14.3 10.9 15.5 9.6 15.9 8.2H17.8C17.5 9.9 16.2 11.2 15.3 11.7C16.2 12.1 17.7 13.3 18.2 15.5H16.1C15.7 14.2 14.6 13.2 13.1 13.1V15.5H12.9Z" fill="white"/>
    </svg>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Где находится центр?",
      answer: "Мы находимся в Ботаническом районе Екатеринбурга, рядом с ТЦ «Дирижабль». Удобно добираться как на машине (есть парковка), так и на общественном транспорте (остановка в 10 минутах ходьбы).",
    },
    {
      question: "Сколько детей в группе?",
      answer: "В наших группах до 10 детей. Это оптимальное количество, чтобы педагог мог уделить внимание каждому ребёнку, при этом сохраняя динамику групповых занятий и возможность общения со сверстниками.",
    },
    {
      question: "Нужна ли подготовка для первого занятия?",
      answer: "Нет, никакой подготовки не требуется! Мы принимаем детей с любым уровнем подготовки. Педагог подберёт задания под каждого ребёнка, учитывая его возраст и навыки. Главное — желание и интерес.",
    },
    {
      question: "Как проходит пробное занятие?",
      answer: "Пробное занятие длится столько же, сколько обычное (от 45 до 90 минут в зависимости от программы). Ребёнок участвует во всех активностях вместе с группой. Родители могут остаться и понаблюдать или подождать в холле — как вам удобнее.",
    },
    {
      question: "Можно ли попробовать перед покупкой абонемента?",
      answer: "Да, конечно! Первое занятие по любому направлению полностью бесплатно. Мы считаем, что родители и ребёнок должны сначала познакомиться с педагогом, почувствовать атмосферу, и только потом принимать решение.",
    },
    {
      question: "Как выбрать подходящее направление для ребёнка?",
      answer: "Напишите нам в Telegram, WhatsApp или позвоните — мы с радостью поможем! Расспросим про интересы ребёнка, его возраст и темперамент, и подскажем, какое направление может подойти лучше всего. А потом можно прийти на пробное и убедиться.",
    },
    {
      question: "Есть ли занятия в выходные?",
      answer: "Да, мы работаем в выходные! Расписание зависит от направления. Точное время занятий можно уточнить по телефону или при записи на пробное занятие.",
    },
    {
      question: "Какой возраст подходит для каждого направления?",
      answer: "У каждого направления есть рекомендуемый возраст: Смышлёная Панда и Эксплорики — 4-6 лет, Пушистые художники — 9+ лет, Мягкие лапки — 5-8 лет, Секреты миниатюриста — 9+ лет, Стратеги — 7-8 лет. Но это гибкие рамки, мы всегда смотрим на готовность конкретного ребёнка.",
    },
    {
      question: "Что взять с собой на первое занятие?",
      answer: "Все материалы мы предоставляем. Возьмите с собой сменную обувь для ребёнка, хорошее настроение и открытость к новому опыту. Если ребёнок очень привязан к маме, можно взять любимую игрушку для поддержки.",
    },
  ];

  return (
    <Layout>
      {/* Заголовок */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F0EDD8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-['Nunito',sans-serif] font-bold text-5xl md:text-6xl text-[#3D3D3D] mb-6">
            Часто задаваемые вопросы
          </h1>
        </div>
      </section>

      {/* Аккордеон */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-['Nunito',sans-serif] font-bold text-lg md:text-xl text-[#3D3D3D] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={28}
                    className={`text-[#7BAF8E] transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#7BAF8E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl text-white mb-4">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-xl text-white mb-8 opacity-90">
            Напишите нам — ответим в ближайшее время
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/olechkamom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-[#3D7A52] hover:bg-opacity-90 px-6 py-3 rounded-xl transition-all font-['Nunito_Sans',sans-serif] font-bold shadow-md hover:scale-105 transform"
            >
              <TelegramIcon />
              Написать в Telegram
            </a>
            <a
              href="https://vk.com/im/convo/-231900253?entrypoint=community_page&tab=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-[#3D7A52] hover:bg-opacity-90 px-6 py-3 rounded-xl transition-all font-['Nunito_Sans',sans-serif] font-bold shadow-md hover:scale-105 transform"
            >
              <VKIcon />
              Написать ВКонтакте
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
