<template>
  <div>
    <header
      class="bg-primary pb-4 h-96 relative z-10 shadow-[0px_10px_8px_-4px_#718096]"
    >
      <nav class="p-4 h-28">
        <img
          style="width: 100px; height: auto"
          width="100"
          height="100"
          src="~/assets/images/logo-brit.png"
          alt="Logo MrBrit"
        />
      </nav>
      <div class="flex justify-center">
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-12"
        >
          <h1
            class="text-white text-4xl md:text-5xl text-center md:text-left font-bold font-poppins w-96"
          >
            Aprenda Inglês do seu jeito
          </h1>
          <Learning />
        </div>
      </div>
    </header>
    <slot />
    <footer class="bg-secondary">
      <div class="flex justify-center flex-col items-center p-2">
        <img
          width="120"
          src="~/assets/images/logo-brit.png"
          alt="Logo Mr Brit"
        />
        <address class="not-italic text-white text-center">
          <p>Rua Francisco de Barros, 249</p>
          <p>Centro, Taubaté-SP</p>
          <p>Tel: +12 3633-3719</p>
        </address>
        <ul class="flex gap-4 mt-4">
          <li>
            <NuxtLink
              href="https://www.facebook.com/MrBritSchool/?ref=embed_page"
              target="_blank"
            >
              <Icon name="mdi:facebook" size="30" class="text-white" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="https://www.instagram.com/mrbritschool/"
              target="_blank"
            >
              <Icon name="mdi:instagram" size="30" class="text-white" />
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div
        class="bg-tertiary text-xs text-center w-full text-gray-300 p-2 mt-8"
      >
        © Todos Direitos Reservados MrBrit.com.br - Desenvolvido por Thais
        Martins
      </div>
    </footer>
  </div>
</template>
