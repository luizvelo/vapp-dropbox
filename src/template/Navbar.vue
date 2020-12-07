<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky mt-12">
      <ul class="nav flex-column">
        <router-link
          v-for="item in navItems"
          :key="item.id"
          :to="`${item.link}`"
          tag="li"
          exact
          class="nav-item text-light"
          active-class="bg-success"
        >
          <span v-bind:data-feather="item.icon"></span>
          <a class="nav-link">{{ item.label }}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          id: "inicio",
          link: "/",
          label: "Página Inicial",
          icon: "home",
        },
                {
          id: "dropbox",
          link: "/drobbox",
          label: "Dropbox Upload",
          icon: "person",
        },
        {
          id: "contato",
          link: "/contato",
          label: "Contatos",
          icon: "person",
        },
      ],
    };
  },
};
</script>


<style scoped>
.mt-12 {
  margin-top: 12px;
}
</style>