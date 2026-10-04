// Акции на главной. Та же лента карточек, что у мастер-классов (CardsSection).
// Закончившиеся и ещё не начавшиеся акции сюда не попадают — их отсеивает
// разбор контента (ContentContext), поэтому секция исчезает сама.

import { useContent } from "../../content/ContentContext";
import { CardsHomeSection } from "../CardsSection";

export function PromotionsSection() {
  const { promotions } = useContent();

  return (
    <CardsHomeSection
      block={promotions}
      anchor="promotions"
      href="/promotions"
      moreLabel="Все акции"
      leadPrefix="Акция"
      kind="promo"
    />
  );
}
