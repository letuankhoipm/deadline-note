import { CommentRequest } from "@/models/comment.model";
import http from "./http.service";

export class CommentService {
  private _commentUrl = "/api/v1/comment";

  public get(): Promise<any> {
    return http.get(this._commentUrl);
  }

  public create(comment: CommentRequest): Promise<any> {
    return http.post(this._commentUrl, comment);
  }

  public update(id: string, comment: CommentRequest): Promise<any> {
    return http.put(`${this._commentUrl}/${id}`, comment);
  }

  public delete(id: string): Promise<any> {
    return http.delete(`${this._commentUrl}/${id}`);
  }
}

export default new CommentService();
