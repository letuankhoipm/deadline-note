import { IList, IListRequest } from "@/models/board.model";
import { IResponse } from "@/models/http.model";
import http from "./http.service";

class ListService {
    private _listUrl = "/api/v1/ListItem";

    public create(data: IListRequest): Promise<IResponse> {
        return http.post(this._listUrl, data);
    }

    public get(): Promise<any> {
        return http.get(this._listUrl);
    }
}

export default new ListService();
