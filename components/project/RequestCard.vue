<template>
  <div class="card text-center mb-3 jn-border jn-bg-gradiant">
    <img
      class="card-img-top jn-card-image jn-border-bottom"
      src="~/assets/images/card1.jpg"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">
        {{ full_name }}
      </h4>

      <NuxtLink
        :to="`/profile/${freelancer.id}`"
        class="btn btn-block jn-btn-outline"
      >
        مشاهده پروفایل
      </NuxtLink>

      <button v-if="isOwner" class="btn btn-block jn-btn-primary">
        قبول درخواست
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    request: {
      type: Object,
      required: true,
    },
    isOwner: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    freelancer() {
      return this.request.freelancer;
    },
    full_name() {
      return `${this.freelancer.first_name} ${this.freelancer.last_name}`;
    },
  },
};
</script>
