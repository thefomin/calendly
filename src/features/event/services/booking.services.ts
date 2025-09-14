import { api } from "@/shared/api";
import { BookingDto } from "../types";
import { TypeCreateBookingSchema, TypeUpdateBookingSchema } from "../schemes";

class BookingService {
  public async getAll() {
    const response = await api.get<BookingDto>(`bookings`);
    return response;
  }
  public async getById(id: string) {
    const response = await api.get<BookingDto>(`bookings/${id}`);
    return response;
  }
  public async create(body: TypeCreateBookingSchema) {
    const response = await api.post<BookingDto>(`bookings`, body);
    return response;
  }
  public async update(body: TypeUpdateBookingSchema) {
    const response = await api.patch<BookingDto>(`bookings`, body);
    return response;
  }
  public async delete(id: string) {
    const response = await api.delete<BookingDto>(`bookings/${id}`);
    return response;
  }
}

export const bookingService = new BookingService();
