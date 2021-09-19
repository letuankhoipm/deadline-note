<template>
  <div class="ps-project p-4">

    <div
      v-if="projectDetail"
      class="grid grid-cols-1"
    >
      <div class="col-span-1">
        <div>
          <h1 class="text-base text-xl mt-4 text-green-600 font-semibold tracking-wide uppercase">
            {{projectDetail.name}}
          </h1>
          <p class="mt-4 max-w-2xl text-sm text-gray-500">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </div>
      <hr class="my-4">
      <div class="ps-project-detail-content">
        <div class="ps-pd-header">
          <div class="grid grid-cols-3">
            <div class="col-span-3">
              <div class="p-2">
                <nav class="flex flex-col sm:flex-row">

                  <button
                    v-for="item in listTabs"
                    :key="item.id"
                    @click="onChangeTabs(item.id)"
                    v-bind:class="{'text-green-500 duration-200 font-medium border-green-500': activeTab === item.id}"
                    class=" rounded-none text-gray-600 py-2 px-6 border-transparent border-b-2 block hover:text-green-500 focus:outline-none  "
                  >
                    {{item.name}}
                  </button>

                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="ps-pd-body">
          <ProjectOverview v-if="activeTab === 0" />
          <ProjectBoard v-if="activeTab === 1" />
          <ProjectSettings v-if="activeTab === 3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { ProjectTabs } from "@/models/tabs.model";
import ProjectOverview from "@/components/project-overview/ProjectOverview.vue";
import ProjectBoard from "@/components/project-board/ProjectBoard.vue";
import ProjectSettings from "@/components/project-settings/ProjectSettings.vue";
import projectService from "@/services/project.service";
@Options({
  components: { ProjectOverview, ProjectBoard, ProjectSettings },
  props: {},
  methods: {
    getDetail(): void {
      this.projectId = this.$route.params.id;
      console.log(this.projectId);
      projectService
        .getById(this.projectId)
        .then((res: any) => {
          console.log(res.data);
          this.projectDetail = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
  data() {
    return {};
  },
  created() {
    this.getDetail();
  },
})
export default class ProjectDetail extends Vue {
  public activeTab = 0;
  public projectId = "";
  public projectDetail = null;
  public listTabs = [
    {
      id: 0,
      name: "Overview",
    },
    {
      id: 1,
      name: "Boards",
    },
    {
      id: 2,
      name: "Wiki",
    },
    {
      id: 3,
      name: "Settings",
    },
  ];

  public onChangeTabs(tab: ProjectTabs) {
    switch (tab) {
      case ProjectTabs.OVERVIEW:
        this.activeTab = ProjectTabs.OVERVIEW;
        break;
      case ProjectTabs.BOARDS:
        this.activeTab = ProjectTabs.BOARDS;
        break;
      case ProjectTabs.WIKI:
        this.activeTab = ProjectTabs.WIKI;
        break;
      case ProjectTabs.SETTINGS:
        this.activeTab = ProjectTabs.SETTINGS;
        break;
      default:
        break;
    }
  }
}
</script>

<style lang="scss">
</style>