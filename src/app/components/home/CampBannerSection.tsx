// Промо-баннер на главной. Универсальный: сегодня лагерь, завтра ясельная
// группа — меняются только тексты, ссылка и цвета в админке.

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useContent } from "../../content/ContentContext";
import type { Promo } from "../../data/defaults";

export function CampBannerSection() {
  const { home } = useContent();
  const promo = home.promo;

  if (!promo.enabled) return null;
  if (!promo.title && !promo.titleAccent && !promo.text) return null;

  const inner = (
    <div className="grid md:grid-cols-[1.1fr_1fr] gap-6 md:gap-8 p-6 md:p-12 items-center">
      <div>
        {promo.label && (
          <div
            className="inline-flex items-center self-start mb-5 md:mb-6 px-4 py-1.5 rounded-md"
            style={{ backgroundColor: promo.accentColor }}
          >
            <span
              className="font-['Nunito',sans-serif] font-extrabold text-xs md:text-sm uppercase tracking-widest"
              style={{ color: promo.bgColor }}
            >
              {promo.label}
            </span>
          </div>
        )}

        <h2 className="font-['Nunito',sans-serif] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-3 md:mb-4">
          {promo.title && <span style={{ color: promo.titleColor }}>{promo.title} </span>}
          {promo.titleAccent && (
            <span style={{ color: promo.accentColor }}>{promo.titleAccent}</span>
          )}
        </h2>

        {promo.text && (
          <p
            className="font-['Nunito_Sans',sans-serif] text-base md:text-lg leading-relaxed mb-6 md:mb-7 max-w-md"
            style={{ color: promo.textColor, opacity: 0.85 }}
          >
            {promo.text}
          </p>
        )}

        {promo.features.length > 0 && (
          <div className="flex flex-wrap gap-2 md:gap-2.5 mb-7 md:mb-8">
            {promo.features.map((feature, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 md:px-3.5 py-2 font-['Nunito_Sans',sans-serif] font-semibold text-sm"
                style={{ color: promo.textColor }}
              >
                {feature.icon && (
                  <span style={{ color: promo.accentColor }}>{feature.icon}</span>
                )}
                {feature.text}
              </div>
            ))}
          </div>
        )}

        {promo.buttonText && (
          <div
            className="inline-flex items-center gap-3 self-start font-['Nunito',sans-serif] font-extrabold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: promo.buttonBgColor, color: promo.buttonTextColor }}
          >
            {promo.buttonText}
            <ArrowRight className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 md:gap-4">
        {promo.images.length > 0 && <PromoGallery promo={promo} />}

        {promo.cards.map((card, i) => (
          <div key={i} className="bg-white/10 border border-white/15 rounded-2xl p-5 md:p-6">
            {card.badge && (
              <div
                className="inline-block font-['Nunito',sans-serif] font-extrabold text-[11px] px-2.5 py-1 rounded uppercase tracking-wider mb-3"
                style={{ backgroundColor: promo.accentColor, color: promo.bgColor }}
              >
                {card.badge}
              </div>
            )}
            <p
              className="font-['Nunito',sans-serif] font-extrabold text-xl md:text-2xl leading-tight mb-2"
              style={{ color: promo.titleColor }}
            >
              {card.title}
            </p>
            {card.text && (
              <p
                className="font-['Nunito_Sans',sans-serif] text-sm md:text-base leading-snug"
                style={{ color: promo.textColor, opacity: 0.75 }}
              >
                {card.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const boxClass =
    "block rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-300";

  return (
    <section className="py-12 md:py-16 bg-[#F0EDD8]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {promo.link ? (
          <a
            href={promo.link}
            target={promo.link.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`${boxClass} hover:scale-[1.01]`}
            style={{ backgroundColor: promo.bgColor }}
          >
            {inner}
          </a>
        ) : (
          <div className={boxClass} style={{ backgroundColor: promo.bgColor }}>
            {inner}
          </div>
        )}
      </div>
    </section>
  );
}

function PromoGallery({ promo }: { promo: Promo }) {
  const [index, setIndex] = useState(0);
  const total = promo.images.length;
  const go = (step: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIndex((current) => (current + step + total) % total);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/15">
      <img
        src={promo.images[index]}
        alt=""
        className="w-full h-48 md:h-56 object-cover"
      />
      {total > 1 && (
        <>
          <button
            onClick={(e) => go(-1, e)}
            aria-label="Предыдущее фото"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 hover:bg-white flex items-center justify-center border-none cursor-pointer"
          >
            <ChevronLeft size={20} color="#3D3D3D" />
          </button>
          <button
            onClick={(e) => go(1, e)}
            aria-label="Следующее фото"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 hover:bg-white flex items-center justify-center border-none cursor-pointer"
          >
            <ChevronRight size={20} color="#3D3D3D" />
          </button>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {promo.images.map((_, i) => (
              <span
                key={i}
                className="rounded-full"
                style={{
                  width: i === index ? 18 : 6,
                  height: 6,
                  backgroundColor: i === index ? promo.accentColor : "#ffffff80",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
