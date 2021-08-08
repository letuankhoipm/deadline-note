<template>
  <div
    class="px-3 h-6 rounded-full text-xs font-semibold flex items-center"
    :class="`bg-${color}-100 text-${color}-700`"
  >
    <span
      class="w-2 h-2 rounded-full mr-1"
      :class="`bg-${color}-400`"
    ></span>
    <span>
      <slot></slot>
    </span>
  </div>>
</template>

<script>
import { Vue, Options } from "vue-class-component";
@Options({
  components: {},
  props: {
    color: {
      type: String,
      default: "teal",
    },
  },
})
export default class Badge extends Vue {}
</script>