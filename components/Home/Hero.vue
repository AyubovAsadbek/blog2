<template>
  <div class="container mx-auto px-4 mt-0 md:mt-6">
    <div class="flex flex-col md:flex-row gap-8 md:gap-24 shrink-0">
      <div class="flex flex-col items-center text-center md:w-1/3 shrink-0">
        <img
          v-if="!isLoading"
          :src="aboutMe?.[0].image"
          class="rounded-full w-48 h-48 md:w-64 md:h-64 mb-4 object-cover shrink-0"
          alt="Rifat Mamayusupov"
          width="256"
          height="256"
        />
        <Skeleton v-else width="256px" height="256px" shape="circle"></Skeleton>
        <h2
          v-if="!isLoading"
          class="text-2xl md:text-3xl text-center font-normal"
        >
          {{ aboutMe?.[0][`full_name_${locale}`] }}
        </h2>
        <Skeleton v-else width="100%" height="30px" class="mt-4"></Skeleton>
        <NuxtLink
          to="https://aisha.group"
          target="_blank"
          class="mt-2.5 text-base md:text-lg text-blue-500"
          >Aisha AI</NuxtLink
        >
        <div class="flex justify-center gap-3 mt-6 md:mt-8">
          <Skeleton
            v-for="i in 5"
            v-show="isLoading"
            :key="i"
            width="40px"
            height="40px"
          ></Skeleton>
          <NuxtLink
            v-for="item in aboutMe?.[0].social"
            :key="item.id"
            :to="
              item.link === 'http://rifatmamayusupov92@gmail.com'
                ? `mailto:${item.link}`
                : item.link
            "
            target="_blank"
            class="hover:scale-110 transition-all duration-300"
          >
            <img class="w-8 md:w-10" :src="item.file" alt="" />
          </NuxtLink>
        </div>
      </div>
      <div class="md:w-2/3">
        <div>
          <h1 class="text-3xl md:text-5xl font-normal mb-4 md:mb-6">
            {{ t("aboutme") }}
          </h1>
          <p class="mt-3 text-base md:text-lg text-justify">
            {{ localizedText }}
          </p>
          <Skeleton
            v-for="i in 8"
            v-show="isLoading"
            :key="i"
            width="100%"
            height="20px"
            class="mt-4"
          />
        </div>
        <HomeInterests />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "~/composables/useApi";
import Skeleton from "primevue/skeleton";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

const aboutMe = ref(null);
const isLoading = ref(false);

const { get } = useApi();

const fetchData = async () => {
  isLoading.value = true;
  try {
    const data = await get("api/about-me/");
    aboutMe.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
};

const localizedText = computed(() => {
  const textKey = `text_${locale.value}`;
  return aboutMe.value?.[0]?.[textKey] || aboutMe.value?.[0]?.text_en || "";
});

onMounted(fetchData);
</script>
