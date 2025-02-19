<script setup lang="ts">
import { ref } from "vue";

const NavItems = [
  {
    label: "Blogs",
    href: "/blog",
    target: "_self",
  },
  {
    label: "Projects",
    href: "/",
    target: "_self",
  },
  {
    label: "Channels",
    href: "https://t.me/aitoyou_uzbekistan",
    target: "_blank",
  },
  {
    label: "Github",
    href: "https://github.com/RifatMamayusupov",
    target: "_blank",
  },
];

const { t } = useI18n();

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav class="!sticky !top-0 z-10">
    <div class="mx-auto py-2 flex justify-between items-center">
      <NuxtLink class="font-bold text-3xl" to="/">Rifat's Blog</NuxtLink>

      <ul class="hidden md:flex gap-4 items-center">
        <li v-for="item in NavItems" :key="item.label">
          <NuxtLink
            :target="item.target"
            :to="item.href"
            class="font-normal text-lg hover:text-gray-600 transition-colors duration-200"
          >
            {{ t(item.label) }}
          </NuxtLink>
        </li>
        <LanguageSwitcher />
      </ul>

      <button
        @click="toggle"
        class="md:hidden w-7 h-7 relative z-20"
        aria-label="Toggle menu"
      >
        <span class="sr-only">Toggle menu</span>
        <div class="absolute inset-0 flex items-center justify-center">
          <svg
            class="w-6 h-6 transition-all duration-300 ease-in-out"
            :class="
              isOpen
                ? 'opacity-0 rotate-45 scale-50'
                : 'opacity-100 rotate-0 scale-100'
            "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
          <svg
            class="w-6 h-6 transition-all duration-300 ease-in-out"
            :class="
              isOpen
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 rotate-45 scale-50'
            "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"
            ></path>
          </svg>
        </div>
      </button>
    </div>

    <div
      class="fixed inset-y-0 left-0 z-10 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="p-6">
        <ul class="space-y-4">
          <li v-for="item in NavItems" :key="item.label">
            <NuxtLink
              :to="item.href"
              class="block font-normal text-lg hover:text-gray-600 transition-colors duration-200"
              @click="isOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
      @click="isOpen = false"
    ></div>
  </nav>
</template>
