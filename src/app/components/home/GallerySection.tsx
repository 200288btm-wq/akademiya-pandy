import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContent } from "../../content/ContentContext";



const STEP = 3;

export function GallerySection() {
  const { home } = useContent();
  const block = home.gallery;
  const images = block.images;
  const TOTAL_SLIDES = Math.max(1, Math.ceil(images.length / STEP));

  const [slide, setSlide] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setSlide(((index % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES);
      setFading(false);
    }, 200);
  }, [TOTAL_SLIDES]);

  useEffect(() => {
    const timer = setInterval(() => goTo(slide + 1), 5000);
    return () => clearInterval(timer);
  }, [slide, goTo]);

  if (!block.enabled || images.length === 0) return null;

  const start = slide * STEP;
  const visible = images.slice(start, start + STEP);

  return (
    <section className="py-16 bg-[#F0EDD8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#3D3D3D] mb-3">
            {block.title}
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            {block.subtitle}
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => goTo(slide - 1)}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white hover:bg-[#7BAF8E] hover:text-white text-[#3D3D3D] rounded-full shadow-lg flex items-center justify-center transition-all"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Фотографии показываются в своих пропорциях.
              Раньше здесь была рамка 4:3 с object-cover: вертикальный кадр
              обрезался до горизонтального, и у детей отрезало головы.
              Теперь у ячейки задана только высота, а фотография вписывается
              в неё целиком. Пустое место по бокам совпадает с фоном секции,
              поэтому полей не видно, а тень лежит по краю самого снимка. */}
          <div
            className="hidden md:grid grid-cols-3 gap-4"
            style={{ opacity: fading ? 0.4 : 1, transition: "opacity 0.2s ease" }}
          >
            {visible.map((img, i) => (
              <div key={`${slide}-${i}`} className="h-[300px] flex items-center justify-center">
                <img
                  src={img}
                  alt=""
                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div
            className="md:hidden h-[280px] flex items-center justify-center"
            style={{ opacity: fading ? 0.4 : 1, transition: "opacity 0.2s ease" }}
          >
            <img
              src={visible[0]}
              alt=""
              className="max-h-full max-w-full w-auto h-auto object-contain rounded-2xl shadow-md"
            />
          </div>

          <button
            onClick={() => goTo(slide + 1)}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white hover:bg-[#7BAF8E] hover:text-white text-[#3D3D3D] rounded-full shadow-lg flex items-center justify-center transition-all"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === slide ? "w-7 h-3 bg-[#7BAF8E]" : "w-3 h-3 bg-[#7BAF8E] opacity-30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
