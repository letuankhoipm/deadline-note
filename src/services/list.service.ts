import { IListMoveRequest, IListRequest } from "@/models/board.model"
import { IResponse } from "@/models/http.model"
import http from "./http.service"
import * as signalR from "@microsoft/signalr"

class ListService {
  private _listUrl = "/api/v1/ListItem"

  private _connection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Information)
    .withUrl(this._listUrl)
    .build()

  public startConnection(): void {
    this._connection
      .start()
      .then(() => {
        console.log("signal connected")
      })
      .catch((err) => console.log(err))
  }

  public onSubscribeData(): void {
    this.get()
  }

  public create(data: IListRequest): Promise<IResponse> {
    return http.post(this._listUrl, data)
  }

  public get(): Promise<any> {
    return http.get(this._listUrl)
  }

  public move(data: IListMoveRequest, listId: string): Promise<any> {
    return http.post(`${this._listUrl}/${listId}/pos`, data)
  }
}

export default new ListService()
