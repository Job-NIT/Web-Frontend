<template>
  <div>
    <TheHeader />

    <main class="my-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-3">
            <Card :cardInfo="cards[0]" />

            <Card :cardInfo="cards[1]" />
          </div>

          <div class="col-md-6 mt-5">
            <Nuxt />
          </div>

          <div class="col-md-3">
            <Card :cardInfo="cards[2]" />

            <Card :cardInfo="cards[3]" />
          </div>
        </div>
      </div>
    </main>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/layout/TheHeader";
import TheFooter from "~/components/layout/TheFooter";
import Card from "~/components/layout/Card";
import cards from "~/constants/cards";

export default {
  components: {
    TheHeader,
    TheFooter,
    Card,
  },
  data() {
    return {
      cards,
    };
  },
};
</script>
