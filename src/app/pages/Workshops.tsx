import { Layout } from "../components/Layout";
import { useSEO } from "../hooks/useSEO";
import { useContent } from "../content/ContentContext";
import { WorkshopCard } from "../components/WorkshopCard";

export function Workshops() {
  const { workshops } = useContent();

  useSEO({
    title: "Мастер-классы — Академия Панды | Екатеринбург",
    description:
      "Разовые мастер-классы для детей и взрослых в Академии Панды: творчество, рукоделие, новые техники. Ботанический район Екатеринбурга, запись без абонемента.",
    keywords:
      "мастер-классы для детей Екатеринбург, детские мастер-классы Ботанический район, творческие занятия Екатеринбург, мастер-класс выходного дня",
  });

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-white to-[#F0EDD8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-['Nunito',sans-serif] font-bold text-3xl md:text-5xl text-[#3D3D3D] mb-6">
              {workshops.pageTitle}
            </h1>
            {workshops.pageSubtitle && (
              <p className="font-['Nunito_Sans',sans-serif] text-xl text-[#3D3D3D] leading-relaxed">
                {workshops.pageSubtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {workshops.items.length === 0 ? (
            <p className="text-center font-['Nunito_Sans',sans-serif] text-lg text-[#3D3D3D] opacity-70 py-16">
              Сейчас мастер-классов нет — загляните позже или напишите нам, мы соберём группу.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workshops.items.map((workshop) => (
                // Якорь нужен, чтобы переход с главной открывал нужный мастер-класс.
                <div key={workshop.id} id={workshop.id} className="scroll-mt-28">
                  <WorkshopCard workshop={workshop} buttonText={workshops.buttonText} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
