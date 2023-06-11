<script setup lang="ts">
const props = defineProps<{
  icon: string;
  title: string;
  label: string;
  bgColor: string;
}>();
</script>
<template>
  <div
    class="h-[400px] flex flex-col justify-center p-10 text-center"
    :class="props.bgColor"
  >
    <Icon :name="icon || ''" size="40" class="text-white mx-auto" />
    <h1 class="text-white font-bold text-2xl mt-12 uppercase">
      {{ props.title }}
    </h1>
    <p class="text-white text-base pt-6">{{ props.label }}</p>
  </div>
</template>
