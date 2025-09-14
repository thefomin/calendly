import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
} from "@/shared/ui/kit";
import { CreateBookingSchema, TypeCreateBookingSchema } from "../schemes";
import { useForm } from "react-hook-form";
import { useCreate } from "../hooks/booking";
import { AvailabilityStatus, EventDto } from "../types";
import { useParams, useSearchParams } from "react-router-dom";
import { PathParams, ROUTES } from "@/shared/model/routes";

export const EventForm = ({ event }: { event: EventDto }) => {
  const [searchParams] = useSearchParams();
  const params = useParams<PathParams[typeof ROUTES.DATE]>();

  const dateParam = searchParams.get("date");
  const timeParam = searchParams.get("time") || "";

  const selectedAvailability = event.availabilities.find(
    (slot) =>
      slot.date.slice(0, 10) === dateParam &&
      slot.time === timeParam &&
      slot.status === AvailabilityStatus.FREE,
  );

  const availabilityId = selectedAvailability?.id;

  const form = useForm<TypeCreateBookingSchema>({
    resolver: zodResolver(CreateBookingSchema),
    defaultValues: {
      guestName: "",
      guestEmail: "",
      telegram: "",
      phone: "",
      date: params.eventId,
      time: timeParam,
      eventId: event.id,
      availabilityId: availabilityId,
      companyName: params.org,
    },
  });
  const { create, isPending } = useCreate();

  const onSubmit = (values: TypeCreateBookingSchema) => {
    create(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          console.log("Validation errors:", errors);
        })}
      >
        <div className="flex flex-col gap-6 w-3/4">
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="guestName"
              render={({ field }) => (
                <FormItem>
                  <Label>Имя *</Label>
                  <FormControl>
                    <Input
                      placeholder="Имя"
                      type="text"
                      disabled={isPending}
                      {...field}
                      className="focus:ring-0 focus:ring-0 h-[40px] rounded-[8px]"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guestEmail"
              render={({ field }) => (
                <FormItem>
                  <Label>Почта *</Label>
                  <FormControl>
                    <Input
                      placeholder="email"
                      type="email"
                      disabled={isPending}
                      {...field}
                      className="focus:ring-0 focus:ring-0 h-[40px] rounded-[8px]"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <Label>Телефон *</Label>
                  <FormControl>
                    <Input
                      placeholder="+79504373061"
                      type="tel"
                      disabled={isPending}
                      {...field}
                      className="focus:ring-0 focus:ring-0 h-[40px] rounded-[8px]"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telegram"
              render={({ field }) => (
                <FormItem>
                  <Label>Телеграм *</Label>
                  <FormControl>
                    <Input
                      placeholder="Ссылка"
                      type="url"
                      disabled={isPending}
                      {...field}
                      className="focus:ring-0 focus:ring-0 h-[40px] rounded-[8px]"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            disabled={isPending}
            className="w-fit bg-[#006bff] rounded-full h-[40px] hover:bg-[#004eba] cursor-pointer disabled:opacity-50"
          >
            Запланировать событие
          </Button>
        </div>
      </form>
    </Form>
  );
};
