<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 px-6 border-t border-slate-200">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center">
          <span class="text-white font-bold text-sm">D</span>
        </div>
        <span class="text-sm text-slate-600">Dialogo</span>
      </div>
      <p class="text-sm text-slate-500">
        &copy; {{ currentYear }} Dialogo. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>
