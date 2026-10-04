import { Layout } from "../components/Layout";
import { useSEO } from "../hooks/useSEO";
import { useContent } from "../content/ContentContext";
import { CardsPageBody } from "../components/CardsSection";

export function Promotions() {
  const { promotions } = useContent();

  useSEO({
    title: "Акции — Академия Панды | Екатеринбург",
    description:
      "Действующие акции и специальные предложения развивающего центра Академия Панды в Ботаническом районе Екатеринбурга.",
    keywords:
      "акции детский центр Екатеринбург, скидки на занятия для детей, Академия Панды акции, Ботанический район",
  });

  return (
    <Layout>
      <CardsPageBody
        block={promotions}
        leadPrefix="Акция"
        kind="promo"
        emptyText="Сейчас акций нет — загляните позже или напишите нам."
      />
    </Layout>
  );
}
