import { z } from "zod";

export const CreateEventSchema = z.object({
  title: z.string(),
  description: z.optional(z.string()),
  duration: z.optional(z.number()),
  ownerId: z.string(),
});

export type TypeCreateEventSchema = z.infer<typeof CreateEventSchema>;

export const UpdateEventSchema = z.object({
  title: z.optional(z.string()),
  description: z.optional(z.string()),
  duration: z.optional(z.number()),
});

export type TypeUpdateEventSchema = z.infer<typeof UpdateEventSchema>;
