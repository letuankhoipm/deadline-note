<template>
  <div class="flex items-center justify-center">
    <div class="py-2 w-full">
      <div
        class="
          bg-white
          max-w-xl
          p-2
          hover:bg-gray-100
          cursor-pointer
          shadow
          transition
          duration-200
        "
      >
        <div class="text-left mb-1">
          <!-- <span
            v-bind:class="{'bg-blue-500': ticket.label.id === 0, 'bg-yellow-500': ticket.label.id === 1, 'bg-green-500': ticket.label.id === 2}"
            class="w-14 inline-flex items-center uppercase justify-center px-2 py-1 text-xs font-bold leading-none text-white"
          >
          </span> -->
        </div>
        <div class="">
          <h1 class="text-sm text-gray-700">
            {{ ticket.title }}
          </h1>
        </div>
        <div class="grid grid-cols-2">
          <div class="col-span">
            <ChatAltIcon class="h-5 w-5 mt-3 text-gray-700" />
          </div>
          <div
            class="col-span flex flex-row-reverse items-center cursor-pointer"
          >
            <img
              class="rounded-full w-10"
              src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
              alt="avt"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import { ChatAltIcon } from "@heroicons/vue/outline"
@Options({
  components: { ChatAltIcon },
  props: ["ticket"],
})
export default class Ticket extends Vue {
  get ticket(): any {
    return this.ticket
  }
}
</script>
