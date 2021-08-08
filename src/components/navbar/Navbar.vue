<template>
  <Disclosure
    as="nav"
    class="bg-gray-900"
    v-slot="{ open }"
  >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon
              v-if="!open"
              class="block h-6 w-6"
            />
            <XIcon
              v-else
              class="block h-6 w-6"
            />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
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
          <!-- <div class="sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link class="text-white mt-2" to="/">Home</router-link>
            </div>
          </div> -->
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button class="btn-ps-icon mx-4">
            <span class="sr-only">Open Board</span>
            <ViewBoardsIcon class="h-6 w-6 text-white" />
          </button>
          <button class="btn-ps-icon mx-4">
            <span class="sr-only">Home</span>
            <HomeIcon class="h-6 w-6 text-white" />
          </button>
          <button class="btn-ps-icon mx-4">
            <span class="sr-only">Information</span>
            <AnnotationIcon class="h-6 w-6 text-white" />
          </button>
          <button class="btn-ps-icon mx-4">
            <span class="sr-only">Notifcation</span>
            <PlusIcon class="h-6 w-6 text-white" />
          </button>

          <!-- Profile dropdown -->
          <Menu
            as="div"
            class="ml-3 relative"
          >
            <div>
              <MenuButton class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
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
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                <router-link
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  class="text-white mt-2"
                  to="/"
                >Home</router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <router-link
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  class="text-white mt-2"
                  to="/"
                >Settings</router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <router-link
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  class="text-white mt-2"
                  to="/"
                >Help</router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <router-link
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  class="text-white mt-2"
                  to="/"
                >Log out</router-link>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined"
        >{{ item.name }}</a>
      </div>
    </DisclosurePanel>
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
} from "@heroicons/vue/outline";
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
  }, // Import component
})
export default class Navbar extends Vue {}
</script>

<style lang="scss">
@import "./Navbar.scss";
</style>