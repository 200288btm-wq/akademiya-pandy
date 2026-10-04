// Карточка мастер-класса. Используется и в карусели на главной,
// и в списке на отдельной странице — отличается только шириной.
//
// Описание на карточке обрезано по высоте: у некоторых мастер-классов оно
// на полтора экрана, и без обрезки одна карточка растягивала весь ряд.
// Полный текст открывается окном — по кнопке «подробнее...» или по фотографии.

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Clock, Users, ChevronLeft, ChevronRight, X, CalendarDays, Palette, Ruler, User } from "lucide-react";
import { useModal } from "./ModalContext";
import { ClampedText, RichText } from "./RichText";
import type { CardKind, Workshop } from "../data/defaults";

const BADGE_COLORS: Record<string, string> = {
  accent: "#F2A65A",
  green: "#7BAF8E",
  purple: "#B8A9D4",
  gray: "#9A9A9A",
};

// Витрина: забронированную и проданную работу видно сразу по плашке,
// она заменяет обычную.
const STATUS_BADGE: Record<string, { text: string; color: string }> = {
  reserved: { text: "Забронировано", color: BADGE_COLORS.purple },
  sold: { text: "Продано", color: BADGE_COLORS.gray },
};

const MONTHS = [
  "января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря",
];

function dayMonth(iso: string): { d: number; m: string; y: number } | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
  return m ? { d: Number(m[3]), m: MONTHS[Number(m[2]) - 1], y: Number(m[1]) } : null;
}

// Срок акции словами: «до 31 октября», «с 1 по 31 октября»,
// «с 25 октября по 5 ноября», «с 1 ноября».
export function promoPeriod(start?: string, end?: string): string {
  const a = dayMonth(start || "");
  const b = dayMonth(end || "");
  if (a && b) {
    if (a.m === b.m && a.y === b.y) return `с ${a.d} по ${b.d} ${b.m}`;
    return `с ${a.d} ${a.m} по ${b.d} ${b.m}`;
  }
  if (b) return `до ${b.d} ${b.m}`;
  if (a) return `с ${a.d} ${a.m}`;
  return "";
}

// Пометка к заявке: по ней Ольга понимает, откуда пришёл человек.
export function leadNote(kind: CardKind, prefix: string, item: Workshop): string {
  if (kind === "shop") return `${prefix}: «${item.name}»${item.price ? ` — ${item.price}` : ""}`;
  return `${prefix} «${item.name}»`;
}

// Строки под описанием: у витрины — автор, материал, размер;
// у акции — срок; у мастер-классов — длительность и сколько человек.
function CardMeta({ item, kind }: { item: Workshop; kind: CardKind }) {
  const rows: { icon: React.ReactNode; text: string }[] = [];
  if (kind === "shop") {
    if (item.author) rows.push({ icon: <User size={15} />, text: item.author });
    if (item.material) rows.push({ icon: <Palette size={15} />, text: item.material });
    if (item.size) rows.push({ icon: <Ruler size={15} />, text: item.size });
  } else if (kind === "promo") {
    const period = promoPeriod(item.startDate, item.endDate);
    if (period) rows.push({ icon: <CalendarDays size={15} />, text: period });
  } else {
    if (item.duration) rows.push({ icon: <Clock size={15} />, text: item.duration });
    if (item.maxParticipants) rows.push({ icon: <Users size={15} />, text: item.maxParticipants });
  }
  if (rows.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-['Nunito_Sans',sans-serif] text-[#3D3D3D] opacity-70">
      {rows.map((r, i) => (
        <span key={i} className="flex items-center gap-1">
          {r.icon} {r.text}
        </span>
      ))}
    </div>
  );
}

// Кнопка записи или покупки. Проданную работу купить нельзя —
// вместо кнопки надпись; забронированную — тоже, но можно спросить.
function ActionButton({
  item,
  kind,
  buttonText,
  onClick,
  big = false,
}: {
  item: Workshop;
  kind: CardKind;
  buttonText: string;
  onClick: (event: React.MouseEvent) => void;
  big?: boolean;
}) {
  if (kind === "shop" && item.status === "sold") {
    return (
      <span className="ml-auto font-['Nunito_Sans',sans-serif] font-semibold text-[#9A9A9A] whitespace-nowrap">
        Продано
      </span>
    );
  }
  const reserved = kind === "shop" && item.status === "reserved";
  return (
    <button
      onClick={onClick}
      className={`ml-auto ${reserved ? "bg-[#B8A9D4] hover:bg-[#a797c7]" : "bg-[#F2A65A] hover:bg-[#e89542]"} text-white ${big ? "px-6 py-3" : "px-5 py-2.5"} rounded-lg font-['Nunito_Sans',sans-serif] font-semibold transition-colors border-none cursor-pointer whitespace-nowrap`}
    >
      {reserved ? "Спросить о работе" : buttonText}
    </button>
  );
}

export function WorkshopCard({
  workshop,
  buttonText,
  compact = false,
  // Как запись называется в пометке к заявке: «Мастер-класс «…»»
  // или «Мероприятие «…»». Разделы устроены одинаково и используют
  // одну карточку, отличается только это слово.
  leadPrefix = "Мастер-класс",
  // Раздел: мастер-классы и мероприятия, витрина работ или акции.
  kind = "card",
}: {
  workshop: Workshop;
  buttonText: string;
  compact?: boolean;
  leadPrefix?: string;
  kind?: CardKind;
}) {
  const { openModal } = useModal();
  const [photo, setPhoto] = useState(0);
  const [full, setFull] = useState(false);

  const images = workshop.images;
  const total = images.length;
  const status = kind === "shop" ? STATUS_BADGE[workshop.status || ""] : undefined;
  const badgeText = status ? status.text : workshop.badge;
  const badgeColor = status ? status.color : BADGE_COLORS[workshop.badgeStyle] || BADGE_COLORS.accent;

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
    openModal(leadNote(kind, leadPrefix, workshop));
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

        {badgeText && (
          <div className="absolute top-3 left-3">
            <span
              className="px-3 py-1 rounded-full text-xs font-['Nunito_Sans',sans-serif] font-bold text-white shadow"
              style={{ backgroundColor: badgeColor }}
            >
              {badgeText}
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

        <CardMeta item={workshop} kind={kind} />

        <div className="flex items-center justify-between gap-3 pt-1">
          {workshop.price && (
            <span
              className={`font-['Nunito',sans-serif] font-bold text-xl text-[#3D3D3D] ${kind === "promo" ? "" : "whitespace-nowrap"} ${kind === "shop" && workshop.status === "sold" ? "line-through opacity-50" : ""}`}
            >
              {workshop.price}
            </span>
          )}
          <ActionButton item={workshop} kind={kind} buttonText={buttonText} onClick={signUp} />
        </div>
      </div>

      {full && (
        <WorkshopFull
          workshop={workshop}
          kind={kind}
          badgeText={badgeText}
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
  kind,
  badgeText,
  buttonText,
  badgeColor,
  onClose,
  onSignUp,
}: {
  workshop: Workshop;
  kind: CardKind;
  badgeText: string;
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

          {badgeText && (
            <span
              className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-['Nunito_Sans',sans-serif] font-bold text-white shadow"
              style={{ backgroundColor: badgeColor }}
            >
              {badgeText}
            </span>
          )}
        </div>

        <div className="p-6 md:p-8">
          <h3 className="font-['Nunito',sans-serif] font-bold text-2xl text-[#3D3D3D] mb-3">
            {workshop.name}
          </h3>

          {workshop.age && (
            <div className="text-sm font-['Nunito_Sans',sans-serif] text-[#3D3D3D] opacity-70 mb-2">
              {workshop.age}
            </div>
          )}
          <div className="mb-4">
            <CardMeta item={workshop} kind={kind} />
          </div>

          <RichText
            text={workshop.description}
            className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] leading-relaxed"
          />

          <div className="flex items-center justify-between gap-3 mt-6">
            {workshop.price && (
              <span
                className={`font-['Nunito',sans-serif] font-bold text-xl text-[#3D3D3D] ${kind === "shop" && workshop.status === "sold" ? "line-through opacity-50" : ""}`}
              >
                {workshop.price}
              </span>
            )}
            <ActionButton item={workshop} kind={kind} buttonText={buttonText} onClick={onSignUp} big />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
