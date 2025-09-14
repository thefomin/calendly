import { eventService } from "@/features/event/services";
import { useQuery } from "@tanstack/react-query";

function useGetByName(name: string) {
  const { data: event, isLoading } = useQuery({
    queryKey: ["event company", name],
    queryFn: () => eventService.getEvent({ name }),
  });
  return { event, isLoading };
}

export { useGetByName };
