import { IResponse } from "./../models/http.model"
import { IBoard, IBoardRequest } from "@/models/board.model"
import http from "./http.service"

class BoardService {
  private _boardUrl = "/api/v1/Board"

  public getById(boardId: string): Promise<IBoard[]> {
    return http.get(`${this._boardUrl}/${boardId}`)
  }

  public create(data: IBoardRequest): Promise<IResponse> {
    return http.post(this._boardUrl, data)
  }

  public update(data: IBoard): Promise<any> {
    return http.put(this._boardUrl, data)
  }

  public delete(boardId: string): Promise<IResponse> {
    return http.delete(`${this._boardUrl}/${boardId}`)
  }

  public getTicketByBoard(boardId: string): Promise<any> {
    return http.get(`${this._boardUrl}/${boardId}/tickets`)
  }

  public getListCollection(boardId: any): Promise<any> {
    return http.get(`${this._boardUrl}/${boardId}/lists`)
  }
}

export default new BoardService()
