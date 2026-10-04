// Витрина готовых работ на главной. Та же лента карточек (CardsSection),
// у карточки — автор, материал, размер и статус продажи.

import { useContent } from "../../content/ContentContext";
import { CardsHomeSection } from "../CardsSection";

export function ShopSection() {
  const { shop } = useContent();

  return (
    <CardsHomeSection
      block={shop}
      anchor="shop"
      href="/shop"
      moreLabel="Вся витрина"
      leadPrefix="Витрина"
      kind="shop"
    />
  );
}
