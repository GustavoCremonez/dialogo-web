<script setup lang="ts">
import LinkButton from '@/components/LinkButton.vue'
import IconButton from '@/components/IconButton.vue'
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
          <span class="text-white font-bold">D</span>
        </div>
        <span class="text-xl font-semibold text-slate-900">Dialogo</span>
      </div>
      <nav class="flex items-center gap-3">
        <LinkButton to="/login" size="sm">Entrar</LinkButton>
        <IconButton to="/login?mode=register" class="py-2 text-sm">Cadastrar</IconButton>
      </nav>
    </div>
  </header>
</template>
