import { PathParams, ROUTES } from "@/shared/model/routes";
import { EventLayout, EventDatePicker } from "../components";
import { EventHeader } from "../components/event-header";
import { useGetByName } from "../hooks/event";
import { Navigate, useParams } from "react-router-dom";

function EventPage() {
  const params = useParams<PathParams[typeof ROUTES.DATE]>();
  const { event, isLoading } = useGetByName(params.org as string);
  if (isLoading) return <div>Загрузка...</div>;
  if (!event) return <Navigate to="/404" replace />;
  return (
    <EventLayout
      header={<EventHeader event={event} />}
      title="Выберите дату и время"
    >
      <EventDatePicker event={event} />
    </EventLayout>
  );
}

export const Component = EventPage;
