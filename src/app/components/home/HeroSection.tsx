import { Link } from "react-router";
import { useModal } from "../ModalContext";
import { useContent } from "../../content/ContentContext";

export function HeroSection() {
  const { openModal } = useModal();
  const { home } = useContent();
  const hero = home.hero;

  return (
    <section className="relative py-16 md:py-20 bg-[#7BAF8E]">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" fill="#7BAF8E" />
          <circle cx="100" cy="300" r="80" fill="#F2A65A" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-['Nunito',sans-serif] font-extrabold text-5xl md:text-6xl text-white leading-tight">
              {hero.title}
            </h1>
            <p className="font-['Nunito_Sans',sans-serif] text-xl text-white/90 leading-relaxed">
              {hero.text}
            </p>

            {hero.badges.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {hero.badges.map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 shadow-sm"
                  >
                    {badge.icon && <span className="text-lg">{badge.icon}</span>}
                    <span className="font-['Nunito_Sans',sans-serif] text-sm font-semibold text-white">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-4 items-center">
              {hero.primaryButton && (
                <button
                  onClick={() => openModal()}
                  className="inline-block bg-[#F2A65A] hover:bg-[#e89542] text-white px-8 py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-lg border-none cursor-pointer"
                >
                  {hero.primaryButton}
                </button>
              )}
              {hero.secondaryButton && (
                <Link
                  to={hero.secondaryLink || "/programs"}
                  className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#7BAF8E] px-8 py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all"
                >
                  {hero.secondaryButton}
                </Link>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={hero.image}
                alt="Занятия в Академии Панды"
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#F0EDD8]/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
