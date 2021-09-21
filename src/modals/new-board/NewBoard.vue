<template src="./NewBoard.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { XIcon, CreditCardIcon } from "@heroicons/vue/outline";
import ngvModalService from "@/services/ngv-modal.service";
@Options({
  components: { XIcon, CreditCardIcon },
  props: {},
  methods: {},
  data() {
    return {};
  },
})
export default class NewBoard extends Vue {
  public onCancel(): void {
    ngvModalService.dismiss();
  }
}
</script>

<style lang="scss">
@import "./NewBoard.scss";
</style>