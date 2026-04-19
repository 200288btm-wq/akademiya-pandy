import { useSEO } from "../hooks/useSEO";
import { Layout } from "../components/Layout";
import { Link } from "react-router";
import { programs } from "../data/programs";
import { ChevronRight } from "lucide-react";

export function Programs() {
  useSEO({
    title: "Направления — Академия Панды | Детский центр в Екатеринбурге",
    description: "Все направления Академии Панды: подготовка к школе, рисование, английский язык, настольные игры, танцы, архитектурное моделирование. Дети 4–14 лет. Ботанический район Екатеринбурга.",
    keywords: "кружки для детей Екатеринбург, рисование для детей Екатеринбург, английский для детей Ботанический район, подготовка к школе Екатеринбург, танцы для детей Екатеринбург",
  });
  return (
    <Layout>
      {/* Заголовок */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F0EDD8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-['Nunito',sans-serif] font-bold text-5xl md:text-6xl text-[#3D3D3D] mb-6">
              Все направления Академии Панды
            </h1>
            <p className="font-['Nunito_Sans',sans-serif] text-xl text-[#3D3D3D] leading-relaxed">
              Занятия для детей от 4 до 14 лет, найдите то, что откликается вашему ребёнку
            </p>
          </div>
        </div>
      </section>

      {/* Список программ */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Помощь в выборе */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Nunito',sans-serif] font-bold text-3xl md:text-4xl text-[#3D3D3D] mb-4">
            Не знаете, с чего начать?
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#3D3D3D] mb-8">
            Это нормально — мы поможем
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#F0EDD8] rounded-2xl p-6">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-['Nunito',sans-serif] font-bold text-lg mb-2">Учитывайте возраст</h3>
              <p className="font-['Nunito_Sans',sans-serif] text-sm">У каждого направления есть рекомендуемый возраст</p>
            </div>
            <div className="bg-[#F0EDD8] rounded-2xl p-6">
              <div className="text-4xl mb-3">💭</div>
              <h3 className="font-['Nunito',sans-serif] font-bold text-lg mb-2">Подумайте об интересах</h3>
              <p className="font-['Nunito_Sans',sans-serif] text-sm">Что интересно вашему ребёнку прямо сейчас?</p>
            </div>
            <div className="bg-[#F0EDD8] rounded-2xl p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-['Nunito',sans-serif] font-bold text-lg mb-2">Попробуйте бесплатно</h3>
              <p className="font-['Nunito_Sans',sans-serif] text-sm">Первое занятие всегда бесплатно</p>
            </div>
          </div>

          <a
            href="/contacts#social"
            className="inline-block border-2 border-[#7BAF8E] text-[#7BAF8E] hover:bg-[#7BAF8E] hover:text-white px-8 py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold transition-all"
          >
            Напишите нам — поможем выбрать
          </a>
        </div>
      </section>
    </Layout>
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

        <div className="flex gap-4 text-sm">
          <div className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] opacity-60">
            ⏱ {program.duration}
          </div>
          <div className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] opacity-60">
            👥 {program.groupSize}
          </div>
        </div>

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
