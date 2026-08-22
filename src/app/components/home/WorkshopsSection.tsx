// Секция мастер-классов на главной: карточки листаются по горизонтали,
// клик по карточке ведёт на страницу со списком, к нужному месту.

import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useContent } from "../../content/ContentContext";
import { WorkshopCard } from "../WorkshopCard";

export function WorkshopsSection() {
  const { workshops } = useContent();
  const navigate = useNavigate();
  const trackRef = useRef<HTMLDivElement>(null);

  if (!workshops.enabled || workshops.items.length === 0) return null;

  const scrollBy = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 300;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  const showArrows = workshops.items.length > 1;

  return (
    <section id="workshops" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#3D3D3D] mb-3">
              {workshops.title}
            </h2>
            {workshops.subtitle && (
              <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#3D3D3D] opacity-70 max-w-2xl">
                {workshops.subtitle}
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
          {workshops.items.map((workshop) => (
            <div
              key={workshop.id}
              data-card
              onClick={() => navigate(`/workshops#${workshop.id}`)}
              className="snap-start flex-shrink-0 w-[280px] md:w-[320px] cursor-pointer"
            >
              <WorkshopCard workshop={workshop} buttonText={workshops.buttonText} compact />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/workshops"
            className="inline-flex items-center gap-2 border-2 border-[#7BAF8E] text-[#7BAF8E] hover:bg-[#7BAF8E] hover:text-white px-7 py-3 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold transition-all"
          >
            Все мастер-классы
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
