import { Layout } from "../components/Layout";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export function Contacts() {
  return (
    <Layout>
      {/* Заголовок */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F0EDD8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-['Nunito',sans-serif] font-bold text-5xl md:text-6xl text-[#0c0805] mb-6">
            Приходите познакомиться
          </h1>
          <p className="font-['Nunito_Sans',sans-serif] text-xl text-[#0c0805] leading-relaxed">
            Мы в Ботаническом районе Екатеринбурга — рядом с ТЦ «Дирижабль».
            <br />
            Будем рады вас видеть!
          </p>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ContactCard
              icon={<MapPin size={28} />}
              title="Адрес"
              content="Екатеринбург, Ботанический район, рядом с ТЦ «Дирижабль»"
              color="#7BAF8E"
            />
            <ContactCard
              icon={<Phone size={28} />}
              title="Телефон"
              content="+7 (900) 000-00-00"
              color="#F2A65A"
              link="tel:+79000000000"
            />
            <ContactCard
              icon={<Mail size={28} />}
              title="Email"
              content="info@akademiya-pandy.ru"
              color="#7BAF8E"
              link="mailto:info@akademiya-pandy.ru"
            />
            <ContactCard
              icon={<Clock size={28} />}
              title="Часы работы"
              content="Пн-Вс: 9:00 - 20:00"
              color="#F2A65A"
            />
          </div>

          {/* Карта */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="font-['Nunito',sans-serif] font-bold text-3xl text-[#0c0805] mb-6">
              Как нас найти
            </h2>
            <div className="aspect-video bg-[#F0EDD8] rounded-2xl overflow-hidden mb-6">
              {/* Здесь будет интерактивная карта Яндекс */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-[#7BAF8E] mx-auto mb-3" />
                  <p className="font-['Nunito_Sans',sans-serif] text-[#0c0805]">
                    Интерактивная карта
                    <br />
                    <span className="text-sm opacity-60">
                      Екатеринбург, Ботанический район
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F0EDD8] rounded-2xl p-6">
                <div className="text-2xl mb-2">🚗</div>
                <h3 className="font-['Nunito',sans-serif] font-bold mb-2">На машине</h3>
                <p className="font-['Nunito_Sans',sans-serif] text-sm text-[#0c0805]">
                  Удобная парковка рядом с центром
                </p>
              </div>
              <div className="bg-[#F0EDD8] rounded-2xl p-6">
                <div className="text-2xl mb-2">🚌</div>
                <h3 className="font-['Nunito',sans-serif] font-bold mb-2">На автобусе</h3>
                <p className="font-['Nunito_Sans',sans-serif] text-sm text-[#0c0805]">
                  Остановка в 2 минутах ходьбы
                </p>
              </div>
              <div className="bg-[#F0EDD8] rounded-2xl p-6">
                <div className="text-2xl mb-2">👟</div>
                <h3 className="font-['Nunito',sans-serif] font-bold mb-2">Пешком</h3>
                <p className="font-['Nunito_Sans',sans-serif] text-sm text-[#0c0805]">
                  Безопасный район для прогулок
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Nunito',sans-serif] font-bold text-4xl text-[#0c0805] mb-4">
              Запишитесь на пробное занятие
            </h2>
            <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#0c0805]">
              Заполните форму, и мы перезвоним в течение часа
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="font-['Nunito_Sans',sans-serif] font-semibold text-[#0c0805] mb-2 block">
                Ваше имя
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#7BAF8E] focus:outline-none font-['Nunito_Sans',sans-serif] transition-colors"
                placeholder="Как вас зовут?"
              />
            </div>

            <div>
              <label className="font-['Nunito_Sans',sans-serif] font-semibold text-[#0c0805] mb-2 block">
                Телефон
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#7BAF8E] focus:outline-none font-['Nunito_Sans',sans-serif] transition-colors"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div>
              <label className="font-['Nunito_Sans',sans-serif] font-semibold text-[#0c0805] mb-2 block">
                Выберите направление
              </label>
              <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#7BAF8E] focus:outline-none font-['Nunito_Sans',sans-serif] transition-colors">
                <option>Смышлёная Панда</option>
                <option>Пушистые художники</option>
                <option>Секреты миниатюриста</option>
                <option>Эксплорики</option>
                <option>Штаб Панды</option>
                <option>Мягкие лапки</option>
                <option>Не знаю — помогите выбрать</option>
              </select>
            </div>

            <div>
              <label className="font-['Nunito_Sans',sans-serif] font-semibold text-[#0c0805] mb-2 block">
                Удобное время для звонка
              </label>
              <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#7BAF8E] focus:outline-none font-['Nunito_Sans',sans-serif] transition-colors">
                <option>Утром</option>
                <option>Днём</option>
                <option>Вечером</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F2A65A] hover:bg-[#e89542] text-white px-8 py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Записаться на пробное занятие
            </button>

            <p className="font-['Nunito_Sans',sans-serif] text-sm text-[#0c0805] text-center opacity-60">
              Перезвоним в течение часа в рабочее время
            </p>
          </form>
        </div>
      </section>

      {/* Социальные сети */}
      <section className="py-20 bg-gradient-to-br from-[#7BAF8E] to-[#6a9e7d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl text-white mb-4">
            Или напишите нам
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-xl text-white mb-8 opacity-90">
            Мы всегда на связи и с радостью ответим на все ваши вопросы
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

function ContactCard({ icon, title, content, color, link }: any) {
  const Content = () => (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all h-full">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: `${color}20`, color: color }}
      >
        {icon}
      </div>
      <h3 className="font-['Nunito',sans-serif] font-bold text-lg text-[#0c0805] mb-2">
        {title}
      </h3>
      <p className="font-['Nunito_Sans',sans-serif] text-[#0c0805]">{content}</p>
    </div>
  );

  return link ? (
    <a href={link} className="block">
      <Content />
    </a>
  ) : (
    <Content />
  );
}
