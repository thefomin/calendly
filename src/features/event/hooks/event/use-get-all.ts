import { eventService } from "@/features/event/services";
import { useQuery } from "@tanstack/react-query";

function useGetAll() {
  const { data: events, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: () => eventService.getAll(),
  });
  return { events, isLoading };
}

export { useGetAll };
