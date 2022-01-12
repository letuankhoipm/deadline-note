<template>
  <div class="ps-login h-full">
    <div class="container h-full">
      <div class="grid grid-cols-9 h-full">
        <div class="col-span-2 h-full text-center ps-login-bg">
          <p class="text-center">
            <img
              class="ps-login-icon w-full p-20"
              src="@/assets/images/w-icon.svg"
              alt="icon"
            />
          </p>
        </div>
        <div class="col-span-4"></div>
        <div class="col-span-3 h-full text-right content-center px-10">
          <div class="h-full flex flex-wrap content-center text-right">
            <h1 class="font-weight-bold w-full text-4xl">Forget Password</h1>
            <p>
              Change your password, you must fill in the email and your domain
              to reset password!
            </p>
            <form class="w-full">
              <div class="my-4 w-full">
                <p class="text-sm text-gray-500">Email</p>
                <input
                  id="email"
                  class="w-full"
                  v-model="forgotPasswordForm.email"
                  name="email"
                  type="email"
                />
              </div>
              <div class="w-full my-4">
                <p class="text-sm text-gray-500">Domain</p>
                <input
                  id="domain"
                  v-model="forgotPasswordForm.domain"
                  name="domain"
                  type="domain"
                />
              </div>
            </form>
            <p class="text-right w-full">
              <button
                @click="returnLogin"
                class="btn-ps btn-ps-outlined btn mr-4"
              >
                return login
              </button>
              <button
                @click="resetPassword()"
                class="btn-ps btn-ps-raise btn ml-4"
              >
                send request
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import authService from '@/services/auth.service';
import toastrService from '@/services/toastr.service';
import { Vue, Options } from 'vue-class-component';
@Options({
  components: {},
  props: {},
  methods: {},
  data() {
    return {};
  },
  created() {
    this.initState();
  },
})
export default class ForgotPassword extends Vue {
  public forgotPasswordForm = {
    email: '',
    domain: '',
  };

  public initState(): void {
    authService.routeSubject$.next(false);
  }

  public resetPassword(): void {
    if (!this.forgotPasswordForm) {
      return;
    }
    authService.forget(this.forgotPasswordForm).then((res: any) => {
      if (res) {
        toastrService.success('Notification', 'Add comment successfully!');
      }
    });
  }

  public returnLogin(): void {
    this.$router.push('/');
  }
}
</script>

<style lang="scss">
@import './ForgotPassword.scss';
</style>
