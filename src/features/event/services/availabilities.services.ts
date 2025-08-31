import { api } from "@/shared/api";
import { AvailabilitiesDto } from "../types";

class AvailabilitiesService {
  public async getAll() {
    const response = await api.get<AvailabilitiesDto>(`/availabilities`);
    return response;
  }
  public async getById(id: string) {
    const response = await api.get<AvailabilitiesDto>(`/availabilities/${id}`);
    return response;
  }
  public async create() {
    const response = await api.post<AvailabilitiesDto>(`/availabilities`);
    return response;
  }
  public async update() {
    const response = await api.patch<AvailabilitiesDto>(`/availabilities`);
    return response;
  }
  public async delete(id: string) {
    const response = await api.delete<AvailabilitiesDto>(
      `/availabilities/${id}`,
    );
    return response;
  }
}

export const availabilitiesService = new AvailabilitiesService();
