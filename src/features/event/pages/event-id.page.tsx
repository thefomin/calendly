import { EventForm, EventLayout } from "../components";
import { EventHeader } from "../components/event-header";

function EventIdPage() {
  return (
    <EventLayout header={<EventHeader />} title="Введите данные">
      <EventForm />
    </EventLayout>
  );
}

export const Component = EventIdPage;
