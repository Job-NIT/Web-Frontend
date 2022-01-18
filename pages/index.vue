<template>
  <div class="container text-center">
    <h3><b>وبسایت کاریابی جابنیت</b></h3>
    <p>وبسایتی برای فری لنسرها و کارفرماها برای دسترسی به پروژه های</p>
    <p>مختلف وکسب درآمد برای افراد بامهارت</p>

    <div>
      <NuxtLink to="/auth/login" class="btn w-25 jn-btn-primary">
        ورود
      </NuxtLink>

      <NuxtLink to="/auth/signup" class="btn w-25 jn-btn-outline">
        ثبت نام
      </NuxtLink>
    </div>

    <img src="~/assets/images/jobnit_icon_green.png" alt="" class="w-75" />
  </div>
</template>

<script>
export default {
  layout: "three_column",
  auth: false,
};
</script>
