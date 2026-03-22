import { Layout } from "../components/Layout";
import { MapPin, Phone, Clock } from "lucide-react";
import { useModal } from "../components/ModalContext";

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

export function Contacts() {
  const { openModal } = useModal();
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-white to-[#F0EDD8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-['Nunito',sans-serif] font-bold text-5xl md:text-6xl text-[#0c0805] mb-6">
            {"Приходите познакомиться"}
          </h1>
          <p className="font-['Nunito_Sans',sans-serif] text-xl text-[#0c0805] leading-relaxed">
            {"Мы в Екатеринбурге, ул. Хуторская 1, рядом с домом, в Ботаническом районе."}
            <br />
            {"Будем рады вас видеть!"}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <ContactCard
              icon={<MapPin size={28} />}
              title={"Адрес"}
              content={"г. Екатеринбург, ул. Хуторская 1"}
              color="#7BAF8E"
              link="https://yandex.ru/maps/?text=Екатеринбург+Хуторская+1"
            />
            <ContactCard
              icon={<Phone size={28} />}
              title={"Телефон"}
              content={"+7 (922) 657-01-42"}
              color="#F2A65A"
              link="tel:+79226570142"
            />
            <ContactCard
              icon={<Clock size={28} />}
              title={"Часы работы"}
              content={"Пн-Вс: 9:00 - 20:00"}
              color="#7BAF8E"
            />
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="font-['Nunito',sans-serif] font-bold text-3xl text-[#0c0805] mb-6">
              {"Как нас найти"}
            </h2>
            <div className="aspect-video bg-[#F0EDD8] rounded-2xl overflow-hidden mb-6">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=60.641523%2C56.802971&z=17&pt=60.641523%2C56.802971%2Cpm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Карта"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F0EDD8] rounded-2xl p-6">
                <div className="text-2xl mb-2">{"🚗"}</div>
                <h3 className="font-['Nunito',sans-serif] font-bold mb-2">{"На машине"}</h3>
                <p className="font-['Nunito_Sans',sans-serif] text-sm text-[#0c0805]">
                  {"Удобная парковка рядом с центром"}
                </p>
              </div>
              <div className="bg-[#F0EDD8] rounded-2xl p-6">
                <div className="text-2xl mb-2">{"🚌"}</div>
                <h3 className="font-['Nunito',sans-serif] font-bold mb-2">{"На автобусе"}</h3>
                <p className="font-['Nunito_Sans',sans-serif] text-sm text-[#0c0805]">
                  {"Остановка в 2 минутах ходьбы"}
                </p>
              </div>
              <div className="bg-[#F0EDD8] rounded-2xl p-6">
                <div className="text-2xl mb-2">{"👟"}</div>
                <h3 className="font-['Nunito',sans-serif] font-bold mb-2">{"Пешком"}</h3>
                <p className="font-['Nunito_Sans',sans-serif] text-sm text-[#0c0805]">
                  {"Безопасный район для прогулок"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl text-[#0c0805] mb-6">
            {"Чтобы познакомиться, просто приходите на пробное занятие"}
          </h2>
          <button
            onClick={() => openModal()}
            className="inline-block bg-[#F2A65A] hover:bg-[#e89542] text-white px-10 py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-lg border-none cursor-pointer"
          >
            {"Записаться"}
          </button>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#7BAF8E] to-[#6a9e7d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl text-white mb-4">
            {"Или напишите нам"}
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-xl text-white mb-8 opacity-90">
            {"Мы всегда на связи и с радостью ответим на все ваши вопросы"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/olechkamom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-[#3D7A52] hover:bg-opacity-90 px-6 py-3 rounded-xl transition-all font-['Nunito_Sans',sans-serif] font-bold shadow-md hover:scale-105 transform"
            >
              <TelegramIcon />
              {"Написать в Telegram"}
            </a>
            <a
              href="https://vk.com/im/convo/-231900253?entrypoint=community_page&tab=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-[#3D7A52] hover:bg-opacity-90 px-6 py-3 rounded-xl transition-all font-['Nunito_Sans',sans-serif] font-bold shadow-md hover:scale-105 transform"
            >
              <VKIcon />
              {"Написать ВКонтакте"}
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
    <a href={link} className="block" target="_blank" rel="noopener noreferrer">
      <Content />
    </a>
  ) : (
    <Content />
  );
}
