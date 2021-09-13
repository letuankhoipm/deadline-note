<template src="./NewTicket.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import {
  XIcon,
  CreditCardIcon,
  UserIcon,
  PencilIcon,
} from "@heroicons/vue/outline";
import NgvModalService from "@/services/ngv-modal.service";
import Multiselect from "@vueform/multiselect";

@Options({
  components: {
    XIcon,
    CreditCardIcon,
    Multiselect,
    UserIcon,
    PencilIcon,
  },
  props: ["input"],
  methods: {
    onCreate(): void {
      console.log(this.newTicketForm);
    },
  },
  data() {
    return {
      newTicketForm: {
        email: null,
        password: "",
        priority: 0,
      },
      get priority(): number {
        return this.newTicketForm.priority;
      },
    };
  },
})
export default class NewTicket extends Vue {
  public priorityLabel = [
    { label: "Done", value: 0 },
    { label: "Proccessing", value: 1 },
    { label: "Cancel", value: 2 },
  ];

  public text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  public onCancel(): void {
    NgvModalService.dismiss();
  }

  //   public onCreate(): void {
  //     // NgvModalService.close();
  //   }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss">
@import "./NewTicket.scss";
</style>