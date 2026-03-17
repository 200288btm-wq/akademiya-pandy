import { MessageCircle, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#7BAF8E] to-[#6a9e7d] relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Заголовок */}
        <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-white mb-4">
          Приходите познакомиться
        </h2>
        <p className="font-['Nunito_Sans',sans-serif] text-xl text-white mb-8 opacity-90">
          Первое занятие бесплатно — без давления и обязательств.
          <br />
          Просто приходите и посмотрите, как всё устроено.
        </p>

        {/* Кнопка */}
        <a
          href="tel:+79000000000"
          className="inline-block bg-[#F2A65A] hover:bg-[#e89542] text-white px-10 py-5 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl mb-8"
        >
          Записаться на пробное занятие
        </a>

        {/* Контакты */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
          <p className="font-['Nunito_Sans',sans-serif] text-sm opacity-80">
            Или напишите нам:
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all"
            >
              <MessageCircle size={20} />
              <span className="font-['Nunito_Sans',sans-serif] font-semibold">Telegram</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all"
            >
              <Phone size={20} />
              <span className="font-['Nunito_Sans',sans-serif] font-semibold">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Адрес */}
        <div className="mt-8 pt-8 border-t border-white border-opacity-20">
          <p className="font-['Nunito_Sans',sans-serif] text-white opacity-80">
            📍 Екатеринбург, Ботанический район, рядом с ТЦ «Дирижабль»
          </p>
        </div>
      </div>
    </section>
  );
}
