<template src="./NewProject.html"></template>
<style lang="scss">
@import "./NewProject.scss";
</style>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import NgvModalService from "@/services/ngv-modal.service";
import { IProject } from "@/models/project.model";
import { XIcon } from "@heroicons/vue/outline";
import projectService from "@/services/project.service";

@Options({
  components: { XIcon },
  props: ["input"],
  data() {
    return {
      previewImg: null,
      projectForm: {
        name: null,
        shortDescription: null,
        imageUrl: null,
      } as unknown as IProject,
    };
  },
  methods: {
    uploadImage(files: FileList): void {
      console.log(files);
      const image = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImg = e.target?.result;
        this.isVisibility = true;
        this.projectForm.imageUrl = this.previewImg;
        console.log(this.previewImg);
      };

      // if (files[0]) {
      //   this.projectForm.imageUrl = files[0];
      //   const formData = new FormData();
      //   formData.append(
      //     "image",
      //     this.projectForm.imageUrl,
      //     this.projectForm.imageUrl.name
      //   );
      //   console.log(files[0]);

      //   console.log(formData);
      // }
    },
    create(): void {
      console.log(this.projectForm);
      projectService
        .create(this.projectForm)
        .then((res) => {
          console.log(res);
          NgvModalService.close("create done")
        })
        .catch((err) => console.log(err));
    },
  },
})
export default class NewProject extends Vue {
  public isVisibility = false;
  public clearImg(): void {
    this.isVisibility = false;
  }

  public cancel(): void {
    NgvModalService.close("ahiih");
  }
}
</script>
