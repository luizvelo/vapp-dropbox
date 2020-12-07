<template>
  <div class="contato-detail">
    <h4 class="text-secondary">Contato detalhe</h4>
    <hr />
    <h6>Código: {{ id }}</h6>
    <!-- <router-link tag="button" class="btn btn-warning" :to="`/contato/${id}/editar`"> -->
    <!--way 1 -->
    <!-- <router-link tag="button" class="btn btn-warning" :to="`/contato/${$route.params.id}/editar`"> way 2 -->
    <router-link
      tag="button"
      class="btn btn-warning"
      :to="{
        name: 'editarContato',
        params: { id: id },
        query: { completo: false, lingua: 'pt' },
      }"
    >
      <!--way 3 -->
      Editar
    </router-link>

    <div class="form-group">
      <label for="exampleFormControlTextarea1">Example textarea</label>
      <textarea
        v-model="myHtmlCode"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>

      <div v-html="myHtmlCode"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      myHtmlCode: ''
    }
  },
  beforeRouteEnter(to, from, next) {
    // nesse modo o componente ainda não foi criado
    // e não tera os dados computados ou dados reativos
    console.log(`contatoDetail: ${to} ${from}`);
    const autenticado = true;
    next(autenticado);
    // next((component) => {
    //   // com o callback é possível pegar a instance do component
    //   // e acessar dados computados, reativos e métodos
    //   console.log(component.id);
    // });
  },
};
</script>

<style scoped>
</style>