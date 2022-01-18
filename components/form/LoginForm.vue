<template>
  <form
    class="mx-4 text-center py-3 px-4 jn-bg-gradiant jn-border"
    @submit.prevent="submitForm"
  >
    <h5>ورود به حساب کاربری</h5>

    <div class="input-group mb-3 mt-5">
      <input
        type="text"
        class="form-control jn-border"
        placeholder="نام کاربری"
        v-model="username"
        required
      />
      <span class="input-group-text jn-border">@</span>
    </div>

    <div class="input-group mb-3">
      <input
        type="password"
        class="form-control jn-border"
        placeholder="گذرواژه"
        v-model="password"
        required
      />
    </div>

    <button type="submit" class="btn mb-3 btn-block jn-btn-primary">
      ورود
    </button>

    <p>
      حساب کاربری ندارید؟
      <NuxtLink to="/auth/signup" class="jn-text">ثبت نام</NuxtLink>
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      const data = {
        username: this.username,
        password: this.password,
      };

      this.$network.auth.login(data).then(console.log).catch(console.log);
    },
  },
};
</script>
