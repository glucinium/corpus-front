import http from "@/http-common";

class ArtworkDataService {
  getAll(): Promise<any> {
    return http.get("/artworks");
  }

  get(id:any): Promise<any> {
    return http.get(`/artworks/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/artworks", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/artworks/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/artworks/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/artworks`);
  }
  
  findByTitle(title: string): Promise<any> {
    return http.get(`/artworks?title=${title}`);
  }
}

export default new ArtworkDataService();
