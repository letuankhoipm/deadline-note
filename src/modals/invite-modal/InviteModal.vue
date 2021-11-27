<template src="./InviteModal.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import { XIcon } from "@heroicons/vue/outline"
import { IInvite } from "@/models/project.model"
import { Subject } from "rxjs"
import { debounceTime } from "rxjs/operators"
import projectService from "@/services/project.service"
import searchService from "@/services/search.service"
import ngvModalService from "@/services/ngv-modal.service"
import Multiselect from "@vueform/multiselect"
import { IUser } from "@/models/user.modal"

@Options({
  components: { XIcon, Multiselect },
  props: ["input"],
  methods: {},
  data() {
    return {}
  },
  created() {
    this._onSearching()
    this.projectId = this.$route.params.id
  },
})
export default class InviteModal extends Vue {
  public users = []
  public projectId = ""

  public onSearch$ = new Subject<any>()

  public userInvite = []

  public email = ""

  public onInvite(): void {
    const req: IInvite = {
      userIds: this.userInvite,
      projectId: this.projectId,
    }
    projectService.invite(req).then().catch()
  }

  public onTyping(event: Event): void {
    const searchField = event
    this.onSearch$.next(searchField)
  }

  public onCancel(): void {
    ngvModalService.dismiss()
  }

  private _onSearching(): void {
    this.onSearch$.pipe(debounceTime(500)).subscribe((key: string) => {
      console.log(`search ${key}`)
      if (key.length !== 0) {
        searchService.searchUser(key).then((res: any) => {
          if (res.data) {
            this.users = res.data
            this.users.forEach((user: IUser) => {
              user.label = user.email
              user.value = user.id
            })
          }
        })
      } else {
        return
      }
    })
  }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss">
@import "./InviteModal.scss";
</style>
