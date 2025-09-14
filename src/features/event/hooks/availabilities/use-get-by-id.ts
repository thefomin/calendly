import { availabilitiesService } from "@/features/event/services";
import { useQuery } from "@tanstack/react-query";

function useGetById(date: string) {
  const { data: availability, isLoading } = useQuery({
    queryKey: ["availability", date],
    queryFn: () => availabilitiesService.getById(date),
  });
  return { availability, isLoading };
}

export { useGetById };
