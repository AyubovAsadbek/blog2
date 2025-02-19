<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const hasShadow = ref(false);

const handleScroll = () => {
  hasShadow.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    :class="[
      'sticky top-0 z-20 bg-white transition-300',
      { 'shadow-md': hasShadow },
    ]"
  >
    <div class="!py-4 container">
      <LayoutNavbar />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
