<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import InputField from '@/components/InputField.vue'
import IconButton from '@/components/IconButton.vue'
import LinkButton from '@/components/LinkButton.vue'

type AuthMode = 'login' | 'register'

const route = useRoute()
const mode = ref<AuthMode>('login')

onMounted(() => {
  if (route.query.mode === 'register') {
    mode.value = 'register'
  }
})
const isLoading = ref(false)

const form = ref({
  name: '',
  email: '',
  password: '',
})

const errors = ref({
  name: '',
  email: '',
  password: '',
})

const isLoginMode = computed(() => mode.value === 'login')
const title = computed(() => (isLoginMode.value ? 'Entrar' : 'Criar conta'))
const submitLabel = computed(() => (isLoginMode.value ? 'Entrar' : 'Cadastrar'))
const toggleText = computed(() =>
  isLoginMode.value ? 'Ainda não tem uma conta?' : 'Já possui uma conta?',
)
const toggleAction = computed(() => (isLoginMode.value ? 'Cadastre-se' : 'Faça login'))

function toggleMode() {
  mode.value = isLoginMode.value ? 'register' : 'login'
  clearErrors()
}

function clearErrors() {
  errors.value = { name: '', email: '', password: '' }
}

function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

function validate(): boolean {
  clearErrors()
  let isValid = true

  if (!isLoginMode.value && !form.value.name.trim()) {
    errors.value.name = 'Nome é obrigatório'
    isValid = false
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email é obrigatório'
    isValid = false
  } else if (!validateEmail(form.value.email)) {
    errors.value.email = 'Email inválido'
    isValid = false
  }

  if (!form.value.password) {
    errors.value.password = 'Senha é obrigatória'
    isValid = false
  } else if (form.value.password.length < 6) {
    errors.value.password = 'Senha deve ter no mínimo 6 caracteres'
    isValid = false
  }

  return isValid
}

async function handleSubmit() {
  if (!validate()) return

  isLoading.value = true

  try {
    // TODO: integrar com API de autenticação
    console.log(isLoginMode.value ? 'Login' : 'Registro', form.value)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex bg-slate-50">
    <div class="flex-1 flex items-center justify-center px-6 py-12">
      <div class="w-full max-w-md">
        <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 sm:p-10">
          <div class="mb-8 text-center">
            <div
              class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 mb-4"
            >
              <span class="text-white font-bold text-lg">D</span>
            </div>
            <h1 class="text-2xl font-semibold text-slate-900 tracking-tight">Dialogo</h1>
          </div>

          <div class="mb-6">
            <h2 class="text-lg font-medium text-slate-800">{{ title }}</h2>
            <p class="mt-1 text-sm text-slate-500">
              {{ toggleText }}
              <LinkButton @click="toggleMode">{{ toggleAction }}</LinkButton>
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <InputField
              v-if="!isLoginMode"
              v-model="form.name"
              label="Nome"
              type="text"
              autocomplete="name"
              placeholder="Seu nome"
              :error="errors.name"
            >
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"
                  />
                </svg>
              </template>
            </InputField>

            <InputField
              v-model="form.email"
              label="Email"
              type="email"
              autocomplete="email"
              placeholder="seu@email.com"
              :error="errors.email"
            >
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"
                  />
                  <path
                    d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"
                  />
                </svg>
              </template>
            </InputField>

            <InputField
              v-model="form.password"
              label="Senha"
              type="password"
              autocomplete="current-password"
              placeholder="Sua senha"
              :error="errors.password"
            >
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </template>
            </InputField>

            <div v-if="isLoginMode" class="flex justify-end pt-1">
              <LinkButton size="sm">Esqueceu a senha?</LinkButton>
            </div>

            <IconButton type="submit" :loading="isLoading" class="mt-2">
              {{ submitLabel }}
            </IconButton>
          </form>

          <div class="mt-6 pt-6 border-t border-slate-200">
            <p class="text-xs text-slate-400 text-center">
              Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden lg:block lg:flex-1 relative overflow-hidden">
      <img
        src="/login-side-image.png"
        alt=""
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-linear-to-br from-slate-900/40 to-slate-900/20"></div>
      <div class="absolute bottom-12 left-12 right-12">
        <blockquote class="text-white/90">
          <p class="text-xl font-medium leading-relaxed">
            "A comunicação é a ponte entre a confusão e a clareza."
          </p>
          <footer class="mt-3 text-sm text-white/60">Nat Turner</footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>
