<template src="./NewBoard.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import { XIcon, CreditCardIcon } from "@heroicons/vue/outline"
import ngvModalService from "@/services/ngv-modal.service"
import boardService from "@/services/board.service"
import { IBoardRequest } from "@/models/board.model"
import toastrService from "@/services/toastr.service"
@Options({
  components: { XIcon, CreditCardIcon },
  props: ["input"],
  data() {
    return {
      newBoardForm: {
        title: null,
        projectId: null,
      } as unknown as IBoardRequest,
    }
  },
})
export default class NewBoard extends Vue {
  get input(): any {
    return this.input
  }

  get newBoardForm(): IBoardRequest {
    return this.newBoardForm
  }

  mounted(): void {
    if (this.input) {
      this.newBoardForm.projectId = this.input.projectId
    }
    console.log(this.input.projectId)
  }

  public onCancel(): void {
    ngvModalService.dismiss()
  }

  public onCreateBoard(): void {
    boardService
      .create(this.newBoardForm)
      .then((res: any) => {
        if (!res) {
          return
        }
        toastrService.success("Notification", "Create board successfully!")
        ngvModalService.close()
      })
      .catch((err) => console.log(err))
  }
}
</script>

<style lang="scss">
@import "./NewBoard.scss";
</style>
