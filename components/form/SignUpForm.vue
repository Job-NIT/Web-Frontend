<template>
  <form class="mx-4 mt-2 text-center">
    <h5>ایجاد حساب کاربری</h5>

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="نام" />
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="نام خانوادگی"
      />
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder=" نام کاربری"
      />
      <span class="input-group-text">@</span>
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text">example.com@</span>
      <input
        type="email"
        class="form-control"
        placeholder="ایمیل"
      />
    </div>

    <div class="input-group mb-3">
      <input
        type="tel"
        class="form-control"
        placeholder="شماره تلفن"
      />
      <span class="input-group-text">۹۸+</span>
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="نام شرکت"
      />
    </div>

    <div class="input-group mb-3">
      <input
        type="password"
        class="form-control"
        placeholder="گذرواژه"
      />
    </div>

    <div class="input-group mb-3">
      <input
        type="password"
        class="form-control"
        placeholder="تکرار گذرواژه"
      />
    </div>

    <button type="submit" class="btn btn-primary mb-3 btn-block">
      ثبت نام
    </button>

    <p>
      قبلا حساب کاربری ساخته اید؟
      <NuxtLink to="/auth/login">ورود</NuxtLink>
    </p>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
