<template>
  <div class="text-center py-5">
    {{ isNotFoundPage ? "Page not found" : "Error occurred" }}
  </div>
</template>

<script>
export default {
  props: ["error"],
  computed: {
    isNotFoundPage() {
      return this.error.statusCode === 404;
    },
  },
};
</script>
