<template>
  <div class="container">
    <h1
      class="text-[25px] sm:text-[40px] text-center mb-7 font-bold leading-[120%] text-[#2B2B2B]"
    >
      {{ blog?.name_uz }}
    </h1>
    <div v-if="!isLoading" class="rounded-lg sm:p-7 p-3 shadow-2xl">
      <div class="post-content" v-html="sanitizedContent"></div>
    </div>
    <div v-else class="h-[calc(100vh-200px)] flex items-center justify-center">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import DOMPurify from "dompurify";
console.log("salom");
const route = useRoute();
const blog = ref(null);
const isLoading = ref(true);
const { get } = useApi();

const sanitizedContent = computed(() => {
  if (blog.value?.text_uz) {
    return DOMPurify.sanitize(decodeHTMLEntities(blog.value.text_uz));
  }
  return "";
});

function decodeHTMLEntities(text) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}

const fetchBlog = async () => {
  isLoading.value = true;
  try {
    const data = await get(`api/blog/${route.params.id}`);
    blog.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchBlog();
});
</script>

<style>
.post-content p {
  color: #2b2b2b;
  font-size: 20px !important;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 150%;
}

.post-content h2 {
  font-size: 20px;
}

.post-content h1 {
  font-size: 40px;
}

@media screen and (max-width: 768px) {
  .post-content h1 {
    font-size: 25px;
  }
}

.post-content p {
  color: #2b2b2b;
  font-size: 20px !important;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 150%;
}

/* Add these new styles for lists */
.post-content ul,
.post-content ol {
  color: #2b2b2b;
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0;
  padding-left: 24px;
  line-height: 150%;
}

.post-content ul {
  list-style-type: disc;
}

.post-content ol {
  list-style-type: decimal;
}

.post-content li {
  margin: 8px 0;
}

/* Keep your other existing styles */
.post-content h3 {
  color: #2b2b2b;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
}
.post-content h3 {
  color: #2b2b2b;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
}

.post-content h4 {
  color: #2b2b2b;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}

.left-content {
  background: white !important;
  display: flex;
  flex-direction: column;
  border-radius: 17px;
  justify-content: start;
}

.post-content img {
  max-width: 100%;
  width: 100%;
  height: auto !important;
  width: 100% !important;
  border-radius: 24px !important;
  margin: 16px 0px !important;
  border: 1px solid rgb(242, 243, 247) !important;
}

.post-content em {
  color: #2b2b2b;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.loader {
  width: 40px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
