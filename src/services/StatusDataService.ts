import http from "@/http-common";

class StatusDataService {
  getAll(): Promise<any> {
    return http.get("/status");
  }

  get(id:any): Promise<any> {
    return http.get(`/status/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/status", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/status/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/status/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/status`);
  }
  
  findByTitle(title: string): Promise<any> {
    return http.get(`/status?title=${title}`);
  }
}

export default new StatusDataService();
