import { LoginRequest } from '@/models/login-request.model';
import AuthService from "@/services/auth.service";

export default {
    // updateUser2(context: any, payload: any): void {
    //     context.commit('getUser', payload)
    // },
    a_login({ commit }: any, payload: LoginRequest): Promise<any> {
        const req = {
            ...payload
        };
        return AuthService.login(req);
    }
}