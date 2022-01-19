<template>
  <div v-if="project" class="card jn-border">
    <img
      class="card-img-top img-fluid jn-border-bottom jn-detail-card-image"
      :src="imageSrc"
      alt="Card image"
    />

    <div class="card-body jn-bg-gradiant">
      <div class="text-right">
        <h4 class="card-title font-weight-bold text-center">
          {{ project.title }}
        </h4>

        <!-- <h4 class="card-title">مهارت</h4>

        <ul class="list-inline">
          <li class="list-inline-item">
            <h6 class="font-weight-bold">html</h6>
          </li>
          <li class="list-inline-item">
            <h6 class="font-weight-bold">css</h6>
          </li>
          <li class="list-inline-item">
            <h6 class="font-weight-bold">js</h6>
          </li>
        </ul> -->

        <h4 class="card-title">توضیحات</h4>

        <p class="card-text mb-5">
          {{ project.detail }}
        </p>

        <div class="row mx-0">
          <div class="col">
            <h6>تاریخ پایان پروژه</h6>
            <time class="d-block font-weight-bold text-center">
              {{ time }}
            </time>
          </div>

          <div class="col">
            <h6>مبلغ پرداختی</h6>
            <span class="d-block font-weight-bold text-center">
              {{ project.budget }} تومان
            </span>
          </div>
        </div>
      </div>

      <div class="my-3">
        <NuxtLink
          to="/projects"
          class="btn w-50 d-block mx-auto jn-btn-primary"
        >
          بازگشت
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import noImage from "~/assets/images/no-image.jpg";

export default {
  props: ["project"],
  computed: {
    imageSrc() {
      const image = this.project.image;

      return image ? image : noImage;
    },
    time() {
      return new Date(this.project.dead_line).toLocaleString();
    },
  },
};
</script>
