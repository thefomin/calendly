import { useQuery } from "@tanstack/react-query";
import { bookingService } from "../../services";

function useDates() {
  const { data: dates, isLoading } = useQuery({
    queryKey: ["dates"],
    queryFn: () => bookingService.getDates(),
  });
  return { dates, isLoading };
}

export { useDates };
