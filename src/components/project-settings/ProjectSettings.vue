<template src="./ProjectSettings.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { UserAddIcon, TrashIcon } from "@heroicons/vue/outline";
import projectService from "@/services/project.service";
import { IInvite } from "@/models/project.model";
@Options({
  components: { UserAddIcon, TrashIcon },
  props: {},
  methods: {
    getProjectId(): void {
      this.projectId = this.$route.params.id;
    },
  },
  data() {
    return {};
  },
})
export default class ProjectSettings extends Vue {
  public projectId = "";

  public inviteUser(userIds: string[]): void {
    const req: IInvite = {
      userIds: userIds,
      projectId: this.projectId,
    };
    projectService
      .invite(req)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
}
</script>

<style lang="scss">
@import "./ProjectSettings.scss";
</style>