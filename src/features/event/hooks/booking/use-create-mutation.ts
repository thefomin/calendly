import { TypeCreateBookingSchema } from "@/features/event/schemes";
import { bookingService } from "@/features/event/services";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useCreate() {
  const navigate = useNavigate();
  const { mutate: create, isPending } = useMutation({
    mutationKey: ["create"],
    mutationFn: (values: TypeCreateBookingSchema) =>
      bookingService.create(values),
    onSuccess: (data) => {
      console.log("Запрос успешен:", JSON.stringify(data));
      navigate(`/${data.companyName}/invitees/${data.id}`);
    },
    onError: (error) => {
      console.error("Ошибка при получении availability:", error);
    },
  });
  return { create, isPending };
}
