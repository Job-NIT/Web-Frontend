<template>
  <div class="row mx-4 mb-4">
    <template v-if="projects.length">
      <div
        v-for="project in projects"
        class="col-md-4 col-lg-3 col-xl-2"
        :key="project.id"
      >
        <Card :project="project" />
      </div>
    </template>
    <template v-else>
      <p>لیست پروژه ها خالیست</p>
    </template>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>
