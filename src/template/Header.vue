<template>
  <div
    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 mt-4 border-bottom"
  >
    <h5>{{ title }}</h5>
  </div>
</template>

<script>
export default {
  props: ["title", "showAdd"],
};
</script>