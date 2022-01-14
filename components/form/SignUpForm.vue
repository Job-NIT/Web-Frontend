<template>
  <form class="mx-4 mt-2 text-center" @submit.prevent="formSubmit">
    <h5>ایجاد حساب کاربری</h5>

    <div class="input-group mb-3 w-50 mx-auto">
      <select class="form-control text-center" v-model="user_type">
        <option value="freelancer">فری لنسر هستم</option>
        <option value="employer">کارفرما هستم</option>
      </select>
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="نام"
        v-model="first_name"
        required
      />
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="نام خانوادگی"
        v-model="last_name"
        required
      />
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder=" نام کاربری"
        v-model="username"
        required
      />
      <span class="input-group-text">@</span>
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text">example.com@</span>
      <input
        type="email"
        class="form-control"
        placeholder="ایمیل"
        v-model="email"
        required
      />
    </div>

    <div class="input-group mb-3">
      <input
        type="number"
        class="form-control"
        placeholder="شماره تلفن"
        v-model="phone_number"
        required
      />
      <span class="input-group-text">۹۸+</span>
    </div>

    <div v-if="isEmployer" class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="نام شرکت"
        v-model="company"
        required
      />
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

    <div class="input-group mb-3">
      <input
        type="password"
        class="form-control"
        placeholder="تکرار گذرواژه"
        v-model="password2"
        required
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
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone_number: "",
      company: "",
      password: "",
      password2: "",
      user_type: "freelancer",
    };
  },
  computed: {
    isEmployer() {
      return this.user_type === "employer";
    },
  },
  methods: {
    getSignUpData() {
      const data = {
        user: {
          first_name: this.first_name,
          last_name: this.last_name,
          username: this.username,
          email: this.email,
          phone_number: this.phone_number,
          password: this.password,
          password2: this.password2,
        },
      };

      if (this.isEmployer) {
        data.company = this.company;
      }

      return data;
    },
    formSubmit() {
      const data = this.getSignUpData();

      this.$network.auth.register[this.user_type](data)
        .then((res) => {
          const response = res.data;

          this.$auth.setUserToken(response.token);
        })
        .catch(console.log);
    },
  },
};
</script>

<style></style>
