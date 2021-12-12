import http from "./http.service";

class UserService {
  private _userUrl = "/api/v1/User";

  public getUser(): Promise<any> {
    return http.get(`${this._userUrl}/profile`);
  }
}

export default new UserService();
