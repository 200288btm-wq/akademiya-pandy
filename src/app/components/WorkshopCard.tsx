// Карточка мастер-класса. Используется и в карусели на главной,
// и в списке на отдельной странице — отличается только шириной.
//
// Описание на карточке обрезано по высоте: у некоторых мастер-классов оно
// на полтора экрана, и без обрезки одна карточка растягивала весь ряд.
// Полный текст открывается окном — по кнопке «подробнее...» или по фотографии.

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Clock, Users, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useModal } from "./ModalContext";
import { ClampedText, RichText } from "./RichText";
import type { Workshop } from "../data/defaults";

const BADGE_COLORS: Record<string, string> = {
  accent: "#F2A65A",
  green: "#7BAF8E",
  purple: "#B8A9D4",
  gray: "#9A9A9A",
};

export function WorkshopCard({
  workshop,
  buttonText,
  compact = false,
  // Как запись называется в пометке к заявке: «Мастер-класс «…»»
  // или «Мероприятие «…»». Разделы устроены одинаково и используют
  // одну карточку, отличается только это слово.
  leadPrefix = "Мастер-класс",
}: {
  workshop: Workshop;
  buttonText: string;
  compact?: boolean;
  leadPrefix?: string;
}) {
  const { openModal } = useModal();
  const [photo, setPhoto] = useState(0);
  const [full, setFull] = useState(false);

  const images = workshop.images;
  const total = images.length;
  const badgeColor = BADGE_COLORS[workshop.badgeStyle] || BADGE_COLORS.accent;

  const flip = (step: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setPhoto((current) => (current + step + total) % total);
  };

  // На главной вся карточка — ссылка на страницу мастер-классов,
  // поэтому каждое нажатие внутри неё нужно останавливать отдельно.
  const stop = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const openFull = (event: React.MouseEvent) => {
    stop(event);
    setFull(true);
  };

  const signUp = (event: React.MouseEvent) => {
    stop(event);
    setFull(false);
    openModal(`${leadPrefix} «${workshop.name}»`);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col">
      <div className={`relative overflow-hidden bg-[#F0EDD8] ${compact ? "h-44" : "h-56"}`}>
        {total > 0 ? (
          <img
            src={images[Math.min(photo, total - 1)]}
            alt={workshop.name}
            onClick={workshop.description ? openFull : undefined}
            className={`w-full h-full object-cover ${workshop.description ? "cursor-pointer" : ""}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl opacity-40">🎨</div>
        )}

        {total > 1 && (
          <>
            <button
              onClick={(e) => flip(-1, e)}
              aria-label="Предыдущее фото"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 hover:bg-white flex items-center justify-center border-none cursor-pointer"
            >
              <ChevronLeft size={18} color="#3D3D3D" />
            </button>
            <button
              onClick={(e) => flip(1, e)}
              aria-label="Следующее фото"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 hover:bg-white flex items-center justify-center border-none cursor-pointer"
            >
              <ChevronRight size={18} color="#3D3D3D" />
            </button>
          </>
        )}

        {workshop.badge && (
          <div className="absolute top-3 left-3">
            <span
              className="px-3 py-1 rounded-full text-xs font-['Nunito_Sans',sans-serif] font-bold text-white shadow"
              style={{ backgroundColor: badgeColor }}
            >
              {workshop.badge}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-['Nunito',sans-serif] font-bold text-xl text-[#3D3D3D] leading-tight">
            {workshop.name}
          </h3>
          {workshop.age && (
            <span className="font-['Nunito_Sans',sans-serif] text-xs font-semibold px-2 py-1 rounded-full bg-[#F0EDD8] text-[#3D3D3D] whitespace-nowrap">
              {workshop.age}
            </span>
          )}
        </div>

        {workshop.description && (
          <ClampedText
            text={workshop.description}
            lines={compact ? 4 : 5}
            onMore={openFull}
            className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] leading-relaxed text-sm flex-1"
          />
        )}

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-['Nunito_Sans',sans-serif] text-[#3D3D3D] opacity-70">
          {workshop.duration && (
            <span className="flex items-center gap-1">
              <Clock size={15} /> {workshop.duration}
            </span>
          )}
          {workshop.maxParticipants && (
            <span className="flex items-center gap-1">
              <Users size={15} /> {workshop.maxParticipants}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          {workshop.price && (
            <span className="font-['Nunito',sans-serif] font-bold text-xl text-[#3D3D3D] whitespace-nowrap">
              {workshop.price}
            </span>
          )}
          <button
            onClick={signUp}
            className="ml-auto bg-[#F2A65A] hover:bg-[#e89542] text-white px-5 py-2.5 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold transition-colors border-none cursor-pointer whitespace-nowrap"
          >
            {buttonText}
          </button>
        </div>
      </div>

      {full && (
        <WorkshopFull
          workshop={workshop}
          buttonText={buttonText}
          badgeColor={badgeColor}
          onClose={() => setFull(false)}
          onSignUp={signUp}
        />
      )}
    </div>
  );
}

// Окно с полным описанием.
//
// Рисуется порталом в body: карточка живёт внутри карусели с горизонтальной
// прокруткой, и окно, оставленное внутри неё, уезжало бы вместе с лентой.
function WorkshopFull({
  workshop,
  buttonText,
  badgeColor,
  onClose,
  onSignUp,
}: {
  workshop: Workshop;
  buttonText: string;
  badgeColor: string;
  onClose: () => void;
  onSignUp: (event: React.MouseEvent) => void;
}) {
  const [photo, setPhoto] = useState(0);
  const total = workshop.images.length;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // Страница под окном не должна прокручиваться.
    const kept = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = kept;
    };
  }, [onClose]);

  const flip = (step: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setPhoto((current) => (current + step + total) % total);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-start md:items-center justify-center p-4 overflow-y-auto"
      onClick={(event) => {
        event.stopPropagation();
        onClose();
      }}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl my-auto overflow-hidden shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative">
          {total > 0 ? (
            // В окне фотографию смотрят, а не узнают по краю карточки,
            // поэтому здесь она показывается целиком и в своих пропорциях.
            // На самой карточке остаётся обрезка: там важнее ровная сетка.
            <div className="w-full h-56 md:h-72 bg-[#F0EDD8] flex items-center justify-center">
              <img
                src={workshop.images[Math.min(photo, total - 1)]}
                alt={workshop.name}
                className="max-h-full max-w-full w-auto h-auto object-contain"
              />
            </div>
          ) : (
            <div className="w-full h-40 bg-[#F0EDD8] flex items-center justify-center text-5xl opacity-40">
              🎨
            </div>
          )}

          {total > 1 && (
            <>
              <button
                onClick={(e) => flip(-1, e)}
                aria-label="Предыдущее фото"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white flex items-center justify-center border-none cursor-pointer"
              >
                <ChevronLeft size={20} color="#3D3D3D" />
              </button>
              <button
                onClick={(e) => flip(1, e)}
                aria-label="Следующее фото"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white flex items-center justify-center border-none cursor-pointer"
              >
                <ChevronRight size={20} color="#3D3D3D" />
              </button>
            </>
          )}

          <button
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            aria-label="Закрыть"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center border-none cursor-pointer shadow"
          >
            <X size={18} color="#3D3D3D" />
          </button>

          {workshop.badge && (
            <span
              className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-['Nunito_Sans',sans-serif] font-bold text-white shadow"
              style={{ backgroundColor: badgeColor }}
            >
              {workshop.badge}
            </span>
          )}
        </div>

        <div className="p-6 md:p-8">
          <h3 className="font-['Nunito',sans-serif] font-bold text-2xl text-[#3D3D3D] mb-3">
            {workshop.name}
          </h3>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-['Nunito_Sans',sans-serif] text-[#3D3D3D] opacity-70 mb-4">
            {workshop.age && <span>{workshop.age}</span>}
            {workshop.duration && (
              <span className="flex items-center gap-1">
                <Clock size={15} /> {workshop.duration}
              </span>
            )}
            {workshop.maxParticipants && (
              <span className="flex items-center gap-1">
                <Users size={15} /> {workshop.maxParticipants}
              </span>
            )}
          </div>

          <RichText
            text={workshop.description}
            className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] leading-relaxed"
          />

          <div className="flex items-center justify-between gap-3 mt-6">
            {workshop.price && (
              <span className="font-['Nunito',sans-serif] font-bold text-xl text-[#3D3D3D] whitespace-nowrap">
                {workshop.price}
              </span>
            )}
            <button
              onClick={onSignUp}
              className="ml-auto bg-[#F2A65A] hover:bg-[#e89542] text-white px-6 py-3 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold transition-colors border-none cursor-pointer"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
