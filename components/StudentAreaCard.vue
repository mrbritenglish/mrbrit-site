<script setup lang="ts">
const props = defineProps<{
  icon: string;
  title: string;
  label: string;
  link: string;
}>();
</script>
<template>
  <div class="w-80 bg-white text-primary">
    <Icon
      :name="props.icon"
      size="60"
      class="text-primary bg-slate-200 rounded-full p-2 relative bottom-8"
    />
    <div class="mt-[-12px] mb-8">
      <h2 class="text-xl font-bold mb-4 p-2">{{ props.title }}</h2>
      <p class="p-4">{{ props.label }}</p>
    </div>
    <NuxtLink :href="props.link" target="_blank">
      <div class="bg-slate-200 text-primary p-4 flex justify-between">
        <p class="font-bold">Acesse</p>
        <Icon name="mdi:arrow-right" size="30" />
      </div>
    </NuxtLink>
  </div>
</template>
