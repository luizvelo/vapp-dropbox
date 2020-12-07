<template>
  <div class="contato-edit">
    <h3>Contato editar</h3>
    <hr />
    <h5>Código: {{ id }}</h5>
    <!--way 1 -->
    <h5>Código: {{ $route.params.id }}</h5>
    <!--way 2 -->
    <button type="button" class="btn btn-danger">Excluir</button>
    <button type="button" class="btn btn-success" @click="confirmou = true">
      Salvar
    </button>

    <p>
      <strong>Completo:</strong> {{ $route.query.completo ? "Sim" : "Não" }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmou: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    
    if (this.confirmou) {
      next();
      return;
    }

    if (confirm("Deseja realmente sair desta página?")) {
      next();
    } else {
      next(false);
    }
  },
  created() {
    console.log("route query completo: ", this.$route.query.completo);
  },
};
</script>

<style scoped>
</style>