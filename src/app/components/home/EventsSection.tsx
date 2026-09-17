// Секция мероприятий на главной. Устроена как мастер-классы —
// та же лента карточек, см. CardsSection.

import { useContent } from "../../content/ContentContext";
import { CardsHomeSection } from "../CardsSection";

export function EventsSection() {
  const { events } = useContent();

  return (
    <CardsHomeSection
      block={events}
      anchor="events"
      href="/events"
      moreLabel="Все мероприятия"
      leadPrefix="Мероприятие"
    />
  );
}
