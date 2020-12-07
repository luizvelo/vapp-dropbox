<template>
  <div class="contato">
    <Header title="Contatos"/>
    <hr>
    <div class="h5 text-bold">
      {{ email }}
    </div>
    <br>
    <span>{{ $store.getters.getNomeCompleto }}</span>
    <router-view/>
    <!-- <button @click="goHome">Go home</button> -->
  </div>
</template>

<script>

import Header from '../template/Header';

export default {
  props: ['id'],
  components: {
    Header
  },
  computed: {
    email() {
      return this.$store.state.contato.email;
    }
  },
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   $route(to) {
  //     this.id = to.params.id;
  //   }
  // },
  methods: {
    goHome() {
      // this.$router.push('/')
      this.$router.push({path: '/'});
    }
  }
  
}
</script>

<style scoped>

.margin {
  margin: 15px;
}

</style>