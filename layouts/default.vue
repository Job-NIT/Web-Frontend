<template>
  <div>
    <TheHeader />

    <TheMessageList />

    <main class="my-3">
      <Nuxt />
    </main>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/layout/TheHeader";
import TheMessageList from "~/components/layout/TheMessageList";
import TheFooter from "~/components/layout/TheFooter";

export default {
  components: {
    TheHeader,
    TheMessageList,
    TheFooter,
  },
};
</script>
