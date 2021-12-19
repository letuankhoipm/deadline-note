import { ITicketMoveRequest, ITicketRequest } from "@/models/board.model";
import { IResponse } from "@/models/http.model";
import http from "./http.service";

class TicketService {
  private _ticketUrl = "/api/v1/Ticket";

  public create(data: ITicketRequest): Promise<IResponse> {
    return http.post(this._ticketUrl, data);
  }

  public get(): Promise<any> {
    return http.get(this._ticketUrl);
  }

  public delete(ticketId: string): Promise<any> {
    return http.delete(`${this._ticketUrl}/${ticketId}`);
  }

  public move(data: ITicketMoveRequest, ticketId: string): Promise<any> {
    return http.post(`${this._ticketUrl}/${ticketId}/pos`, data);
  }

  public description(data: any, ticketId: string): Promise<any> {
    return http.patch(`${this._ticketUrl}/${ticketId}/description`, data);
  }

  public title(ticketId: string, data: any): Promise<any> {
    return http.patch(`${this._ticketUrl}/${ticketId}/title`, data);
  }
}

export default new TicketService();
