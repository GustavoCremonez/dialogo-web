<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

type Size = 'sm' | 'base'

interface Props {
  size?: Size
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'base',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const isLink = computed(() => Boolean(props.to))
const componentTag = computed(() => (isLink.value ? RouterLink : 'button'))

function onClick(event: MouseEvent) {
  emit('click', event)
}
</script>

<template>
  <component
    :is="componentTag"
    :type="isLink ? undefined : 'button'"
    :to="isLink ? to : undefined"
    class="text-slate-600 font-medium hover:text-slate-900 cursor-pointer transition-colors"
    :class="[size === 'sm' ? 'text-sm' : 'text-base']"
    @click="onClick"
  >
    <slot />
  </component>
</template>
