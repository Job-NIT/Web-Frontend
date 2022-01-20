<template>
  <div class="card text-center mb-3 jn-border jn-bg-gradiant">
    <div class="position-relative">
      <img
        class="card-img-top jn-card-image jn-border-bottom"
        alt="Card image cap"
        :src="imageSrc"
      />

      <div class="jn-card-category">
        {{ project.category.name }}
      </div>
    </div>
    <div class="card-body">
      <h4 class="card-title">{{ project.title }}</h4>

      <p class="card-text">{{ project.detail }}</p>

      <NuxtLink
        :to="`/projects/${project.id}`"
        class="btn btn-block jn-btn-primary"
      >
        مشاهده پروژه
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import NoImage from "~/assets/images/no-image.jpg";

export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      const image = this.project.image;

      return image ? image : NoImage;
    },
  },
};
</script>
