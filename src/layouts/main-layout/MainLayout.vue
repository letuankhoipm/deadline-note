<template>
  <div
    v-if="isVisibility"
    id="nav"
  >
    <Navbar />
  </div>
  <Toastr type="error" />
  <router-view />

</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Navbar from "@/components/navbar/Navbar.vue";
import Toastr from "@/components/toastr/Toastr.vue";

@Options({
  components: { Navbar, Toastr },
  props: {},
  created() {
    this.getUrl();
  },
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
}
</script>