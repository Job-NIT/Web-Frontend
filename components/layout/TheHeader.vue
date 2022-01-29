<template>
  <nav class="navbar justify-content-between top-navbar">
    <div class="navbar-right mx-2">
      <div v-if="isLoggedIn">
        <NuxtLink to="/profile" class="ml-2">
          <img :src="profileImage" alt="Avatar" class="avatar" />
        </NuxtLink>

        <NuxtLink to="/" class="navbar-link ml-2">خانه</NuxtLink>

        <NuxtLink to="/dashboard" class="navbar-link ml-2">داشبورد</NuxtLink>

        <NuxtLink to="/projects" class="navbar-link ml-2">پروژه ها</NuxtLink>

        <NuxtLink to="/about-us" class="navbar-link ml-2">درباره ما</NuxtLink>

        <a href="javascript:void()" @click="logout" class="navbar-link">
          خروج
        </a>
      </div>

      <div v-else>
        <NuxtLink to="/" class="navbar-link ml-2">خانه</NuxtLink>

        <NuxtLink to="/auth/login" class="navbar-link ml-2">ورود</NuxtLink>

        <NuxtLink to="/auth/signup" class="navbar-link ml-2">ثبت نام</NuxtLink>

        <NuxtLink to="/about-us" class="navbar-link ml-2">درباره ما</NuxtLink>
      </div>
    </div>

    <div class="navbar-left">
      <NuxtLink to="/" class="navbar-brand">
        جابنیت
        <img
          src="~/assets/images/jobnit_icon_white.png"
          alt="Logo"
          class="navbar-logo"
        />
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
import noImage from "~/assets/images/no-profile.jpg";

export default {
  name: "TheHeader",
  computed: {
    isLoggedIn() {
      return this.$auth.loggedIn;
    },
    profileImage() {
      const userImage = this.$auth.user.user.image;

      return userImage ? userImage : noImage;
    },
  },
  methods: {
    logout() {
      this.$network.auth.logout();
    },
  },
};
</script>
