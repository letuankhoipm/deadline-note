<template>
  <div id="nav">
    <Navbar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/navbar/Navbar.vue"; // @ is an alias to /src

@Options({
  components: {
    Navbar,
  },
})
export default class Home extends Vue {}
</script>
