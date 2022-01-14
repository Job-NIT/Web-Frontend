<template>
  <form class="mx-4 text-center" @submit.prevent="submitForm">
    <h5>ورود به حساب کاربری</h5>

    <div class="input-group mb-3 mt-5">
      <input
        type="text"
        class="form-control"
        placeholder="نام کاربری"
        v-model="username"
        required
      />
      <span class="input-group-text">@</span>
    </div>

    <div class="input-group mb-3">
      <input
        type="password"
        class="form-control"
        placeholder="گذرواژه"
        v-model="password"
        required
      />
    </div>

    <button type="submit" class="btn btn-primary mb-3 btn-block">ورود</button>

    <p>
      حساب کاربری ندارید؟
      <NuxtLink to="/auth/signup">ثبت نام</NuxtLink>
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

<style></style>
