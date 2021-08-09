import { RegisterRequest } from '@/models/login-request.model';
import { LoginRequest } from '@/models/login-request.model';
import http from "./http.service";

class AuthService {

    private _authUrl = "/api/v1/Auth";

    public login(req: LoginRequest): Promise<any> {
        return http.post(`${this._authUrl}/login`, req);
    }

    public register(req: RegisterRequest): Promise<any> {
        return http.post(`${this._authUrl}/register`, req);
    }
}

export default new AuthService();