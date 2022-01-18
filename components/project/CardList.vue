<template>
  <div class="row mx-4 mb-4">
    <div v-for="i in 10" class="col-md-4 col-lg-3 col-xl-2" :key="i">
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card,
  },
};
</script>
