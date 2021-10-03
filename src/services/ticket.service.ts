import { IListMoveRequest, ITicketRequest } from "@/models/board.model";
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

    public move(data: IListMoveRequest, listId: string): Promise<any> {
        return http.post(`${this._ticketUrl}/${listId}/pos`, data);
    }
}

export default new TicketService();
