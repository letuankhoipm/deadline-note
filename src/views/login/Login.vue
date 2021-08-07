<template>
  <div class="ps-login">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-3 p-0 ps-login-bg">
          <img
            class="w-75 ps-login-icon"
            src="@/assets/images/w-icon.svg"
            alt="icon"
          />
          <p class="text-white">
            2021 Copyright © Deadline's Notes
            <br />
            All rights reserved
          </p>
        </div>
        <div class="col-9 pt-4 mt-4">
          <img
            class="w-50 mt-4 p-4"
            src="@/assets/images/logo.png"
            alt="logo"
          />
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
            <button class="btn-ps btn-ps-outlined btn m-4">get started!</button>
            <button class="btn-ps btn-ps-raise btn m-4">get started!</button>
          </p>
          <p class="ps-sponsor">
            <span class="font-weight-bold mx-2"> letuankhoi@designer </span>
            <img
              class="ps-sponsor-logo mx-2"
              src="@/assets/images/google.svg"
              alt="google"
            />
            <img
              class="mx-2"
              style="width: 50px"
              src="@/assets/images/vue.png"
              alt="vue"
            />
            <img
              class="mx-2"
              style="width: 75px"
              src="@/assets/images/scss.png"
              alt="scss"
            />
            <img
              class="ps-sponsor-logo mx-2"
              src="@/assets/images/ts.png"
              alt="ts"
            />
            <img
              class="mx-4"
              style="width: 150px"
              src="@/assets/images/fa.png"
              alt="ts"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  // Module
  props: {}, // Input
  components: {}, // Import component
})
export default class Login extends Vue {}
</script>
<style lang="scss">
@import "./Login.scss";
</style>