<template src="./NewProject.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { XIcon } from "@heroicons/vue/outline";
import ngvModalService from "@/services/ngv-modal.service";
@Options({
  components: { XIcon },
  props: {},
  methods: {},
  data() {
    return {};
  },
})
export default class Badge extends Vue {
  public onCancel(): void {
    ngvModalService.dismiss();
  }
}
</script>

<style lang="scss">
@import "./Name.scss";
</style>