<template>
  <div>
    <TheHeader />

    <main class="my-3">
      <Nuxt />
    </main>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/layout/TheHeader";
import TheFooter from "~/components/layout/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
