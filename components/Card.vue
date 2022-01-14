<template>
  <div class="card text-center my-3">
    <img class="card-img-top" :src="cardInfo.image" alt="Card image" />

    <div class="card-body">
      <h4 class="card-title">{{ cardInfo.title }}</h4>

      <p class="card-text">
        {{ cardInfo.description }}
      </p>

      <NuxtLink :to="cardInfo.link" class="btn btn-primary btn-block">
        {{ goToText }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardInfo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    goToText() {
      return "برو به " + this.cardInfo.title;
    }
  }
};
</script>
