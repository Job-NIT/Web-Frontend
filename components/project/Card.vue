<template>
  <div class="card text-center mb-3 jn-border jn-bg-gradiant">
    <img
      class="card-img-top jn-card-image jn-border-bottom"
      src="~/assets/images/card1.jpg"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">عنوان پروژه</h4>

      <p class="card-text">توضیحات پروژه</p>

      <NuxtLink to="/projects/1" class="btn btn-block jn-btn-primary">
        مشاهده پروژه
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>
