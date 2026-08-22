import { useParams, Link } from "react-router";
import { Layout } from "../components/Layout";
import { useModal } from "../components/ModalContext";
import { useContent } from "../content/ContentContext";
import { ArrowLeft, Clock, Users, CheckCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { ProgramSections } from "../components/ProgramSections";

export function ProgramDetail() {
  const { openModal } = useModal();
  const { slug } = useParams();
  const { programs } = useContent();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="font-['Nunito',sans-serif] font-bold text-3xl mb-4">
            Программа не найдена
          </h1>
          <Link to="/programs" className="text-[#7BAF8E] hover:underline">
            Вернуться к списку программ
          </Link>
        </div>
      </Layout>
    );
  }

  useSEO({
    title: `${program.name} — Академия Панды | ${program.shortName} для детей ${program.age} в Екатеринбурге`,
    description: `${program.description}. Занятия в Академии Панды в Ботаническом районе Екатеринбурга. ${program.duration}, группы ${program.groupSize}. Первое занятие бесплатно.`,
    keywords: `${program.name} Екатеринбург, ${program.shortName} для детей Екатеринбург, детский центр Ботанический район`,
  });

  return (
    <Layout>
      {/* Хлебные крошки */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/programs"
            className="flex items-center gap-2 text-[#7BAF8E] hover:text-[#6a9e7d] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-['Nunito_Sans',sans-serif]">Все программы</span>
          </Link>
        </div>
      </div>

      {/* Герой */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F0EDD8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-4 py-2 rounded-full text-sm font-['Nunito_Sans',sans-serif] font-semibold"
                  style={{ backgroundColor: `${program.color}20`, color: program.color }}
                >
                  {program.age}
                </span>
                <span
                  className="px-4 py-2 rounded-full text-sm font-['Nunito_Sans',sans-serif] font-semibold text-white"
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
              <h1 className="font-['Nunito',sans-serif] font-bold text-5xl text-[#3D3D3D] mb-4">
                {program.name}
              </h1>
              <p className="font-['Nunito_Sans',sans-serif] text-2xl text-[#3D3D3D] mb-6 opacity-80">
                {program.shortName}
              </p>
              <p className="font-['Nunito_Sans',sans-serif] text-xl text-[#3D3D3D] leading-relaxed mb-8">
                {program.description}
              </p>
              <button
                onClick={() => openModal(program.name)}
                className="inline-block bg-[#F2A65A] hover:bg-[#e89542] text-white px-10 py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-lg border-none cursor-pointer"
              >
                Записаться на пробное занятие
              </button>
              <p className="font-['Nunito_Sans',sans-serif] text-[#7BAF8E] font-semibold mt-3">
                ✨ Первое занятие — бесплатно (при покупке абонемента)
              </p>
            </div>
            <div className="relative">
              <img
                src={program.image}
                alt={program.name}
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Формат */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl text-[#3D3D3D] mb-12 text-center">
            Формат занятий
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FormatCard
              icon={<Users size={32} />}
              title="Возраст"
              value={program.age}
              color={program.color}
            />
            <FormatCard
              icon={<Clock size={32} />}
              title="Длительность"
              value={program.duration}
              color={program.color}
            />
            <FormatCard
              icon={<Users size={32} />}
              title="Размер группы"
              value={program.groupSize}
              color={program.color}
            />
            <FormatCard
              icon={<CheckCircle size={32} />}
              title="Пробное"
              value="Бесплатно"
              color={program.color}
            />
          </div>
        </div>
      </section>

      {/* Что развивает */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl text-[#3D3D3D] mb-12 text-center">
            Что развивает программа
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {program.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 bg-[#F0EDD8] rounded-2xl p-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${program.color}30` }}
                >
                  <CheckCircle size={24} style={{ color: program.color }} />
                </div>
                <div>
                  <h3 className="font-['Nunito',sans-serif] font-bold text-lg text-[#3D3D3D] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProgramSections sections={program.sections} color={program.color} />

      {/* CTA */}
      <section id="cta" className="py-20 bg-gradient-to-br from-[#7BAF8E] to-[#6a9e7d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl text-white mb-4">
            Запишитесь на бесплатное пробное занятие
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-xl text-white mb-8 opacity-90">
            Приходите, познакомьтесь с педагогом и посмотрите, как всё устроено
          </p>
          <button
            onClick={() => openModal(program.name)}
            className="inline-block bg-[#F2A65A] hover:bg-[#e89542] text-white px-10 py-5 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl border-none cursor-pointer"
          >
            {`Записаться на ${program.name}`}
          </button>
        </div>
      </section>
    </Layout>
  );
}

function FormatCard({ icon, title, value, color }: any) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md text-center">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
        style={{ backgroundColor: `${color}20`, color: color }}
      >
        {icon}
      </div>
      <p className="font-['Nunito_Sans',sans-serif] text-sm text-[#3D3D3D] opacity-60 mb-1">
        {title}
      </p>
      <p className="font-['Nunito',sans-serif] font-bold text-xl text-[#3D3D3D]">{value}</p>
    </div>
  );
}
