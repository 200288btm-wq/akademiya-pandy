// Секция мастер-классов на главной: карточки листаются по горизонтали,
// клик по карточке ведёт на страницу со списком, к нужному месту.
//
// Разметка общая с мероприятиями — см. CardsSection.

import { useContent } from "../../content/ContentContext";
import { CardsHomeSection } from "../CardsSection";

export function WorkshopsSection() {
  const { workshops } = useContent();

  return (
    <CardsHomeSection
      block={workshops}
      anchor="workshops"
      href="/workshops"
      moreLabel="Все мастер-классы"
      leadPrefix="Мастер-класс"
    />
  );
}
