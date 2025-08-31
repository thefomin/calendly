import { api } from "@/shared/api";
import { BookingDto } from "../types";

class BookingService {
  public async getAll() {
    const response = await api.get<BookingDto>(`/bookings`);
    return response;
  }
  public async getById(id: string) {
    const response = await api.get<BookingDto>(`/bookings/${id}`);
    return response;
  }
  public async create() {
    const response = await api.post<BookingDto>(`/bookings`);
    return response;
  }
  public async update() {
    const response = await api.patch<BookingDto>(`/bookings`);
    return response;
  }
  public async delete(id: string) {
    const response = await api.delete<BookingDto>(`/bookings/${id}`);
    return response;
  }
}

export const bookingService = new BookingService();
