import { useParams, Link } from "react-router";
import { Layout } from "../components/Layout";
import { useModal } from "../components/ModalContext";
import { programs } from "../data/programs";
import { ArrowLeft, Clock, Users, CheckCircle } from "lucide-react";

export function ProgramDetail() {
  const { openModal } = useModal();
  const { slug } = useParams();
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
              <h1 className="font-['Nunito',sans-serif] font-bold text-5xl text-[#0c0805] mb-4">
                {program.name}
              </h1>
              <p className="font-['Nunito_Sans',sans-serif] text-2xl text-[#0c0805] mb-6 opacity-80">
                {program.shortName}
              </p>
              <p className="font-['Nunito_Sans',sans-serif] text-xl text-[#0c0805] leading-relaxed mb-8">
                {program.description}
              </p>
              <button
                onClick={() => openModal(program.name)}
                className="inline-block bg-[#F2A65A] hover:bg-[#e89542] text-white px-10 py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all transform hover:scale-105 shadow-lg border-none cursor-pointer"
              >
                Записаться на пробное занятие
              </button>
              <p className="font-['Nunito_Sans',sans-serif] text-[#7BAF8E] font-semibold mt-3">
                ✨ Первое занятие — бесплатно
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
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl text-[#0c0805] mb-12 text-center">
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
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl text-[#0c0805] mb-12 text-center">
            Что развивает программа
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {getBenefits(program.slug).map((benefit, index) => (
              <div key={index} className="flex gap-4 bg-[#F0EDD8] rounded-2xl p-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${program.color}30` }}
                >
                  <CheckCircle size={24} style={{ color: program.color }} />
                </div>
                <div>
                  <h3 className="font-['Nunito',sans-serif] font-bold text-lg text-[#0c0805] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-['Nunito_Sans',sans-serif] text-[#0c0805]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <p className="font-['Nunito_Sans',sans-serif] text-sm text-[#0c0805] opacity-60 mb-1">
        {title}
      </p>
      <p className="font-['Nunito',sans-serif] font-bold text-xl text-[#0c0805]">{value}</p>
    </div>
  );
}

function getBenefits(slug: string) {
  const benefitsMap: Record<string, Array<{ title: string; description: string }>> = {
    "smyshlennaya-panda": [
      { title: "Концентрация внимания", description: "Ребёнок учится удерживать внимание на задаче дольше" },
      { title: "Мелкая моторика", description: "Развиваем через игру и творческие задания" },
      { title: "Познание мира", description: "Узнаём новое через наблюдение и эксперименты" },
      { title: "Эмоциональная устойчивость", description: "Учимся понимать и выражать свои эмоции" },
    ],
    "pushistye-hudozhniki": [
      { title: "Построение композиции", description: "Основы композиции и пространственного мышления" },
      { title: "Теория цвета", description: "Как работать с цветом и создавать гармонию" },
      { title: "Разные техники", description: "От реализма до абстракции, от акварели до гуаши" },
      { title: "Уверенность в себе", description: "Творчество без оценок и сравнений" },
    ],
    "sekrety-miniatyurista": [
      { title: "Пространственное мышление", description: "Учимся видеть объёмные формы и планировать конструкцию" },
      { title: "Планирование", description: "От идеи до реализации — полный цикл создания макета" },
      { title: "Усидчивость", description: "Внимание к деталям и терпение в работе" },
      { title: "Гордость за результат", description: "Настоящий макет, созданный своими руками" },
    ],
    "eksploriki": [
      { title: "Естественное восприятие языка", description: "Английский усваивается как родной — через контекст" },
      { title: "Базовый словарный запас", description: "Через игру и общение, без зубрёжки" },
      { title: "Уверенность в коммуникации", description: "Говорим без страха ошибок" },
      { title: "Любопытство к миру", description: "Интерес к другим культурам и традициям" },
    ],
    "shtab-pandy": [
      { title: "Стратегическое мышление", description: "Учимся планировать ходы и предвидеть последствия" },
      { title: "Командная работа", description: "Навыки общения и сотрудничества" },
      { title: "Принятие решений", description: "Учимся делать выбор и нести ответственность" },
      { title: "Лидерство и уважение", description: "Умение вести и уважать других игроков" },
    ],
    "myagkie-lapki": [
      { title: "Координация движений", description: "Крупная моторика и баланс тела" },
      { title: "Пластика и гибкость", description: "Развитие естественной грации движений" },
      { title: "Чувство ритма", description: "Музыкальность и восприятие темпа" },
      { title: "Радость движения", description: "Удовольствие от собственного тела" },
    ],
  };

  return benefitsMap[slug] || [];
}
