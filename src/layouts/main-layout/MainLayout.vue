<template>
  <div
    v-if="isVisibility"
    id="nav"
  >
    <Navbar />
  </div>
  <router-view />
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Navbar from "@/components/navbar/Navbar.vue";
@Options({
  components: { Navbar },
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
    if (this.currentUrl === "/login") {
      this.isVisibility = false;
    }
  }
}
</script>