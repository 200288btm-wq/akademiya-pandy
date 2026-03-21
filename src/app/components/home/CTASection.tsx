import { useState } from "react";
import { MessageCircle, X, Check } from "lucide-react";

export function CTASection() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!name || !phone || !agreed) return;

    const message = `\u{1F43C} \u041d\u043e\u0432\u0430\u044f \u0437\u0430\u044f\u0432\u043a\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430!\n\n\u{1F464} \u0418\u043c\u044f: ${name}\n\u{1F4F1} \u0422\u0435\u043b\u0435\u0444\u043e\u043d: ${phone}\n\u23F0 \u0423\u0434\u043e\u0431\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f: ${time || "\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e"}\n\n\u{1F4CD} \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u044f \u041f\u0430\u043d\u0434\u044b, \u0443\u043b. \u0425\u0443\u0442\u043e\u0440\u0441\u043a\u0430\u044f 1`;

    try {
      const token = "TELEGRAM_BOT_TOKEN";
      const chatId = "TELEGRAM_CHAT_ID";
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      });
    } catch (e) {
      console.log("Send error", e);
    }

    setSent(true);
    setTimeout(() => {
      setShowModal(false);
      setSent(false);
      setName("");
      setPhone("");
      setTime("");
      setAgreed(false);
    }, 2500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#7BAF8E] to-[#6a9e7d] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-white mb-4">
          {"Приходите познакомиться"}
        </h2>
        <p className="font-['Nunito_Sans',sans-serif] text-xl text-white mb-8 opacity-90">
          {"Первое занятие бесплатно — без давления и обязательств."}
          <br />
          {"Просто приходите и посмотрите, как всё устроено."}
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="inline-block bg-[#F2A65A] hover:bg-[#e89542] text-white px-10 py-5 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl mb-8 cursor-pointer border-none"
        >
          {"Заказать звонок"}
        </button>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
          <p className="font-['Nunito_Sans',sans-serif] text-sm opacity-80">
            {"Или напишите нам:"}
          </p>
          <div className="flex gap-4">
            <a
              href="https://t.me/olechkamom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all text-white"
            >
              <MessageCircle size={20} />
              <span className="font-['Nunito_Sans',sans-serif] font-semibold">{"Telegram"}</span>
            </a>
            <a
              href="https://vk.com/im/convo/-231900253?entrypoint=community_page&tab=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all text-white"
            >
              <MessageCircle size={20} />
              <span className="font-['Nunito_Sans',sans-serif] font-semibold">{"ВКонтакте"}</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white border-opacity-20">
          <p className="font-['Nunito_Sans',sans-serif] text-white opacity-80">
            {"📍 г. Екатеринбург, ул. Хуторская 1 — Ботанический район"}
          </p>
        </div>
      </div>

      {/* Модальное окно */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#7BAF8E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-white" />
                </div>
                <h3 className="font-['Nunito',sans-serif] font-bold text-2xl text-[#0c0805] mb-2">
                  {"Заявка отправлена!"}
                </h3>
                <p className="font-['Nunito_Sans',sans-serif] text-[#4a4a4a]">
                  {"Перезвоним вам в удобное время. Спасибо!"}
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-['Nunito',sans-serif] font-bold text-2xl text-[#0c0805] mb-2">
                  {"Заказать звонок"}
                </h3>
                <p className="font-['Nunito_Sans',sans-serif] text-[#4a4a4a] mb-6">
                  {"Оставьте номер — перезвоним в течение часа в рабочее время"}
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="font-['Nunito_Sans',sans-serif] font-semibold text-[#0c0805] mb-1 block text-sm">
                      {"Ваше имя"}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Как вас зовут?"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#7BAF8E] focus:outline-none font-['Nunito_Sans',sans-serif] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-['Nunito_Sans',sans-serif] font-semibold text-[#0c0805] mb-1 block text-sm">
                      {"Телефон"}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#7BAF8E] focus:outline-none font-['Nunito_Sans',sans-serif] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-['Nunito_Sans',sans-serif] font-semibold text-[#0c0805] mb-1 block text-sm">
                      {"Удобное время для звонка"}
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#7BAF8E] focus:outline-none font-['Nunito_Sans',sans-serif] transition-colors"
                    >
                      <option value="">{"Выберите время"}</option>
                      <option>{"Утром (9:00 - 12:00)"}</option>
                      <option>{"Днём (12:00 - 17:00)"}</option>
                      <option>{"Вечером (17:00 - 20:00)"}</option>
                    </select>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <div
                      onClick={() => setAgreed(!agreed)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${agreed ? "bg-[#7BAF8E] border-[#7BAF8E]" : "border-gray-300"}`}
                    >
                      {agreed && <Check size={12} className="text-white" />}
                    </div>
                    <span className="font-['Nunito_Sans',sans-serif] text-sm text-[#4a4a4a]">
                      {"Я согласен(а) на обработку персональных данных"}
                    </span>
                  </label>

                  <button
                    onClick={handleSubmit}
                    disabled={!name || !phone || !agreed}
                    className={`w-full py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all ${name && phone && agreed ? "bg-[#F2A65A] hover:bg-[#e89542] text-white transform hover:scale-105 shadow-lg" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                  >
                    {"Отправить заявку"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
