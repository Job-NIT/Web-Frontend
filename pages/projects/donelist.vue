<template>
  <div class="row justify-content-end mx-4 mb-2 mt-2">
    <h4><b> لیست درخواست های ثبت شده </b></h4>
    <div class="col-md-2 mt-3">
      <Projectcard> </Projectcard>
      <Projectcard> </Projectcard>
    </div>
    <div class="col-md-2 mt-3">
      <Projectcard> </Projectcard>
      <Projectcard> </Projectcard>
    </div>
    <div class="col-md-2 mt-3">
      <Projectcard> </Projectcard>
      <Projectcard> </Projectcard>
    </div>
    <div class="col">
      <Projectdetail></Projectdetail>
    </div>
  </div>
</template>

<script>
import Projectcard from "~/components/Projectcard";
import Projectdetail from "~/components/Projectdetail";

export default {
  components: {
    Projectdetail,
    Projectcard,
  },
  auth: false,
};
</script>

<style>
</style>