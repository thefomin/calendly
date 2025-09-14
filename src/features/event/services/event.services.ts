import { api } from "@/shared/api";
import { EventDto } from "../types";
import { TypeCreateEventSchema, TypeUpdateEventSchema } from "../schemes";

class EventService {
  public async getAll() {
    const response = await api.get<EventDto>(`events`);
    return response;
  }
  public async getEvent({ id, name }: { id?: string; name?: string }) {
    if (id) {
      return api.get<EventDto>(`events?id=${id}`);
    } else if (name) {
      return api.get<EventDto>(`events?name=${name}`);
    }
    throw new Error("Не указан id или name для события");
  }
  public async create(body: TypeCreateEventSchema) {
    const response = await api.post<EventDto>(`events`, body);
    return response;
  }
  public async update(body: TypeUpdateEventSchema) {
    const response = await api.patch<EventDto>(`events`, body);
    return response;
  }
  public async delete(id: string) {
    const response = await api.delete<EventDto>(`events/${id}`);
    return response;
  }
}

export const eventService = new EventService();
