<template>
  <div class="relative inline-block text-left">
    <button
      @click="toggleDropdown"
      type="button"
      class="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      {{ currentLanguage.name }}
      <ChevronDownIcon
        :class="isOpen ? 'rotate-180' : ''"
        class="w-5 h-5 ml-2 -mr-1 transition-300"
        aria-hidden="true"
      />
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="origin-top-right absolute right-0 mt-2 w-[74px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="language-menu"
      >
        <div class="text-center" role="none">
          <a
            v-for="lang in languages"
            :key="lang.code"
            @click="switchLanguage(lang.code)"
            href="#"
            class="flex items-center justify-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            {{ lang.name }}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { ChevronDownIcon } from "lucide-vue-next";

const { locale } = useI18n();
const isOpen = ref(false);

const languages = [
  { code: "uz", name: "UZ" },
  { code: "en", name: "EN" },
  { code: "ru", name: "RU" },
];

const currentLanguage = computed(
  () => languages.find((lang) => lang.code === locale.value) || languages[0]
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const switchLanguage = (langCode) => {
  locale.value = langCode;
  isOpen.value = false;
  console.log(locale.value);
};
</script>
