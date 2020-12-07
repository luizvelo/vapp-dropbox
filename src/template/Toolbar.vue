<template>

    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0">vue app</a>
      <input class="form-control form-control-dark w-100 m-12" type="text" placeholder="Buscar" aria-label="Buscar">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </nav>

  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <a class="navbar-brand">{{ title }}</a>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
          <router-link to="/" tag="li" class="nav-item" active-class="bg-info" exact><a class="nav-link">Início</a></router-link>
          <router-link to="/contato" tag="li" class="nav-item" active-class="bg-info"><a class="nav-link">Contato</a></router-link>
      </ul>
    </div>
  </nav> -->
</template>

<script>
export default {
  name: "Toolbar",
  props: ["title"],
};
</script>

<style scoped>
.navbar-brand {
  font-size: 24px;
}

nav {
  margin-bottom: 24px;
}

.m-12 {
  margin: 12px;
}
</style>