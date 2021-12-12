import { IUser } from "@/models/user.modal";
import { LoginRequest } from "@/models/login-request.model";
import AuthService from "@/services/auth.service";

export default {
  a_login(payload: LoginRequest): Promise<any> {
    const req = {
      ...payload,
    };
    return AuthService.login(req);
  },
  a_setUser({ commit }: any, user: IUser): void {
    commit("m_setUser", user);
  },
};
