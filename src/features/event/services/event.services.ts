import { api } from "@/shared/api";
import { EventDto } from "../types";

class EventService {
  public async getAll() {
    const response = await api.get<EventDto>(`/events`);
    return response;
  }
  public async getById(id: string) {
    const response = await api.get<EventDto>(`/events/${id}`);
    return response;
  }
  public async create() {
    const response = await api.post<EventDto>(`/events`);
    return response;
  }
  public async update() {
    const response = await api.patch<EventDto>(`/events`);
    return response;
  }
  public async delete(id: string) {
    const response = await api.delete<EventDto>(`/events/${id}`);
    return response;
  }
}

export const eventService = new EventService();
