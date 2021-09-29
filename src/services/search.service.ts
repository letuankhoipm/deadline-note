import { IUser } from './../models/user.modal';
import http from "./http.service";

class SearchService {

    private _searchUrl = "/api/v1/Search";

    public searchUser(email: string): Promise<IUser[]> {
        return http.get(`${this._searchUrl}/user?email=${email}`);
    }
}

export default new SearchService();