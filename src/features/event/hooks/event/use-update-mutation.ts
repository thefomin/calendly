import { TypeUpdateEventSchema } from "@/features/event/schemes";
import { eventService } from "@/features/event/services";
import { useMutation } from "@tanstack/react-query";

function useUpdateMutation() {
  const { mutate: event, isPending } = useMutation({
    mutationKey: ["update event"],
    mutationFn: (data: TypeUpdateEventSchema) => eventService.update(data),
    // onSuccess() {
    //   toast.success("Событие создано");
    // },
    // onError(error) {
    //   toastMessageHandler(error);
    // },
  });
  return { event, isPending };
}

export { useUpdateMutation };
