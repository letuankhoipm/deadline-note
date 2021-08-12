<template>
  <div
    v-if="isVisibility"
    id="nav"
    class="h-screen"
  >
    <Navbar />
    <div
      v-if="isVisibility"
      class="grid grid-cols-6"
    >
      <div class="col-span-1">
        <Sidebar />
      </div>
      <div class="col-span-5">
        <router-view />
      </div>
    </div>
  </div>

  <router-view v-if="!isVisibility" />
  <Toastr type="error" />

</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Navbar from "@/components/navbar/Navbar.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Toastr from "@/components/toastr/Toastr.vue";
import AuthService from "@/services/auth.service";

@Options({
  components: { Navbar, Toastr, Sidebar },
  props: {},
  created() {
    this.getUrl();
    this.onListenRouting();
  },
  // data() {
  //   return {
  //     currentUrl: null,
  //     isVisibility: null,
  //   };
  // },
})
export default class MainLayout extends Vue {
  public currentUrl: any | null = null;
  public isVisibility = true;

  public getUrl(): void {
    this.currentUrl = window.location.pathname;
    if (this.currentUrl === "/") {
      this.isVisibility = false;
    }
  }

  public onListenRouting(): void {
    AuthService.routeSubject$.subscribe((res: any) => {
      console.log(res);
      res ? (this.isVisibility = true) : (this.isVisibility = false);
    });
  }
}
</script>