import { TypeCreateEventSchema } from "@/features/event/schemes";
import { eventService } from "@/features/event/services";
import { useMutation } from "@tanstack/react-query";

function useCreate() {
  const { data: create, isPending } = useMutation({
    mutationKey: ["create create"],
    mutationFn: (data: TypeCreateEventSchema) => eventService.create(data),
  });
  return { create, isPending };
}

export { useCreate };
