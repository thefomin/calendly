import { bookingService } from "@/features/event/services";
import { useQuery } from "@tanstack/react-query";

function useGetById(id: string) {
  const { data: booking, isLoading } = useQuery({
    queryKey: ["booking", id],
    queryFn: () => bookingService.getById(id),
  });
  return { booking, isLoading };
}

export { useGetById };
