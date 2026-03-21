import { useState } from "react";
import { X, Check } from "lucide-react";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  programName?: string;
}

export function CallModal({ isOpen, onClose, programName }: CallModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!name || !phone || !agreed) return;

    const program = programName ? `\nНаправление: ${programName}` : "";
    const message = `🐼 Новая заявка с сайта!\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}\n⏰ Удобное время: ${time || "Не указано"}${program}\n\n📍 Академия Панды, ул. Хуторская 1`;

    try {
      const token = import.meta.env.VITE_TG_TOKEN;
      const chatId = import.meta.env.VITE_TG_CHAT;
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
      onClose();
      setSent(false);
      setName("");
      setPhone("");
      setTime("");
      setAgreed(false);
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
        <button
          onClick={onClose}
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
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors cursor-pointer ${agreed ? "bg-[#7BAF8E] border-[#7BAF8E]" : "border-gray-300"}`}
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
                className={`w-full py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all ${name && phone && agreed ? "bg-[#F2A65A] hover:bg-[#e89542] text-white transform hover:scale-105 shadow-lg cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
              >
                {"Отправить заявку"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
