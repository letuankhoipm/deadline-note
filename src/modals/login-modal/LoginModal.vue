<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
      </span>

      <div
        class="
          inline-block
          align-bottom
          bg-white
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
        "
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="w-full">
            <div class="mt-3 text-center sm:mt-0 sm:text-left">
              <div class="grid grid-cols-2">
                <div class="col-span">
                  <h1 style="font-size: 25px" class="font-bold uppercase">
                    Login
                  </h1>
                </div>
                <div class="col-span text-right">
                  <XIcon
                    @click="cancel()"
                    class="
                      h-5
                      w-5
                      float-right
                      leading-8
                      self-center
                      cursor-pointer
                    "
                  />
                </div>
              </div>
              <div class="mt-2">
                <form>
                  <div class="w-full my-4">
                    <p class="text-sm text-gray-500">Email</p>
                    <input
                      id="login-email"
                      v-model="loginReq.email"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div class="w-full my-4">
                    <p class="text-sm text-gray-500">Password</p>
                    <input
                      id="login-password"
                      v-model="loginReq.password"
                      name="password"
                      type="password"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="login" class="btn-ps btn-ps-raise btn my-2">
            next
          </button>
          <button
            @click="goToForgotPassword"
            class="btn-ps btn-ps-flat btn my-2"
          >
            forgot password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AuthService from "@/services/auth.service";
import { LoginRequest } from "@/models/login-request.model";
import Toastr from "@/components/toastr/Toastr.vue";
import ToastrService from "@/services/toastr.service";
import NgvModalService from "@/services/ngv-modal.service";
import { IUser } from "@/models/user.modal";
import { XIcon } from "@heroicons/vue/outline";
import authService from "@/services/auth.service";

@Options({
  props: {},
  components: { Toastr, XIcon },
  data() {
    return {
      loginReq: {
        email: null,
        password: "",
      } as unknown as LoginRequest,
    };
  },
})
export default class LoginModal extends Vue {
  get loginReq(): LoginRequest {
    return this.loginReq;
  }

  public login(): void {
    const req = {
      email: this.loginReq.email,
      password: this.loginReq.password,
    };
    authService.login(req).then(
      (res: any) => {
        this._onLoginSuccess(res.data.user, res.data.token);
      },
      () => {
        this._onLoginFailed(`Email or password incorrect!`);
      }
    );
  }

  private _onLoginSuccess(user: IUser, token: string): void {
    const userStr = JSON.stringify(user);
    ToastrService.success("Notification", "Login Successfully!");
    NgvModalService.dismiss();
    this.$router.push("/home");
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("USER", userStr);
    AuthService.routing();
    setTimeout(() => {
      location.reload();
    }, 500);
  }

  private _onLoginFailed(msg: string): void {
    ToastrService.error("Error", msg);
  }

  public goToForgotPassword(): void {
    NgvModalService.dismiss();
    this.$router.push("/forgot-password");
  }

  public cancel(): void {
    NgvModalService.close(true);
  }
}
</script>
