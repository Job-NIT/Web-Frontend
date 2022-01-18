<template>
  <div class="row mx-4 mb-4">
    <div v-for="i in 9" class="col-md-6 col-xl-4" :key="i">
      <RequestCard />
    </div>
  </div>
</template>

<script>
import RequestCard from "./RequestCard";

export default {
  components: {
    RequestCard,
  },
};
</script>
