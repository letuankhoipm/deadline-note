import { IListMoveRequest, IListRequest } from '@/models/board.model';
import { IResponse } from '@/models/http.model';
import http from './http.service';
import * as signalR from '@microsoft/signalr';

class ListService {
  private _listUrl = '/api/v1/ListItem';

  private _connection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Information)
    .withUrl(this._listUrl)
    .build();

  public startConnection(): void {
    this._connection
      .start()
      .then(() => {})
      .catch();
  }

  public onSubscribeData(): void {
    this.get();
  }

  public create(data: IListRequest): Promise<IResponse> {
    return http.post(this._listUrl, data);
  }

  public get(): Promise<any> {
    return http.get(this._listUrl);
  }

  public move(data: IListMoveRequest, listId: string): Promise<any> {
    return http.post(`${this._listUrl}/${listId}/pos`, data);
  }

  public remove(listId: string): Promise<any> {
    return http.delete(`${this._listUrl}/${listId}`);
  }
}

export default new ListService();
