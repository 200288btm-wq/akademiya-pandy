import { Layout } from "../components/Layout";
import { useSEO } from "../hooks/useSEO";
import { useContent } from "../content/ContentContext";
import { CardsPageBody } from "../components/CardsSection";

export function Events() {
  const { events } = useContent();

  useSEO({
    title: "Мероприятия — Академия Панды | Екатеринбург",
    description:
      "Праздники, дни рождения и события для детей в Академии Панды. Ботанический район Екатеринбурга, запись без абонемента.",
    keywords:
      "детские мероприятия Екатеринбург, детский праздник Ботанический район, день рождения ребёнка Екатеринбург, события для детей Екатеринбург",
  });

  return (
    <Layout>
      <CardsPageBody
        block={events}
        leadPrefix="Мероприятие"
        emptyText="Сейчас мероприятий нет — загляните позже или напишите нам, расскажем о ближайших."
      />
    </Layout>
  );
}
