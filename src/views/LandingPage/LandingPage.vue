<script setup lang="ts">
import LandingHeader from './components/LandingHeader.vue'
import LandingFooter from './components/LandingFooter.vue'
import FeatureCard from './components/FeatureCard.vue'
import IconButton from '@/components/IconButton.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <LandingHeader />

    <main>
      <section class="pt-32 pb-20 px-6">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-3xl mx-auto text-center animate-fade-in">
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight"
            >
              Comunicação clara,
              <span class="text-slate-500">conexões reais</span>
            </h1>
            <p class="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Simplifique a forma como você se comunica. O Dialogo oferece um espaço onde conversas
              fluem naturalmente e ideias ganham vida.
            </p>
            <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <IconButton
                to="/login?mode=register"
                class="w-full sm:w-auto px-8 rounded-xl hover:scale-105 shadow-lg shadow-slate-900/20"
              >
                Começar agora
              </IconButton>
              <IconButton
                to="/login"
                variant="secondary"
                class="w-full sm:w-auto px-8 rounded-xl border border-slate-200 bg-white hover:bg-slate-100"
              >
                Já tenho conta
              </IconButton>
            </div>
          </div>

          <div class="mt-20 relative animate-fade-in-delayed">
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 pointer-events-none"
            ></div>
            <div
              class="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/50"
            >
              <div class="aspect-video bg-slate-900 flex items-center justify-center">
                <div class="text-center p-8">
                  <div class="flex justify-center gap-2 mb-6">
                    <span class="w-3 h-3 rounded-full bg-slate-700 animate-pulse"></span>
                    <span
                      class="w-3 h-3 rounded-full bg-slate-600 animate-pulse animation-delay-200"
                    ></span>
                    <span
                      class="w-3 h-3 rounded-full bg-slate-500 animate-pulse animation-delay-400"
                    ></span>
                  </div>
                  <p class="text-slate-400 text-lg">Preview da plataforma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 px-6 bg-white border-y border-slate-200/50">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold text-slate-900">
              Por que escolher o Dialogo?
            </h2>
            <p class="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Construído para quem valoriza conversas que importam.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Simples e direto"
              description="Interface limpa e intuitiva. Sem distrações, apenas o essencial para suas conversas."
            >
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </template>
            </FeatureCard>

            <FeatureCard
              title="Privacidade em primeiro lugar"
              description="Suas conversas são suas. Segurança e privacidade não são opcionais, são garantias."
            >
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </template>
            </FeatureCard>

            <FeatureCard
              title="Feito para equipes"
              description="Colabore sem atrito. Organize conversas, compartilhe ideias e mantenha todos alinhados."
            >
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"
                  />
                </svg>
              </template>
            </FeatureCard>
          </div>
        </div>
      </section>

      <section class="py-20 px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900">Pronto para começar?</h2>
          <p class="mt-4 text-lg text-slate-600">
            Crie sua conta gratuitamente e descubra uma nova forma de se comunicar.
          </p>
          <div class="mt-8">
            <IconButton
              to="/login?mode=register"
              class="px-8 rounded-xl hover:scale-105 shadow-lg shadow-slate-900/20"
            >
              Criar conta gratuita
            </IconButton>
          </div>
        </div>
      </section>
    </main>

    <LandingFooter />
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-fade-in-delayed {
  opacity: 0;
  animation: fade-in 0.8s ease-out 0.3s forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}
</style>
