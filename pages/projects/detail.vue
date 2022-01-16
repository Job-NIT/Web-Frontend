<template>
  <div class="container mb-2">
    <div class="row justify-content-center mx-2">
      <div class="col-md-8 mt-1">
        <div class="container">
          <projectdetail> </projectdetail>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projectdetail from "~/components/Projectdetail";

export default {
  auth: false,
  components: {
    Projectdetail,
  },
};
</script>

<style></style>
