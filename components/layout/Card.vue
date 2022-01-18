<template>
  <div class="card text-center my-3 jn-bg-gradiant jn-border">
    <img
      class="card-img-top jn-card-image jn-border-bottom"
      :src="cardInfo.image"
      alt="Card image"
    />

    <div class="card-body">
      <h4 class="card-title">{{ cardInfo.title }}</h4>

      <p class="card-text">
        {{ cardInfo.description }}
      </p>

      <NuxtLink :to="cardInfo.link" class="btn btn-block jn-btn-primary">
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
    },
  },
};
</script>
