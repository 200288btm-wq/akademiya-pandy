import { useState } from "react";
import { Link } from "react-router";
import { programs } from "../../data/programs";
import { ChevronRight } from "lucide-react";

export function ProgramsSection() {
  const [selectedAge, setSelectedAge] = useState<string>("all");

  const ageRanges = [
    { value: "all", label: "Все возрасты" },
    { value: "4-6", label: "4-6 лет", min: 4, max: 6 },
    { value: "7-8", label: "7-8 лет", min: 7, max: 8 },
    { value: "9+", label: "9+ лет", min: 9, max: 14 },
  ];

  const filteredPrograms = programs.filter((program) => {
    if (selectedAge === "all") return true;
    
    const range = ageRanges.find(r => r.value === selectedAge);
    if (!range || !range.min || !range.max) return true;
    
    return program.ageMin >= range.min && program.ageMin <= range.max;
  });

  return (
    <section id="programs" className="py-20 relative">
      {/* Декоративный элемент */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
        <LeafDecoration />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#3D3D3D] mb-4">
            Найдите занятие для вашего ребёнка
          </h2>

        </div>

        {/* Фильтр по возрасту */}
        <div className="flex justify-center mb-12 px-4">
          <div className="flex flex-wrap justify-center bg-white rounded-lg p-2 shadow-md gap-2">
            {ageRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setSelectedAge(range.value)}
                className={`px-4 py-2 rounded-md font-['Nunito_Sans',sans-serif] font-semibold transition-all text-sm md:text-base md:px-6 md:py-3 whitespace-nowrap ${
                  selectedAge === range.value
                    ? "bg-[#7BAF8E] text-white shadow-md"
                    : "bg-transparent text-[#3D3D3D] hover:bg-gray-100"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Карточки программ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: typeof programs[0] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
      {/* Изображение */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={program.image}
          alt={program.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Статус */}
        <div className="absolute top-4 right-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-['Nunito_Sans',sans-serif] font-semibold text-white"
            style={{
              backgroundColor:
                program.status === "active"
                  ? "#7BAF8E"
                  : program.status === "launching"
                  ? "#F2A65A"
                  : "#B8A9D4",
            }}
          >
            {program.statusText}
          </span>
        </div>
      </div>

      {/* Контент */}
      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-['Nunito',sans-serif] font-bold text-2xl text-[#3D3D3D]">
              {program.name}
            </h3>
            <span
              className="px-3 py-1 rounded-full text-xs font-['Nunito_Sans',sans-serif] font-semibold"
              style={{ backgroundColor: `${program.color}20`, color: program.color }}
            >
              {program.age}
            </span>
          </div>
          <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] opacity-80 text-sm">
            {program.shortName}
          </p>
        </div>

        <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] leading-relaxed">
          {program.description}
        </p>

        {/* Детали */}
        <div className="flex gap-4 text-sm">
          <div className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] opacity-60">
            ⏱ {program.duration}
          </div>
          <div className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] opacity-60">
            👥 {program.groupSize}
          </div>
        </div>

        {/* Кнопка */}
        <Link
          to={`/programs/${program.slug}`}
          className="flex items-center justify-between w-full px-4 py-3 rounded-lg border-2 border-[#3D3D3D] border-opacity-10 hover:border-opacity-20 transition-all group/btn"
        >
          <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[#3D3D3D]">
            Узнать подробнее
          </span>
          <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
        </Link>
      </div>
    </div>
  );
}

function LeafDecoration() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <path
        d="M50 10 Q80 30 70 60 Q60 90 50 90 Q40 90 30 60 Q20 30 50 10"
        fill="#7BAF8E"
        opacity="0.3"
      />
      <path
        d="M50 10 Q50 40 50 90"
        stroke="#7BAF8E"
        strokeWidth="2"
        opacity="0.5"
      />
    </svg>
  );
}
