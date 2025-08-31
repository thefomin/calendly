import { EventLayout, EventDatePicker } from "../components";
import { EventHeader } from "../components/event-header";

function EventPage() {
  return (
    <EventLayout header={<EventHeader />} title="Выберите дату и время">
      <EventDatePicker />
    </EventLayout>
  );
}

export const Component = EventPage;
