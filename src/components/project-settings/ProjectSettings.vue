<template src="./ProjectSettings.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import { UserAddIcon, TrashIcon } from "@heroicons/vue/outline"
import projectService from "@/services/project.service"
import ngvModalService from "@/services/ngv-modal.service"
import InviteModal from "@/modals/invite-modal/InviteModal.vue"
import ConfirmModal from "@/modals/confirm-modal/ConfirmModal.vue"
import toastrService from "@/services/toastr.service"
@Options({
  components: { UserAddIcon, TrashIcon },
  props: {},
  methods: {
    getProjectId(): void {
      this.projectId = this.$route.params.id
    },
  },
  data() {
    return {}
  },
  created() {
    this.getProjectId()
  },
})
export default class ProjectSettings extends Vue {
  public projectId = ""

  public onInvite(): void {
    ngvModalService.open(InviteModal, { projectId: this.projectId })
  }

  public onConfirm(): void {
    const modalRef = ngvModalService.open(ConfirmModal, {
      title: "Delete Project",
      msg: "Are you sure you want to delete this project?",
    })
    modalRef.then((result) => {
      result && this.onDelete()
    })
  }

  public onDelete(): void {
    projectService.delete(this.projectId).then(
      () => {
        toastrService.success("Notification", "Delete project successfully!")
        this.$router.push("/home")
      },
      (error) => {
        toastrService.error("Notification", error)
      }
    )
  }
}
</script>

<style lang="scss">
@import "./ProjectSettings.scss";
</style>
