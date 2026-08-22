// Карточка мастер-класса. Используется и в карусели на главной,
// и в списке на отдельной странице — отличается только шириной.

import { useState } from "react";
import { Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useModal } from "./ModalContext";
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
}: {
  workshop: Workshop;
  buttonText: string;
  compact?: boolean;
}) {
  const { openModal } = useModal();
  const [photo, setPhoto] = useState(0);

  const images = workshop.images;
  const total = images.length;
  const badgeColor = BADGE_COLORS[workshop.badgeStyle] || BADGE_COLORS.accent;

  const flip = (step: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setPhoto((current) => (current + step + total) % total);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col">
      <div className={`relative overflow-hidden bg-[#F0EDD8] ${compact ? "h-44" : "h-56"}`}>
        {total > 0 ? (
          <img
            src={images[Math.min(photo, total - 1)]}
            alt={workshop.name}
            className="w-full h-full object-cover"
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
          <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] leading-relaxed text-sm flex-1">
            {workshop.description}
          </p>
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
            onClick={() => openModal(`Мастер-класс «${workshop.name}»`)}
            className="ml-auto bg-[#F2A65A] hover:bg-[#e89542] text-white px-5 py-2.5 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold transition-colors border-none cursor-pointer whitespace-nowrap"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
