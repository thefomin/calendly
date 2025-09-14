import { AvailabilitiesDto } from "./availabilities.types";

export interface EventDto {
  id: string;
  title: string;
  companyName: string;
  description?: string;
  duration: number;
  ownerId: string;
  availabilities: AvailabilitiesDto[];
}
