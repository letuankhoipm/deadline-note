<template>
  <div class="ps-project p-4">
    <div class="grid grid-cols-1">
      <div class="col-span-1">
        <div>
          <h2
            class="
              text-base
              mt-4
              text-xl text-green-600
              font-semibold
              tracking-wide
              uppercase
            "
          >
            Profile
          </h2>
          <p class="mt-4 max-w-2xl text-sm text-gray-500">
            My personal information
          </p>
        </div>
      </div>
      <hr class="my-4" />
      <div class="ps-project-list overflow-auto h-500">
        <div class="grid grid-cols-2">
          <div class="col-span-2">
            <div class="info-section grid grid-cols-2 mt-4">
              <div class="col-span-1"></div>
              <div class="col-span-1 text-right">
                <button
                  @click="onConfirm()"
                  class="btn-ps btn-ps-raise btn my-2"
                >
                  edit profile
                </button>
              </div>
            </div>
            <div class="info-section grid grid-cols-2">
              <div class="col-span-1">
                <strong>Username</strong>
              </div>
              <div v-if="profile.username" class="col-span-1">
                {{ profile.username }}
              </div>
            </div>
            <div class="info-section grid grid-cols-2 my-4">
              <div class="col-span-1">
                <strong>Email</strong>
              </div>
              <div v-if="profile.email" class="col-span-1">
                {{ profile.email }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import userService from "@/services/user.service";
import { Vue, Options } from "vue-class-component";
@Options({
  components: {},
  props: {},
  created() {
    this.getProfile();
  },
  methods: {},
  data() {
    return {};
  },
})
export default class Profile extends Vue {
  public profile = {};
  public getProfile(): void {
    userService.getUser().then((res: any) => {
      // if (!res) {
      //   return;
      // }
      this.profile = res.data;
      console.log(this.profile);
    });
  }
}
</script>

<style lang="scss"></style>
