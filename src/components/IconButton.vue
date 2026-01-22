<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

type ButtonType = 'button' | 'submit' | 'reset'
type Variant = 'primary' | 'secondary'

interface Props {
  type?: ButtonType
  variant?: Variant
  disabled?: boolean
  loading?: boolean
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  disabled: false,
  loading: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const isLink = computed(() => Boolean(props.to))
const componentTag = computed(() => (isLink.value ? RouterLink : 'button'))

const buttonClasses = computed(() => [
  'inline-flex items-center justify-center py-3 px-4 font-medium rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all',
  props.variant === 'primary'
    ? 'bg-slate-900 text-white shadow-sm hover:bg-slate-800 focus:ring-slate-500'
    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-slate-400',
])

function onClick(event: MouseEvent) {
  emit('click', event)
}
</script>

<template>
  <component
    :is="componentTag"
    :type="isLink ? undefined : type"
    :to="isLink ? to : undefined"
    :disabled="isLink ? undefined : disabled || loading"
    :class="buttonClasses"
    @click="onClick"
  >
    <span v-if="loading">Aguarde...</span>
    <slot v-else />
  </component>
</template>
