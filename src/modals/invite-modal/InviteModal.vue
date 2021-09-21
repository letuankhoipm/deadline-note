<template src="./InviteModal.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { XIcon } from "@heroicons/vue/outline";
import { IInvite } from "@/models/project.model";
import projectService from "@/services/project.service";
import ngvModalService from "@/services/ngv-modal.service";
import Multiselect from "@vueform/multiselect";
@Options({
  components: { XIcon, Multiselect },
  props: ["input"],
  methods: {},
  data() {
    return {};
  },
})
export default class InviteModal extends Vue {
  public users = [
    { value: "batman", label: "Batman" },
    { value: "robin", label: "Robin" },
    { value: "joker", label: "Joker" },
  ];

  public inviteUser(userIds: string[], projectId: string): void {
    const req: IInvite = {
      userIds: userIds,
      projectId: projectId,
    };
    projectService
      .invite(req)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  public onCancel(): void {
    ngvModalService.dismiss();
  }
}
</script>


<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss">
@import "./InviteModal.scss";
</style>