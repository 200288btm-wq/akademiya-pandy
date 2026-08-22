import { useModal } from "../ModalContext";
import { useContent } from "../../content/ContentContext";

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

export function CTASection() {
  const { openModal } = useModal();
  const { home, contacts } = useContent();
  const cta = home.cta;

  if (!cta.enabled) return null;

  const textLines = cta.text.split("\n").filter((line) => line.trim() !== "");

  return (
    <section className="py-20 bg-[#7BAF8E] relative overflow-hidden">

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-white mb-4">
          {cta.title}
        </h2>
        <p className="font-['Nunito_Sans',sans-serif] text-xl text-white mb-8 opacity-90">
          {textLines.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>

        <button
          onClick={() => openModal()}
          className="inline-block bg-[#F2A65A] hover:bg-[#e89542] text-white px-10 py-5 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl mb-8 cursor-pointer border-none"
        >
          {cta.buttonText}
        </button>

        <div className="flex flex-col items-center gap-4">
          <p className="font-['Nunito_Sans',sans-serif] text-white font-bold text-xl opacity-95">
            {cta.socialText}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {contacts.telegram && (
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-[#3D7A52] hover:bg-opacity-90 px-6 py-3 rounded-xl transition-all font-['Nunito_Sans',sans-serif] font-bold shadow-md hover:scale-105 transform text-base"
              >
                <TelegramIcon />
                {"Написать в Telegram"}
              </a>
            )}
            {contacts.vk && (
              <a
                href={contacts.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-[#3D7A52] hover:bg-opacity-90 px-6 py-3 rounded-xl transition-all font-['Nunito_Sans',sans-serif] font-bold shadow-md hover:scale-105 transform text-base"
              >
                <VKIcon />
                {"Написать ВКонтакте"}
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white border-opacity-20">
          <p className="font-['Nunito_Sans',sans-serif] text-white opacity-80">
            {`📍 ${contacts.address}`}
          </p>
        </div>
      </div>
    </section>
  );
}
