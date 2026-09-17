import { Layout } from "../components/Layout";
import { useSEO } from "../hooks/useSEO";
import { useContent } from "../content/ContentContext";
import { CardsPageBody } from "../components/CardsSection";

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
      <CardsPageBody
        block={workshops}
        leadPrefix="Мастер-класс"
        emptyText="Сейчас мастер-классов нет — загляните позже или напишите нам, мы соберём группу."
      />
    </Layout>
  );
}
