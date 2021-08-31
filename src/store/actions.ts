import { IUser } from '@/models/user.modal';
import { LoginRequest, RegisterRequest } from '@/models/login-request.model';
import AuthService from "@/services/auth.service";
import ToastrService from "@/services/toastr.service";
import NgvModalService from "@/services/ngv-modal.service";



export default {
    a_login({ commit }: any, payload: LoginRequest): Promise<any> {
        const req = {
            ...payload
        };
        return AuthService.login(req);
    },
    a_register({ commit }: any, payload: RegisterRequest): void {
        const data = {
            ...payload
        };
        AuthService.register(data)
            .then((res: any) => {
                console.log(res);
                ToastrService.success("Notification", "Register Successfully!");
                NgvModalService.close(true);
            })
            .catch((err: any) => {
                ToastrService.error("Error", err.message);
            });
    },
    a_setUser({commit}: any, user: IUser): void {
        commit("m_setUser", user);
    }
}