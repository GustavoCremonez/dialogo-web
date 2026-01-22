<script setup lang="ts">
import { computed, ref, useId } from 'vue'

type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'

interface Props {
  modelValue: string
  label: string
  type?: InputType
  placeholder?: string
  autocomplete?: string
  error?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  autocomplete: 'off',
  error: '',
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = useId()
const showPassword = ref(false)

const isPasswordType = computed(() => props.type === 'password')
const computedType = computed(() => {
  if (isPasswordType.value && showPassword.value) return 'text'
  return props.type
})
const hasError = computed(() => Boolean(props.error))

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div>
    <label :for="inputId" class="block text-sm font-medium text-slate-700 mb-1.5">
      {{ label }}
    </label>
    <div class="relative">
      <span
        v-if="$slots.icon"
        class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400"
      >
        <slot name="icon" />
      </span>
      <input
        :id="inputId"
        :value="modelValue"
        :type="computedType"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :disabled="disabled"
        class="w-full py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent focus:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        :class="[
          $slots.icon ? 'pl-10' : 'pl-4',
          isPasswordType ? 'pr-10' : 'pr-4',
          hasError ? 'border-red-500 focus:ring-red-500' : '',
        ]"
        @input="onInput"
      />
      <button
        v-if="isPasswordType"
        type="button"
        class="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
        @click="togglePasswordVisibility"
      >
        <svg
          v-if="showPassword"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z"
            clip-rule="evenodd"
          />
          <path
            d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path
            fill-rule="evenodd"
            d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <p v-if="hasError" class="mt-1.5 text-sm text-red-600">{{ error }}</p>
  </div>
</template>
