<template>
  <div class="d-flex justify-content-center">
    <NuxtLink
      :to="`/profile/${freelancer.id}`"
    >
      <div>
        <img
          class="jn-freelancer-img jn-border rounded-circle"
          :src="imageSrc"
          alt="Freelancer image"
        />
      </div>

      <div class="text-center">
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
