<template>
  <div class="card text-center mb-3 jn-border jn-bg-gradiant">
    <img
      class="card-img-top jn-card-image jn-border-bottom"
      src="~/assets/images/card1.jpg"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">نام فریلنسر</h4>

      <NuxtLink to="/profile/1" class="btn btn-block jn-btn-outline">
        مشاهده پروفایل
      </NuxtLink>

      <button class="btn btn-block jn-btn-primary">قبول درخواست</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
