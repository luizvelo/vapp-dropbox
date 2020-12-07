<template>
  <div class="contato-list">
    <div class="list-group">
      <small>Número sorteado: {{ sortNumber }}</small>
      <small class="mb-12">Você possui {{ total }} contatos</small>

      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Gênero</th>
            <th scope="col">Celular</th>
            <th scope="col">Cidade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in contatos" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.nome }}</td>
            <td>{{ item.sexo }}</td>
            <td>{{ item.celular }}</td>
            <td>{{ item.cidade }}</td>
            <td>
              <router-link
                tag="button"
                :to="`/contato/${item.id}`"
                type="button"
                class="btn btn-primary btn-sm"
              >
                Editar
              </router-link>
              <button
                @click="deleteContact(i)"
                class="btn btn-danger btn-sm"
                style="margin-left: 15px"
              >
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 
      <router-link
        v-for="item in contatos"
        :key="item.id"
        tag="button"
        :to="`/contato/${item.id}`"
        class="list-group-item list-group-item-action"
      >
        {{ item.nome }}
      </router-link> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters("contato", {
      total: "totalContacts",
      contatos: "contacts",
    }),
    email: {
      get() {
        return this.$store.state.contato.email;
      },
      set(email) {
        this.$store.commit("setEmail", email);
      },
    },
    sortNumber: () => Math.random(),
  },
  methods: {
    ...mapActions("contato", ["addContact", "deleteContact"]),
    ...mapMutations("contato ", ["addContact"]),
    adicionar() {},
  },
  // computed: mapGetters(['totalContacts']),
  // computed: {
  //   contatos() {
  //     return this.$store.state.contatos;
  //   },
  // },
  created() {
    // this.$store.commit("addContact", "Teste");
    // this.addContact("Teste");
    // this.$store.dispatch("addContact", "Teste");
  },
};
</script>

<style scoped>
.mb-12 {
  margin-bottom: 12px;
}
</style>