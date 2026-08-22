// Модули страницы направления.
//
// Страница собирается из блоков, которые задаются в админке. Всего четыре типа:
//   text    — заголовок, подзаголовок, абзацы (и картинки внизу, если нужны)
//   cards   — карточки в четырёх стилях: эмодзи, номера, простые, бейдж
//   facts   — цветная плашка с парами «подпись → значение»
//   gallery — карусель фотографий
//
// Неизвестный тип блока просто не рисуется — сайт от этого не ломается.

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Section, SectionItem } from "../data/defaults";

const TITLE_FONT = "font-['Nunito',sans-serif]";
const TEXT_FONT = "font-['Nunito_Sans',sans-serif]";

function backgroundClass(background: string): string {
  if (background === "white") return "bg-white";
  if (background === "none") return "";
  return "bg-[#F0EDD8]";
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  if (!title && !subtitle) return null;
  return (
    <>
      {title && (
        <h2 className={`${TITLE_FONT} font-bold text-3xl md:text-4xl text-[#3D3D3D] mb-4 text-center`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`${TEXT_FONT} text-lg text-[#3D3D3D] text-center mb-12 opacity-70 max-w-3xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </>
  );
}

function TextSection({ section }: { section: Section }) {
  const paragraphs = (section.body || "").split("\n").filter((line) => line.trim() !== "");
  const hasImages = section.images.length > 0;

  return (
    <div className="max-w-5xl mx-auto px-6">
      <SectionHeading title={section.title} subtitle={section.subtitle} />
      {(paragraphs.length > 0 || hasImages) && (
        <div className="bg-white rounded-3xl overflow-hidden shadow-md">
          <div className="p-8 md:p-12 text-center">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`${TEXT_FONT} text-base md:text-lg text-[#3D3D3D] leading-relaxed ${
                  i === 0 ? "" : "mt-4"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          {hasImages && (
            <div className="flex items-end justify-between px-4 pb-2">
              {section.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-32 md:h-44 object-contain drop-shadow-lg"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CardBadge({ item, index, style, color }: { item: SectionItem; index: number; style: string; color: string }) {
  if (style === "emoji") {
    return <span className="text-3xl">{item.icon || "✨"}</span>;
  }
  if (style === "number") {
    return (
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        style={{ backgroundColor: color }}
      >
        {index + 1}
      </div>
    );
  }
  return null;
}

function CardsSection({ section, color }: { section: Section; color: string }) {
  const columns = section.columns === 4 ? 4 : section.columns === 3 ? 3 : 2;
  const gridClass =
    columns === 4
      ? "grid grid-cols-2 md:grid-cols-4 gap-4"
      : columns === 3
      ? "grid grid-cols-1 md:grid-cols-3 gap-6"
      : "grid grid-cols-1 md:grid-cols-2 gap-6";

  const isBadge = section.style === "badge";

  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading title={section.title} subtitle={section.subtitle} />
      <div className={`${gridClass} ${isBadge ? "max-w-3xl mx-auto" : ""}`}>
        {section.items.map((item, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl shadow-md ${columns === 4 ? "p-4" : "p-6"} ${
              isBadge ? "text-center" : ""
            }`}
          >
            {isBadge ? (
              <div
                className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3 ${TEXT_FONT}`}
                style={{ backgroundColor: `${color}20`, color }}
              >
                {item.title}
              </div>
            ) : (
              <div className="flex items-center gap-3 mb-4">
                <CardBadge item={item} index={i} style={section.style} color={color} />
                <h3
                  className={`${TITLE_FONT} font-bold text-[#3D3D3D] ${
                    section.style === "emoji" ? "text-xl" : columns === 4 ? "text-base" : "text-lg"
                  }`}
                  style={section.style === "plain" ? { color } : undefined}
                >
                  {item.title}
                </h3>
              </div>
            )}

            {item.text && (
              <p className={`${TEXT_FONT} text-[#3D3D3D] leading-relaxed ${isBadge ? "" : "mb-2"}`}>
                {item.text}
              </p>
            )}

            {item.list.length > 0 && (
              <ul className="space-y-1">
                {item.list.map((line, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-2 ${TEXT_FONT} text-[#3D3D3D] ${
                      columns === 4 ? "text-sm" : "text-sm md:text-base"
                    }`}
                  >
                    <span style={{ color }} className="mt-1 flex-shrink-0">
                      ●
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FactsSection({ section, color }: { section: Section; color: string }) {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="rounded-2xl p-8 shadow-md" style={{ backgroundColor: color }}>
        {section.title && (
          <h2 className={`${TITLE_FONT} font-bold text-2xl md:text-3xl text-white mb-6 text-center`}>
            {section.title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.items.map((item, i) => (
            <div key={i} className="bg-white/15 rounded-xl p-4 border border-white/20">
              <p className={`${TEXT_FONT} text-white/70 text-sm mb-1`}>{item.label}</p>
              <p className={`${TITLE_FONT} font-bold text-white text-base`}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GallerySection({ section, color }: { section: Section; color: string }) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const photos = section.images;
  const total = photos.length;
  const go = (step: number) => setIndex((current) => (current + step + total) % total);

  const onTouchEnd = (endX: number) => {
    if (touchStart === null) return;
    const delta = touchStart - endX;
    if (Math.abs(delta) > 50) go(delta > 0 ? 1 : -1);
    setTouchStart(null);
  };

  const safeIndex = Math.min(index, total - 1);

  return (
    <div className="max-w-5xl mx-auto px-6">
      <SectionHeading title={section.title} subtitle={section.subtitle} />
      <div
        className="relative rounded-3xl overflow-hidden shadow-xl bg-white"
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
      >
        <img
          src={photos[safeIndex]}
          alt=""
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
        {total > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Предыдущее фото"
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/85 hover:bg-white flex items-center justify-center shadow-lg transition-all border-none cursor-pointer"
            >
              <ChevronLeft size={26} color="#3D3D3D" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Следующее фото"
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/85 hover:bg-white flex items-center justify-center shadow-lg transition-all border-none cursor-pointer"
            >
              <ChevronRight size={26} color="#3D3D3D" />
            </button>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Фото ${i + 1}`}
              className="rounded-full transition-all border-none cursor-pointer p-0"
              style={{
                width: i === safeIndex ? 28 : 10,
                height: 10,
                backgroundColor: i === safeIndex ? color : "#3D3D3D33",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function isEmpty(section: Section): boolean {
  if (section.type === "text") {
    return !section.title && !section.subtitle && !section.body && section.images.length === 0;
  }
  if (section.type === "gallery") {
    return section.images.length === 0;
  }
  return section.items.length === 0 && !section.title && !section.subtitle;
}

export function ProgramSections({ sections, color }: { sections: Section[]; color: string }) {
  const visible = sections.filter((section) => section.enabled && !isEmpty(section));

  return (
    <>
      {visible.map((section) => (
        <section key={section.id} className={`py-20 ${backgroundClass(section.background)}`}>
          {section.type === "text" && <TextSection section={section} />}
          {section.type === "cards" && <CardsSection section={section} color={color} />}
          {section.type === "facts" && <FactsSection section={section} color={color} />}
          {section.type === "gallery" && <GallerySection section={section} color={color} />}
        </section>
      ))}
    </>
  );
}
