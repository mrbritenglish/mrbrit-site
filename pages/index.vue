<template>
  <section class="py-20 text-center text-secondary text-lg bg-slate-200">
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

  <section class="bg-slate-200 py-12">
    <h1 class="text-3xl text-primary text-center font-poppins font-bold">
      Depoimentos
    </h1>
    <div class="w-1/2 mx-auto mt-12">
      <div class="bg-white text-primary p-4 rounded-lg">
        <Icon name="bxs:quote-alt-left" size="30" class="text-primary mb-4" />
        <p class="italic font-semibold text-sm md:text-base">
          "Com a Mr Brit, superei minhas expectativas. Em um ambiente
          descontraído de aulas dinâmicas, me familiarizei rapidamente com o
          idioma. Estudar na Mr Brit sem dúvida foi essencial para abrir as
          portas em minha vida profissional."
        </p>
        <div class="flex items-center justify-end gap-2 mt-4">
          <img
            class="rounded-full"
            width="50"
            src="~/assets/images/jessica-mr-brit1.jpg"
            alt=""
          />
          <div class="text-sm md:text-base">
            <p class="font-bold">Jéssica</p>
            <p class="text-xs md:text-sm">Administradora de Empresas</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-primary text-white">
    <h1 class="text-3xl text-center font-poppins font-bold pt-4">
      Área do aluno
    </h1>
    <div
      class="flex flex-col md:flex-row justify-center items-center gap-20 py-20 text-center"
    >
      <StudentAreaCard
        title="American English File"
        label="Conheça o material didático utilizado em nossos cursos"
        icon="ph:book-bold"
        link="/"
      />
      <StudentAreaCard
        title="Oxford English Testing"
        label="Encontre exercícios e explicações sobre a língua inglesa."
        icon="mdi:pencil"
        link="/"
      />
      <StudentAreaCard
        title="Ask Oxford"
        label="Excelente dicionário online que fornece definições claras e fáceis."
        icon="mdi:bookshelf"
        link="/"
      />
    </div>
  </section>
</template>
