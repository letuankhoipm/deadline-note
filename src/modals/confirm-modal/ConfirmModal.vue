<template src="./ConfirmModal.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import ngvModalService from "@/services/ngv-modal.service"
@Options({
  components: {},
  props: ["input"],
  methods: {},
  data() {
    return {}
  },
})
export default class ConfirmModal extends Vue {
  public onConfirm(): void {
    ngvModalService.close(true)
  }

  public onCancel(): void {
    ngvModalService.dismiss(true)
  }
}
</script>

<style lang="scss">
@import "./ConfirmModal.scss";
</style>
