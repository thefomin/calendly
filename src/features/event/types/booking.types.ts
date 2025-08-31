export interface BookingDto {
  guestName: string;
  guestEmail: string;
  phone: string;
  telegram?: string;
  notes?: string;
  eventId: string;
  userId?: string;
  date: string;
  time: string;
}
