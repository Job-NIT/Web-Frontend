<template>
  <nav class="navbar justify-content-between top-navbar">
    <div class="navbar-right mx-2">
      <img src="~/assets/images/profile.jpg" alt="Avatar" class="avatar" />

      <NuxtLink to="/">خانه</NuxtLink>

      <NuxtLink to="/dashboard">داشبورد</NuxtLink>

      <NuxtLink to="/news">اخبار</NuxtLink>

      <NuxtLink to="/events">رویدادها</NuxtLink>

      <NuxtLink to="/projects">پروژه ها</NuxtLink>

      <NuxtLink to="/news">محتوا</NuxtLink>

      <NuxtLink to="/about-us">درباره ما</NuxtLink>

      <a v-if="isLoggedIn" href="#" @click="logout">خروج</a>
    </div>

    <div class="navbar-left">
      <NuxtLink to="/" class="navbar-brand">
        جابنیت
        <img
          src="~/assets/images/Jobnit_Icon_1300x1300_White.png"
          alt="Logo"
          class="navbar-logo"
        />
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    isLoggedIn() {
      return this.$auth.loggedIn;
    },
  },
  methods: {
    logout() {
      this.$network.auth.logout();
    },
  },
};
</script>
