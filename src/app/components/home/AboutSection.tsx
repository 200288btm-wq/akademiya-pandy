export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Декоративные круги */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#7BAF8E] opacity-5 rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#F2A65A] opacity-5 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Текстовый блок */}
          <div className="space-y-6">
            <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#0c0805]">
              Академия Панды — это не кружок
            </h2>
            <div className="space-y-4 font-['Nunito_Sans',sans-serif] text-lg text-[#0c0805] leading-relaxed">
              <p>
                Это место, куда дети приходят с радостью, а уходят с новыми навыками и счастливыми глазами.
              </p>
              <p>
                Мы не просто проводим занятия — мы создаём тёплую атмосферу, где каждый ребёнок чувствует себя важным и принятым.
              </p>
              <p>
                Наша студия находится в Ботаническом районе Екатеринбурга, рядом с ТЦ «Дирижабль» — совсем близко от дома.
              </p>
              <p className="text-[#7BAF8E] font-semibold">
                Мы рады видеть каждого ребёнка таким, какой он есть.
              </p>
            </div>
          </div>

          {/* Иллюстрация обезьянки */}
          <div className="relative">
            <div className="relative bg-[#F2A65A] bg-opacity-10 rounded-3xl p-8">
              <div className="w-full aspect-square">
                <MonkeyMascot />
              </div>
              
              {/* Декоративные звёздочки */}
              <div className="absolute top-8 right-8">
                <Sparkle color="#F2A65A" />
              </div>
              <div className="absolute bottom-12 left-8">
                <Sparkle color="#7BAF8E" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MonkeyMascot() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Тело */}
      <ellipse cx="100" cy="135" rx="55" ry="65" fill="#D4826A" />
      
      {/* Голова */}
      <circle cx="100" cy="75" r="48" fill="#D4826A" />
      
      {/* Уши */}
      <circle cx="65" cy="60" r="18" fill="#D4826A" />
      <circle cx="135" cy="60" r="18" fill="#D4826A" />
      <circle cx="65" cy="60" r="12" fill="#F0B8A0" />
      <circle cx="135" cy="60" r="12" fill="#F0B8A0" />
      
      {/* Мордочка */}
      <ellipse cx="100" cy="85" rx="32" ry="28" fill="#F0B8A0" />
      
      {/* Глаза */}
      <ellipse cx="88" cy="68" rx="10" ry="12" fill="#080808" />
      <ellipse cx="112" cy="68" rx="10" ry="12" fill="#080808" />
      <circle cx="90" cy="70" r="4" fill="#FCFBFA" />
      <circle cx="114" cy="70" r="4" fill="#FCFBFA" />
      
      {/* Нос */}
      <ellipse cx="100" cy="82" rx="6" ry="5" fill="#080808" />
      
      {/* Рот - улыбка */}
      <path
        d="M 88 88 Q 100 96 112 88"
        stroke="#080808"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Хвост */}
      <path
        d="M 145 150 Q 170 130 175 110 Q 178 95 170 85"
        stroke="#D4826A"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Лапки */}
      <circle cx="75" cy="170" r="16" fill="#D4826A" />
      <circle cx="125" cy="170" r="16" fill="#D4826A" />
      <ellipse cx="60" cy="120" rx="15" ry="20" fill="#D4826A" />
      <ellipse cx="140" cy="120" rx="15" ry="20" fill="#D4826A" />
      
      {/* Бананчик в лапке */}
      <path
        d="M 55 115 Q 45 110 40 100 Q 38 95 40 90 Q 42 88 45 89 Q 47 95 50 100 Q 52 110 55 115"
        fill="#F2A65A"
      />
      <path
        d="M 40 95 Q 38 93 36 95"
        stroke="#080808"
        strokeWidth="1"
      />
    </svg>
  );
}

function Sparkle({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}
