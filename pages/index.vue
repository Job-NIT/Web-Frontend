<template>
  <div class="container text-center">
    <h3><b>وبسایت کاریابی جابنیت</b></h3>
    <p>وبسایتی برای فری لنسرها و کارفرماها برای دسترسی به پروژه های</p>
    <p>مختلف وکسب درآمد برای افراد بامهارت</p>

    <div>
      <NuxtLink to="/auth/login" class="btn btn-outline-primary w-25">
        ورود
      </NuxtLink>

      <NuxtLink to="/auth/signup" class="btn btn-outline-primary w-25">
        ثبت نام
      </NuxtLink>
    </div>

    <img
      src="~/assets/images/Jobnit_Icon_1300x1300_Green.png"
      alt=""
      class="w-75"
    />
  </div>
</template>

<script>
export default {
  layout: "three_column",
};
</script>
