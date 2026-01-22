<script setup lang="ts">
interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="group p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all hover:-translate-y-1"
  >
    <div
      class="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
    >
      <slot name="icon" />
    </div>
    <h3 class="text-xl font-semibold text-slate-900 mb-3">{{ title }}</h3>
    <p class="text-slate-600 leading-relaxed">{{ description }}</p>
  </div>
</template>
