<template src="./NewList.html"></template>

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
export default class NewList extends Vue {
  public onCancel(): void {
    ngvModalService.dismiss();
  }
}
</script>

<style lang="scss">
@import "./NewList.scss";
</style>