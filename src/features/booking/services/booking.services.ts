import { api } from "@/shared/api";
import { IDates } from "../types";

class BookingService {
  public async getDates() {
    const response = await api.get<IDates[]>(`/dates`);
    return response;
  }
  //   public async createTask(body: TypeCreateSchema) {
  //     const response = await api.post<ITag>("users/tasks/${taskId}/tag", body);
  //     return response;
  //   }
  //   public async updateTask(body: TypeUpdateSchema, taskId: string, id: string) {
  //     const response = await api.patch<ITag>(
  //       `users/tasks/${taskId}/tag/${id}`,
  //       body,
  //     );
  //     return response;
  //   }
  //   public async deleteTask(id: string) {
  //     const response = await api.delete<ITag>(`users/tasks/${id}`);
  //     return response;
  //   }
  //   public async findOneTask(id: string) {
  //     const response = await api.get<ITag>(`users/tasks/${id}`);
  //     return response;
  //   }
}

export const bookingService = new BookingService();
