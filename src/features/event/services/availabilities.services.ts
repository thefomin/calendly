import { api } from "@/shared/api";
import { AvailabilitiesDto } from "../types";

class AvailabilitiesService {
  public async getAll() {
    const response = await api.get<AvailabilitiesDto>(`availabilities`);
    return response;
  }
  public async getById(date: string) {
    const response = await api.get<AvailabilitiesDto>(`availabilities/${date}`);
    return response;
  }
  public async create(body: AvailabilitiesDto) {
    const response = await api.post<AvailabilitiesDto>(`availabilities`, body);
    return response;
  }
  public async update(body: AvailabilitiesDto) {
    const response = await api.patch<AvailabilitiesDto>(`availabilities`, body);
    return response;
  }
  public async delete(id: string) {
    const response = await api.delete<AvailabilitiesDto>(
      `availabilities/${id}`,
    );
    return response;
  }
}

export const availabilitiesService = new AvailabilitiesService();
