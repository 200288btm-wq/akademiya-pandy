import { Layout } from "../components/Layout";
import { useSEO } from "../hooks/useSEO";
import { useContent } from "../content/ContentContext";
import { CardsPageBody } from "../components/CardsSection";

export function Shop() {
  const { shop } = useContent();

  useSEO({
    title: "Витрина работ — Академия Панды | Екатеринбург",
    description:
      "Готовые работы учеников и педагогов Академии Панды: картины, поделки, подарки ручной работы. Можно купить в Ботаническом районе Екатеринбурга.",
    keywords:
      "детские работы купить, подарок ручной работы Екатеринбург, картины детей, Академия Панды витрина",
  });

  return (
    <Layout>
      <CardsPageBody
        block={shop}
        leadPrefix="Витрина"
        kind="shop"
        emptyText="Сейчас на витрине пусто — скоро появятся новые работы."
      />
    </Layout>
  );
}
