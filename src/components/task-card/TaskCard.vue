<template>
  <!-- <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="flex justify-between">
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{task.title}}</p>

      <img
        class="w-6 h-6 rounded-full ml-3"
        src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
        alt="Avatar"
      >
    </div>
    <div class="flex mt-4 justify-between items-center">
      <span class="text-sm text-gray-600">{{task.date}}</span>
      <badge
        v-if="task.type"
        :color="badgeColor"
      >{{task.type}}</badge>
    </div>
  </div> -->
  <div>
    <h3>{{ title }}</h3>
    <pre class="bg-gray-300 rounded-lg p-5">{{ value }}</pre>
  </div>
</template>

<script>
import { Vue, Options } from "vue-class-component";
import { Badge } from "@/components/badge/Badge.vue";
@Options({
  components: {
    Badge,
  },
  props: {
    title: {
      default: "",
      type: String,
    },
    value: {
      required: true,
    },
  },
  computed: {
    badgeColor() {
      const mappings = {
        Design: "purple",
        "Feature Request": "teal",
        Backend: "blue",
        QA: "green",
        default: "teal",
      };
      return mappings[this.task.type] || mappings.default;
    },
  },
})
export default class TaskCard extends Vue {}
</script>