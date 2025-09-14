import { EventDto, AvailabilitiesDto } from ".";

export interface BookingDto {
  id: string;
  guestName: string;
  guestEmail: string;
  phone: string;
  telegram?: string;
  notes?: string;
  eventId: string;
  userId?: string;
  companyName: string;
  date: string;
  time: string;
  event: EventDto;
  availability: AvailabilitiesDto;
}
