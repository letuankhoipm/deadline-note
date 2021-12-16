<template>
  <div class="ps-login">
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
          <p class="text-white">
            2021 Copyright © Deadline's Notes
            <br />
            All rights reserved
          </p>
        </div>
        <div class="col-span-7 h-full text-center px-10">
          <div class="object-center">
            <img
              class="p-20 mx-auto"
              src="@/assets/images/logo.png"
              alt="logo"
            />
          </div>
          <h3 class="font-weight-bold">
            Deadline's Notes helps teams and you moving up working as fast and
            furious.
          </h3>
          <p>
            Collaborate, manage projects, and reach new productivity peaks. From
            high rises to the home office, the way your team works is
            unique—accomplish it all with Trello.
          </p>
          <p>
            <button
              @click="openRegisterModal()"
              class="btn-ps btn-ps-raise btn m-4"
            >
              get started!
            </button>
            <button
              @click="openLoginModal()"
              class="btn-ps btn-ps-outlined btn m-4"
            >
              sign in!
            </button>
          </p>
          <div class="grid grid-cols-7 mt-40">
            <div></div>
            <div></div>
            <img
              style="width: 150px"
              class="my-auto mx-auto"
              src="@/assets/images/google.svg"
              alt="google"
            />
            <img
              class="my-auto mx-auto"
              style="width: 50px"
              src="@/assets/images/vue.png"
              alt="vue"
            />
            <img
              class="my-auto mx-auto"
              style="width: 75px"
              src="@/assets/images/scss.png"
              alt="scss"
            />
            <img
              class="ps-sponsor-logo my-auto mx-auto"
              src="@/assets/images/ts.png"
              alt="ts"
            />
            <img
              class="my-auto mx-auto"
              style="width: 50px"
              src="@/assets/images/fa.png"
              alt="ts"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginModal from "@/modals/login-modal/LoginModal.vue";
import RegisterModal from "@/modals/register-modal/RegisterModal.vue";
import NgvModalService from "@/services/ngv-modal.service";

@Options({
  props: {},
  components: {
    LoginModal,
    RegisterModal,
  },
  methods: {},
  computed: {},
})
export default class Login extends Vue {
  public openLoginModal(): void {
    NgvModalService.open(LoginModal);
  }

  public openRegisterModal(): void {
    NgvModalService.open(RegisterModal);
  }
}
</script>
<style lang="scss">
@import "./Login.scss";
</style>
