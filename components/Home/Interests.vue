<template>
  <div class="sm:px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Interests Section -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-900 mb-3">
          {{ t("interests") }}
        </h2>
        <ul class="space-y-2 list-disc list-inside text-gray-700">
          <li>Crypto Investing</li>
          <li>Brain Computer Interface</li>
          <li>Building Deep Learning Models</li>
        </ul>
      </div>

      <!-- Education Section -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-900 mb-3">
          {{ t("education") }}
        </h2>
        <div class="space-y-1">
          <div class="flex items-start gap-3">
            <div class="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-gray-700"
              >
                <path
                  d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"
                />
                <path
                  d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"
                />
                <path
                  d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-medium text-gray-900">
                Bobir Akilkhanov Tech Academy
              </h3>
              <p class="text-gray-600">Online Courses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
</script>
