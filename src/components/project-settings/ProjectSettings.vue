<template src="./ProjectSettings.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { UserAddIcon, TrashIcon } from "@heroicons/vue/outline";
import projectService from "@/services/project.service";
import { IInvite } from "@/models/project.model";
import ngvModalService from "@/services/ngv-modal.service";
import InviteModal from "@/modals/invite-modal/InviteModal.vue";
@Options({
  components: { UserAddIcon, TrashIcon },
  props: {},
  methods: {
    getProjectId(): void {
      this.projectId = this.$route.params.id;
      console.log(this.projectId);
    },
  },
  data() {
    return {};
  },
  created() {
    this.getProjectId();
  },
})
export default class ProjectSettings extends Vue {
  public projectId = "";

  public onInvite(): void {
    ngvModalService.open(InviteModal, { projectId: this.projectId });
  }
}
</script>

<style lang="scss">
@import "./ProjectSettings.scss";
</style>