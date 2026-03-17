import { Link } from "react-router";

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" fill="#7BAF8E" />
          <circle cx="100" cy="300" r="80" fill="#F2A65A" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h1 className="font-['Nunito',sans-serif] font-extrabold text-5xl md:text-6xl text-[#0c0805] leading-tight">
              {"Тёплое место рядом с домом, куда дети хотят возвращаться"}
            </h1>

            <p className="font-['Nunito_Sans',sans-serif] text-xl text-[#0c0805] leading-relaxed">
              {"6 направлений для детей от 4 до 14 лет — рисование, английский, развитие, танцы и не только. Ботанический район, рядом с домом."}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <span className="text-lg">{"📍"}</span>
                <span className="font-['Nunito_Sans',sans-serif] text-sm font-semibold text-[#0c0805]">
                  {"Ботанический район"}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <span className="text-lg">{"👥"}</span>
                <span className="font-['Nunito_Sans',sans-serif] text-sm font-semibold text-[#0c0805]">
                  {"Группы до 10 детей"}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <span className="text-lg">{"⭐"}</span>
                <span className="font-['Nunito_Sans',sans-serif] text-sm font-semibold text-[#0c0805]">
                  {"Первое занятие бесплатно"}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block bg-[#F2A65A] hover:bg-[#e89542] text-white px-8 py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                {"Записаться на пробное занятие"}
              </a>
              <Link
                to="/programs"
                className="inline-block border-2 border-[#7BAF8E] text-[#7BAF8E] hover:bg-[#7BAF8E] hover:text-white px-8 py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all"
              >
                {"Смотреть направления"}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/mCY4BGhr/photo-2025-10-10-19-59-34.jpg"
                alt="Занятия в Академии Панды"
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#F0EDD8]/60 to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#F2A65A] rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#7BAF8E] rounded-full opacity-20 animate-pulse delay-75" />
          </div>

        </div>
      </div>
    </section>
  );
}
