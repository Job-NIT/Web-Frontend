<template>
  <div>
    <NuxtLink
      :to="`/profile/${freelancer.id}`"
      class="row mx-0 jn-border jn-btn-outline"
    >
      <div class="col-3 p-0">
        <img
          class="jn-card-image jn-border-left"
          :src="imageSrc"
          alt="Freelancer image"
        />
      </div>

      <div class="col d-flex align-items-center justify-content-center">
        {{ full_name }}
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import noImage from "~/assets/images/no-profile.jpg";

export default {
  props: {
    freelancer: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      const image = this.freelancer.image;

      return image ? image : noImage;
    },
    full_name() {
      return `${this.freelancer.first_name} ${this.freelancer.last_name}`;
    },
  },
};
</script>
