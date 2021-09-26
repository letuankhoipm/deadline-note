<template src="./NewBoard.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { XIcon, CreditCardIcon } from "@heroicons/vue/outline";
import ngvModalService from "@/services/ngv-modal.service";
import boardService from "@/services/board.service";
import { IBoardRequest } from "@/models/board.model";
@Options({
  components: { XIcon, CreditCardIcon },
  props: ["input"],
  methods: {
    onCreateBoard(): void {
      console.log(this.newBoardForm);
      boardService
        .create(this.newBoardForm)
        .then((res: any) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    },
  },
  data() {
    return {
      newBoardForm: {
        name: null,
        projectId: null,
      } as unknown as IBoardRequest,
    };
  },
  created() {
    if (this.input) {
      this.newBoardForm.projectId = this.input.projectId;
    }
    console.log(this.input.projectId);
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