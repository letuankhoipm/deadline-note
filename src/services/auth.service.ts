import { RegisterRequest } from "@/models/login-request.model";
import { LoginRequest } from "@/models/login-request.model";
import { Subject } from "rxjs";
import http from "./http.service";

class AuthService {
  private _authUrl = "/api/v1/Auth";
  public routeSubject$ = new Subject();

  public login(req: LoginRequest): Promise<any> {
    return http.post(`${this._authUrl}/login`, req);
  }

  public register(req: RegisterRequest): Promise<any> {
    return http.post(`${this._authUrl}/register`, req);
  }

  public routing(): void {
    this.routeSubject$.next(true);
  }

  public logout(): void {
    this.routeSubject$.next(false);
  }

  public forget(forgotReq: any): Promise<any> {
    return http.post(`${this._authUrl}/forgot-password`, forgotReq);
  }
}

export default new AuthService();
