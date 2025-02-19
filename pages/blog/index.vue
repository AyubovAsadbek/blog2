<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 !pb-10">
    <div class="border-t">
      <h1
        class="text-3xl sm:text-4xl text-center my-5 sm:my-8 uppercase font-normal"
      >
        Blog
      </h1>
    </div>
    <div
      class="flex flex-col-reverse lg:flex-row justify-between items-start gap-8"
    >
      <div class="grid grid-cols-1 gap-6 w-full lg:w-2/3">
        <NuxtLink
          v-for="item in blogs"
          :key="item.id"
          :to="`/blog/${item.id}`"
          class="group block overflow-hidden rounded-lg border bg-white transition-shadow duration-300 hover:shadow-lg"
          :class="item.is_private ? 'hidden' : ''"
        >
          <div class="sm:flex p-4">
            <div
              class="relative h-48 w-48 sm:h-24 sm:w-24 shrink-0 max-sm:mx-auto"
            >
              <img
                :src="item.file"
                :alt="item.title"
                class="absolute inset-0 h-full w-full rounded-full"
              />
            </div>

            <div class="flex items-center justify-between px-4 sm:px-6">
              <div>
                <p class="text-sm text-gray-600 sm:text-base">
                  {{ formatDate(item.date) }}
                </p>

                <h2
                  class="mt-2 text-xl font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-2xl"
                >
                  {{ item.name_uz }}
                </h2>
              </div>

              <div class="mt-4 hidden sm:block">
                <ArrowRight
                  class="h-6 w-6 text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </NuxtLink>
        <Skeleton
          v-for="i in 3"
          v-show="isLoading"
          :key="i"
          width="100%"
          height="129px"
        />
      </div>
      <div class="w-full lg:w-1/3 sm:sticky !top-24">
        <div class="rounded-lg shadow-md border">
          <!-- Header -->
          <div class="p-4 sm:p-5">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span
                class="px-2 py-1 rounded-full text-xs sm:text-sm bg-blue-50 text-blue-600"
              >
                Bepul ta'lim
              </span>
              <span
                class="px-2 py-1 rounded-full text-xs sm:text-sm bg-blue-50 text-blue-600"
              >
                IBM
              </span>
            </div>

            <h2 class="text-lg sm:text-xl font-bold tracking-tight mb-2">
              IBM tomonidan beginnerlar uchun bepul darsliklar
            </h2>
            <p class="text-sm sm:text-base text-gray-600">
              Zero dan professional darajagacha bo'lgan to'liq kurs
            </p>
          </div>

          <div class="px-4 pb-4 sm:px-5 sm:pb-5">
            <NuxtLink
              href="https://www.ibm.com/training/badge/ibm-machine-learning-professional-certificate"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center transition-300 justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Havolani ochish
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { ArrowRight } from "lucide-vue-next";
import { useApi } from "~/composables/useApi";
import Skeleton from "primevue/skeleton";

import { formatDate } from "~/composables/useFormatDate";

// const blogItems = reactive([
//   {
//     id: 1,
//     title: "Blog 1",
//     date: "05 November 2023",
//     img: "/images/default.jpg",
//   },
//   {
//     id: 1,
//     title: "Blog 1",
//     date: "05 November 2023",
//     img: "/images/default.jpg",
//   },
//   {
//     id: 1,
//     title: "Blog 1",
//     date: "05 November 2023",
//     img: "/images/default.jpg",
//   },
//   {
//     id: 1,
//     title: "Blog 1",
//     date: "05 November 2023",
//     img: "/images/default.jpg",
//   },
//   {
//     id: 1,
//     title: "Blog 1",
//     date: "05 November 2023",
//     img: "/images/default.jpg",
//   },
// ]);
const blogs = ref([]);
const isLoading = ref(false);

const { get } = useApi();

const fetchBlogs = async () => {
  isLoading.value = true;
  try {
    const data = await get("api/blog/");
    blogs.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchBlogs();
});
</script>

<style scoped>
/* Any additional styles can be added here if needed */
</style>
