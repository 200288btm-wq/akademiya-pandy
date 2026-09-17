// Разделы «Мастер-классы» и «Мероприятия».
//
// Устроены они одинаково: список карточек с одними и теми же полями,
// лента на главной и своя страница со всем списком. Поэтому код общий —
// две копии разъехались бы на первой же правке, как это уже случилось
// с разметкой описаний.
//
// Отличаются только адрес страницы, слово в пометке к заявке
// и тексты SEO.

import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { WorkshopCard } from "./WorkshopCard";
import type { WorkshopsBlock } from "../data/defaults";

// Лента карточек на главной.
export function CardsHomeSection({
  block,
  anchor,
  href,
  moreLabel,
  leadPrefix,
}: {
  block: WorkshopsBlock;
  anchor: string;
  href: string;
  moreLabel: string;
  leadPrefix: string;
}) {
  const navigate = useNavigate();
  const trackRef = useRef<HTMLDivElement>(null);

  if (!block.enabled || block.items.length === 0) return null;

  const scrollBy = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 300;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  const showArrows = block.items.length > 1;

  return (
    <section id={anchor} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#3D3D3D] mb-3">
              {block.title}
            </h2>
            {block.subtitle && (
              <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#3D3D3D] opacity-70 max-w-2xl">
                {block.subtitle}
              </p>
            )}
          </div>

          {showArrows && (
            <div className="hidden md:flex gap-2 flex-shrink-0">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Назад"
                className="w-11 h-11 rounded-full border-2 border-[#E5E2D0] bg-white hover:border-[#7BAF8E] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft size={22} color="#3D3D3D" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Вперёд"
                className="w-11 h-11 rounded-full border-2 border-[#E5E2D0] bg-white hover:border-[#7BAF8E] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight size={22} color="#3D3D3D" />
              </button>
            </div>
          )}
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "thin" }}
        >
          {block.items.map((item) => (
            <div
              key={item.id}
              data-card
              onClick={() => navigate(`${href}#${item.id}`)}
              className="snap-start flex-shrink-0 w-[280px] md:w-[320px] cursor-pointer"
            >
              <WorkshopCard
                workshop={item}
                buttonText={block.buttonText}
                leadPrefix={leadPrefix}
                compact
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to={href}
            className="inline-flex items-center gap-2 border-2 border-[#7BAF8E] text-[#7BAF8E] hover:bg-[#7BAF8E] hover:text-white px-7 py-3 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold transition-all"
          >
            {moreLabel}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Содержимое отдельной страницы раздела.
export function CardsPageBody({
  block,
  emptyText,
  leadPrefix,
}: {
  block: WorkshopsBlock;
  emptyText: string;
  leadPrefix: string;
}) {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-[#F0EDD8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-['Nunito',sans-serif] font-bold text-3xl md:text-5xl text-[#3D3D3D] mb-6">
              {block.pageTitle}
            </h1>
            {block.pageSubtitle && (
              <p className="font-['Nunito_Sans',sans-serif] text-xl text-[#3D3D3D] leading-relaxed">
                {block.pageSubtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {block.items.length === 0 ? (
            <p className="text-center font-['Nunito_Sans',sans-serif] text-lg text-[#3D3D3D] opacity-70 py-16">
              {emptyText}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {block.items.map((item) => (
                // Якорь нужен, чтобы переход с главной открывал нужную карточку.
                <div key={item.id} id={item.id} className="scroll-mt-28">
                  <WorkshopCard
                    workshop={item}
                    buttonText={block.buttonText}
                    leadPrefix={leadPrefix}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
