<template>
  <Disclosure as="nav" class="bg-gray-900" v-slot="{ open }">
    <div class="max-w-full px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" />
            <XIcon v-else class="block h-6 w-6" />
          </DisclosureButton>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="@/assets/images/w-icon.png"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-10 w-auto"
              src="@/assets/images/w-logo.png"
              alt="Workflow"
            />
          </div>
          <div class="sm:block sm:ml-6 w-full self-center">
            <span class="text-white float-right">
              {{ g_user?.fullname }}
            </span>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <button @click="onNextVersion" class="btn-ps-icon mx-4">
            <span class="sr-only">Open Board</span>
            <ViewBoardsIcon class="h-6 w-6 text-white" />
          </button>
          <button @click="goHome" class="btn-ps-icon mx-4">
            <span class="sr-only">Home</span>
            <HomeIcon class="h-6 w-6 text-white" />
          </button>
          <button @click="onNextVersion" class="btn-ps-icon mx-4">
            <span class="sr-only">Information</span>
            <AnnotationIcon class="h-6 w-6 text-white" />
          </button>
          <button @click="switchNewProjectModal" class="btn-ps-icon mx-4">
            <span class="sr-only">Add project</span>
            <PlusIcon class="h-6 w-6 text-white" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="
                  bg-gray-800
                  flex
                  text-sm
                  rounded-full
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-800
                  focus:ring-white
                "
              >
                <span class="sr-only">Open user menu</span>
                <UserIcon class="h-6 w-6 text-white" />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="
                  origin-top-right
                  absolute
                  right-0
                  mt-2
                  w-48
                  shadow-lg
                  py-1
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
              >
                <MenuItem v-slot="{ active }">
                  <router-link
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    class="text-white mt-2"
                    to="/home"
                    >Home</router-link
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <router-link
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    class="text-white mt-2"
                    to="/profile"
                    >Profile</router-link
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <router-link
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    class="text-white mt-2"
                    to="/home"
                    >Settings</router-link
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <router-link
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    class="text-white mt-2"
                    to="/"
                    @click="resetState"
                    >Log out</router-link
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <!-- <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</a
        >
      </div>
    </DisclosurePanel> -->
  </Disclosure>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  AnnotationIcon,
  PlusIcon,
  HomeIcon,
  ViewBoardsIcon,
  UserIcon,
} from "@heroicons/vue/outline";
import { mapGetters } from "vuex";
import authService from "@/services/auth.service";
import ngvModalService from "@/services/ngv-modal.service";
import NewProject from "@/modals/new-project/NewProject.vue";
import execService from "@/services/exec.service";
import NotifyModal from "@/modals/notify-modal/NotifyModal.vue";
@Options({
  // Module
  props: {}, // Input
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
    PlusIcon,
    AnnotationIcon,
    HomeIcon,
    ViewBoardsIcon,
    UserIcon,
  }, // Import component
  computed: {
    ...mapGetters(["g_user"]),
  },
})
export default class Navbar extends Vue {
  public navigation = [];
  get g_user(): any {
    return this.g_user;
  }

  public resetState(): void {
    localStorage.clear();
    authService.logout();
  }

  public switchNewProjectModal(): void {
    const modalRef = ngvModalService.open(NewProject, {
      name: "New Project",
    });
    modalRef.then((result) => {
      result && execService.refetch();
    });
  }

  public onNextVersion(): void {
    ngvModalService.open(NotifyModal, {
      title: "Version 1.0",
      msg: "This feature will be update in the next version.",
    });
  }

  public goHome(): void {
    this.$router.push("/home");
  }
}
</script>

<style lang="scss">
@import "./Navbar.scss";
</style>
