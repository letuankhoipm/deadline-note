<template>
<div class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
    <div
      class="inline-block align-bottom bg-white overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="w-full">
          <div class="mt-3 text-center sm:mt-0 sm:text-left">
            <div class="grid grid-cols-2">
              <div class="col-span">
                <h1 style="font-size: 25px" class="font-bold uppercase">invite
                </h1>
              </div>
              <div class="col-span text-right">
                <XIcon @click="onCancel()" class="h-5 w-5 float-right leading-8 seft-center cursor-pointer" />
              </div>
            </div>
            <div class="mt-2">
              <p>Invite a collaborator to project</p>
              <form>
                <div class="form-group">
                  <p class="text-sm text-gray-500">
                    Search users
                  </p>
                  <Multiselect v-model="userInvite" mode="tags" @search-change="onTyping($event)" :closeOnSelect="false"
                    :searchable="true" :options="users" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button @click="onInvite()" class="btn-ps btn-ps-raise btn my-2">send</button>
        <button @click="onCancel()" class="btn-ps btn-ps-flat btn my-2">cancel</button>
      </div>
    </div>
  </div>
</div>
</template>

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
