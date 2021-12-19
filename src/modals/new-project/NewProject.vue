<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="
          inline-block
          align-bottom
          bg-white
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
        "
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="w-full">
            <div class="mt-3 text-center sm:mt-0 sm:text-left">
              <div class="grid grid-cols-2">
                <div class="col-span">
                  <h1 style="font-size: 25px" class="font-bold uppercase">
                    New Project
                  </h1>
                </div>
                <div class="col-span text-right">
                  <XIcon
                    @click="cancel()"
                    class="h-5 w-5 float-right leading-8 mt-2 cursor-pointer"
                  />
                </div>
              </div>
              <div class="mt-2">
                <form>
                  <!-- <div class="w-full">
                  <p class="text-sm text-gray-500">
                    Logo
                  </p>
                  <div v-if="isVisibility" class="mt-4 text-right">
                    <img class="render-img" :src="previewImg" />
                    <button @click="clearImg()" class="btn-ps-flat float-right my-4">Clear</button>
                  </div>
                  <div v-if="!isVisibility"
                    class="border-dashed border-2 my-4 border-gray-400 py-12 flex flex-col justify-center items-center">
                    <div class="absolute">
                      <div class="flex flex-col items-center">
                        <button class="btn-ps-flat">Upload your logo</button>
                      </div>
                    </div>
                    <input @change="uploadImage($event.target.files)" type="file" class="h-full w-full opacity-0"
                      name="logo" accept="image/*" id="file-input">
                  </div>
                </div> -->
                  <div class="w-full mb-4">
                    <p class="text-sm text-gray-500">Project Name</p>
                    <input v-model="projectForm.name" type="text" />
                  </div>
                  <div class="w-full my-4">
                    <p class="text-sm text-gray-500">Description</p>
                    <textarea
                      v-model="projectForm.shortDescription"
                      name="shortDescription"
                      cols="20"
                      rows="5"
                    ></textarea>
                  </div>
                </form>
                <p class="font-bold">
                  Create projects for everyone to collaborate, resulting in more
                  work efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="create()" class="btn-ps btn-ps-raise btn my-2">
            create
          </button>
          <button @click="cancel()" class="btn-ps btn-ps-flat btn my-2">
            cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "./NewProject.scss";
</style>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import NgvModalService from "@/services/ngv-modal.service";
import { IProject } from "@/models/project.model";
import { XIcon } from "@heroicons/vue/outline";
import projectService from "@/services/project.service";
import toastrService from "@/services/toastr.service";

@Options({
  components: { XIcon },
  props: ["input"],
  data() {
    return {
      projectForm: {
        name: null,
        shortDescription: null,
        imageUrl: null,
      } as unknown as IProject,
    };
  },
  methods: {},
})
export default class NewProject extends Vue {
  get projectForm(): IProject {
    return this.projectForm;
  }

  public previewImg: any;

  public isVisibility = false;
  public clearImg(): void {
    this.isVisibility = false;
  }

  public create(): void {
    projectService
      .create(this.projectForm)
      .then((res) => {
        if (!res) {
          return;
        }
        NgvModalService.close(true);
        toastrService.success("Notification", "Create Project Successfully!");
      })
      .catch((err) => console.log(err));
  }

  public cancel(): void {
    NgvModalService.close(true);
  }

  public uploadImage(files: FileList): void {
    console.log(files);
    const image = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      this.previewImg = e.target?.result;
      this.isVisibility = true;
      this.projectForm.imageUrl = this.previewImg;
    };
  }
}
</script>
