export interface AvailabilitiesDto {
  id: string;
  date: string;
  time: string;
  eventId: string;
  status: AvailabilityStatus;
}

export enum AvailabilityStatus {
  FREE = "FREE",
  BOOKED = "BOOKED",
}
