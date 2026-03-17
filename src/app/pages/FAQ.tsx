import { useState } from "react";
import { Layout } from "../components/Layout";
import { ChevronDown, MessageCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Где находится центр?",
      answer: "Мы находимся в Ботаническом районе Екатеринбурга, рядом с ТЦ «Дирижабль». Удобно добираться как на машине (есть парковка), так и на общественном транспорте (остановка в 2 минутах ходьбы).",
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
      answer: "У каждого направления есть рекомендуемый возраст: Смышлёная Панда и Эксплорики — 4-6 лет, Пушистые художники — 7-8+ лет, Мягкие лапки — 5-8 лет, Секреты миниатюриста и Штаб Панды — 9+ лет. Но это гибкие рамки, мы всегда смотрим на готовность конкретного ребёнка.",
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
          <h1 className="font-['Nunito',sans-serif] font-bold text-5xl md:text-6xl text-[#0c0805] mb-6">
            Часто задаваемые вопросы
          </h1>
          <p className="font-['Nunito_Sans',sans-serif] text-xl text-[#0c0805] leading-relaxed">
            Чтобы вы чувствовали себя уверенно и знали все детали о нашем центре
          </p>
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
                  <span className="font-['Nunito',sans-serif] font-bold text-lg md:text-xl text-[#0c0805] pr-4">
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
                    <p className="font-['Nunito_Sans',sans-serif] text-[#0c0805] text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#7BAF8E] to-[#6a9e7d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl text-white mb-4">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-xl text-white mb-8 opacity-90">
            Напишите нам — ответим в ближайшее время
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-3 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-4 rounded-lg transition-all text-white font-['Nunito_Sans',sans-serif] font-semibold"
            >
              <MessageCircle size={24} />
              Telegram
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-4 rounded-lg transition-all text-white font-['Nunito_Sans',sans-serif] font-semibold"
            >
              <MessageCircle size={24} />
              WhatsApp
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-4 rounded-lg transition-all text-white font-['Nunito_Sans',sans-serif] font-semibold"
            >
              <MessageCircle size={24} />
              ВКонтакте
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
