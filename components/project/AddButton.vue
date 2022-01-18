<template>
  <NuxtLink
    to="/projects/add"
    class="project-add-button btn rounded-circle jn-btn-primary"
  >
    +
  </NuxtLink>
</template>

<script>
export default {};
</script>

<style scoped>
.project-add-button {
  position: fixed;
  bottom: 30px;
  left: 30px;
  z-index: 1000;
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
}
</style>
