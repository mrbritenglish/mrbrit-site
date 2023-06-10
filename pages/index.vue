<template>
  <header
    class="bg-primary pb-4 h-96 relative z-10 shadow-[0px_10px_8px_-4px_#718096]"
  >
    <nav class="p-4">
      <img width="100" src="~/assets/images/logo-brit.png" alt="Logo MrBrit" />
    </nav>
    <div class="flex justify-center">
      <div class="flex flex-col md:flex-row justify-center items-center gap-12">
        <h1
          class="text-white text-4xl md:text-5xl text-center md:text-left font-bold font-poppins w-96"
        >
          Aprenda Inglês do seu jeito
        </h1>
        <img class="w-48 md:w-96" src="~/assets/images/learning.svg" alt="" />
      </div>
    </div>
  </header>
  <section class="py-20 text-center text-lg bg-slate-200">
    <div
      class="border border-t-2 border-slate-800 border-solid w-40 my-10 m-auto"
    ></div>
    <div class="w-3/4 md:w-1/2 m-auto">
      <p class="pt-4">
        Estude pronúncia de forma eficiente com horários flexíveis e aulas
        semanais de acordo com a sua necessidade.
      </p>
      <p class="pt-4">
        Aprenda inglês com música, cantando de verdade por meio de aulas de
        conversação.
      </p>
      <p class="pt-4">
        Nossa sala de aula conta com horários de plantão de dúvida para todos os
        níveis.
      </p>
      <p class="pt-4">
        Você será capaz de desenvolver uma compreensão auditiva aprofundada e
        realizar provas para os exames de proficiência.
      </p>
    </div>
    <div
      class="border border-t-2 border-slate-800 border-solid w-40 m-auto my-10"
    ></div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-3">
    <CourseCard
      icon="mdi-fire"
      title="Express English"
      label="Curso completo de Inglês"
      bgColor="bg-primary"
    />
    <CourseCard
      icon="mdi-airplane"
      title="Portuguese for Foreigners"
      label="Course for foreigners."
      bgColor="bg-primary-200"
    />
    <CourseCard
      icon="mdi:earth"
      title="Business"
      label="Do básico ao avançado."
      bgColor="bg-primary-100"
    />
    <CourseCard
      icon="bxs:coffee"
      title="Vip"
      label="Aulas Especiais."
      bgColor="bg-primary-200"
    />
    <CourseCard
      icon="zondicons:conversation"
      title="Conversação"
      label="Conhecimento específico."
      bgColor="bg-primary-100"
    />
    <CourseCard
      icon="mdi:flash"
      title="Teen"
      label="O futuro de seu filho em nossas mãos!"
      bgColor="bg-primary"
    />
  </section>
</template>
