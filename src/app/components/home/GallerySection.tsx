import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "https://i.ibb.co/mCY4BGhr/photo-2025-10-10-19-59-34.jpg", alt: "Развивающие занятия" },
  { src: "https://i.ibb.co/Jw1ZxgYP/photo-2025-10-10-19-59-29.jpg", alt: "Занятия по рисованию" },
  { src: "https://i.ibb.co/8LVrsk4h/photo-2025-10-05-12-15-22.jpg", alt: "Групповые занятия" },
  { src: "https://i.ibb.co/NgWSkwSY/photo-2025-09-28-16-57-04.jpg", alt: "Творческая мастерская" },
  { src: "https://i.ibb.co/KjxTQKj7/photo-2025-10-10-19-59-26.jpg", alt: "Счастливые дети" },
  { src: "https://i.ibb.co/ymJpLyzW/photo-2025-12-16-13-46-13.jpg", alt: "Танцы и движение" },
];

export function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent((index + images.length) % images.length);
      setFading(false);
    }, 200);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 4000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const visible = [
    images[current % images.length],
    images[(current + 1) % images.length],
    images[(current + 2) % images.length],
  ];

  return (
    <section className="py-16 bg-[#F0EDD8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#0c0805] mb-3">
            Атмосфера Академии Панды
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            Реальные моменты из жизни центра — дети в процессе, эмоции и творчество
          </p>
        </div>

        <div className="relative">
          {/* Кнопка назад */}
          <button
            onClick={() => goTo(current - 1)}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white hover:bg-[#7BAF8E] hover:text-white text-[#0c0805] rounded-full shadow-lg flex items-center justify-center transition-all"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Десктоп: 3 фото */}
          <div
            className="hidden md:grid grid-cols-3 gap-4"
            style={{ opacity: fading ? 0.5 : 1, transition: "opacity 0.2s ease" }}
          >
            {visible.map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Мобайл: 1 фото */}
          <div
            className="md:hidden aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
            style={{ opacity: fading ? 0.5 : 1, transition: "opacity 0.2s ease" }}
          >
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Кнопка вперёд */}
          <button
            onClick={() => goTo(current + 1)}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white hover:bg-[#7BAF8E] hover:text-white text-[#0c0805] rounded-full shadow-lg flex items-center justify-center transition-all"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Точки */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-7 h-3 bg-[#7BAF8E]" : "w-3 h-3 bg-[#7BAF8E] opacity-30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
