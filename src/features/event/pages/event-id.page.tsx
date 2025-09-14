import { Navigate, useParams } from "react-router-dom";
import { EventForm, EventLayout } from "../components";
import { EventHeader } from "../components/event-header";
import { useGetByName } from "../hooks/event";
import { PathParams, ROUTES } from "@/shared/model/routes";
import { useGetById } from "../hooks/availabilities";

function EventIdPage() {
  const params = useParams<PathParams[typeof ROUTES.DATE]>();
  const { event, isLoading } = useGetByName(params.org as string);
  const { availability, isLoading: isAvailabilityLoading } = useGetById(
    params.eventId as string,
  );
  if (isLoading || isAvailabilityLoading) return <div>Загрузка...</div>;
  if (!event || !availability) return <Navigate to="/404" replace />;
  return (
    <EventLayout header={<EventHeader event={event} />} title="Введите данные">
      <EventForm event={event} />
    </EventLayout>
  );
}

export const Component = EventIdPage;
