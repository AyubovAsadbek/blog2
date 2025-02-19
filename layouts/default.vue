<template>
  <div>
    <LayoutHeader />
    <main class="flex flex-col h-full flex-grow justify-between">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
