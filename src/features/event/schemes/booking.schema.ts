import { z } from "zod";

// Схема для создания бронирования
export const CreateBookingSchema = z.object({
  guestName: z.string().nonempty("Имя обязательно"),
  guestEmail: z.optional(
    z.string().email({
      message: "Некорректная почта",
    }),
  ),
  phone: z
    .string()
    .nonempty("Телефон обязателен")
    .regex(/^\+?[0-9]{10,15}$/, "Телефон должен быть в правильном формате"),
  telegram: z
    .string()
    .url("Ссылка на Telegram должна быть валидным URL")
    .optional(),
  notes: z.string().optional(),
  eventId: z.string().nonempty("eventId обязателен"),
  availabilityId: z.string().nonempty("availabilityId обязателен"),
  companyName: z.string().nonempty("companyName обязателен"),
  userId: z.string().optional(),
  date: z
    .string()
    .nonempty("Дата обязательна")
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Дата должна быть в формате ISO",
    }),
  time: z.string().nonempty("Время обязательно"),
});

export type TypeCreateBookingSchema = z.infer<typeof CreateBookingSchema>;

export const UpdateBookingSchema = z.object({
  guestName: z.string().optional(),
  guestEmail: z.string().email().optional(),
  phone: z
    .string()
    .regex(/^\+?[0-9]{10,15}$/, {
      message: "Телефон должен быть в правильном формате",
    })
    .optional(),
  telegram: z.string().url().optional(),
  notes: z.string().optional(),
  eventId: z.string().optional(),
  availabilityId: z.string().optional(),
  companyName: z.string().optional(),
  userId: z.string().optional(),
  date: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Дата должна быть в формате ISO",
    })
    .optional(),
  time: z.string().optional(),
});

export type TypeUpdateBookingSchema = z.infer<typeof UpdateBookingSchema>;
