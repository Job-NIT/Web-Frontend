<template>
  <nav class="navbar justify-content-between top-navbar">
    <div class="navbar-right mx-2">
      <NuxtLink to="/profile" class="ml-2">
        <img
          v-if="isLoggedIn"
          :src="profileImage"
          alt="Avatar"
          class="avatar"
        />
      </NuxtLink>

      <NuxtLink to="/" class="navbar-link ml-2">خانه</NuxtLink>

      <NuxtLink to="/dashboard" class="navbar-link ml-2">داشبورد</NuxtLink>

      <NuxtLink to="/projects" class="navbar-link ml-2">پروژه ها</NuxtLink>

      <NuxtLink to="/about-us" class="navbar-link ml-2">درباره ما</NuxtLink>

      <a v-if="isLoggedIn" href="#" @click="logout" class="navbar-link">خروج</a>
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
