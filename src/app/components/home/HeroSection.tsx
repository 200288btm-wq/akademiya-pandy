import img31 from "../../../imports/pasted_text/../../imports/ГлавнаяDesktop.tsx";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" fill="#7BAF8E" />
          <circle cx="100" cy="300" r="80" fill="#F2A65A" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Текстовый блок */}
          <div className="space-y-6">
            <h1 className="font-['Nunito',sans-serif] font-extrabold text-5xl md:text-6xl text-[#0c0805] leading-tight">
              Тёплое место рядом с домом, куда дети хотят возвращаться
            </h1>
            <p className="font-['Nunito_Sans',sans-serif] text-xl text-[#0c0805] leading-relaxed">
              Занятия для детей от 4 до 14 лет в Ботаническом районе Екатеринбурга
            </p>
            <div className="space-y-4">
              <a
                href="#programs"
                className="inline-block bg-[#F2A65A] hover:bg-[#e89542] text-white px-8 py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Записаться на пробное занятие
              </a>
              <p className="font-['Nunito_Sans',sans-serif] text-[#7BAF8E] font-semibold">
                ✨ Первое занятие — бесплатно
              </p>
            </div>
          </div>

          {/* Иллюстрация панды */}
          <div className="relative">
            <div className="relative bg-[#7BAF8E] bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm">
              {/* Маскот панды - можно заменить на SVG или изображение */}
              <div className="relative w-full aspect-square">
                <PandaMascot />
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#F2A65A] rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#7BAF8E] rounded-full opacity-20 animate-pulse delay-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PandaMascot() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Тело панды */}
      <ellipse cx="100" cy="130" rx="60" ry="70" fill="#FCFBFA" />
      
      {/* Голова */}
      <circle cx="100" cy="70" r="50" fill="#FCFBFA" />
      
      {/* Уши */}
      <circle cx="70" cy="40" r="20" fill="#080808" />
      <circle cx="130" cy="40" r="20" fill="#080808" />
      
      {/* Глаза */}
      <ellipse cx="85" cy="65" rx="15" ry="20" fill="#080808" />
      <ellipse cx="115" cy="65" rx="15" ry="20" fill="#080808" />
      <circle cx="88" cy="68" r="6" fill="#FCFBFA" />
      <circle cx="118" cy="68" r="6" fill="#FCFBFA" />
      
      {/* Нос */}
      <ellipse cx="100" cy="85" rx="8" ry="6" fill="#080808" />
      
      {/* Рот - улыбка */}
      <path
        d="M 90 88 Q 100 95 110 88"
        stroke="#080808"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Лапки */}
      <circle cx="70" cy="160" r="18" fill="#080808" />
      <circle cx="130" cy="160" r="18" fill="#080808" />
      
      {/* Животик с пятном */}
      <ellipse cx="100" cy="140" rx="35" ry="40" fill="#F0EDD8" opacity="0.5" />
      
      {/* Книга в лапах */}
      <rect x="80" y="110" width="40" height="30" rx="2" fill="#82C4A0" />
      <line x1="100" y1="110" x2="100" y2="140" stroke="#FCFBFA" strokeWidth="2" />
      <line x1="85" y1="118" x2="95" y2="118" stroke="#FCFBFA" strokeWidth="1" />
      <line x1="85" y1="125" x2="95" y2="125" stroke="#FCFBFA" strokeWidth="1" />
      <line x1="105" y1="118" x2="115" y2="118" stroke="#FCFBFA" strokeWidth="1" />
      <line x1="105" y1="125" x2="115" y2="125" stroke="#FCFBFA" strokeWidth="1" />
    </svg>
  );
}
