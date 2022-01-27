<template>
  <div class="container">
    <div v-if="user" class="card jn-border">
      <div>
        <img
          class="card-img-top img-fluid jn-border-bottom jn-detail-card-image"
          :src="imageSrc"
          alt="Profile image"
        />
      </div>

      <div class="card-body jn-bg-gradiant">
        <div class="text-right">
          <h4 class="card-title font-weight-bold text-center">
            {{ full_name }}
          </h4>

          <p class="card-text mb-3 jn-project-detail">
            <span class="font-weight-bold">نام کاربری:</span>
            <span class="mr-3">{{ user.user.username }}</span>
          </p>

          <p class="card-text mb-3 jn-project-detail">
            <span class="font-weight-bold">ایمیل:</span>
            <span class="mr-3">{{ user.user.email }}</span>
          </p>

          <p class="card-text mb-3 jn-project-detail">
            <span class="font-weight-bold">تلفن:</span>
            <span class="mr-3">{{ user.user.phone_number }}</span>
          </p>

          <p v-if="isEmployer" class="card-text mb-3 jn-project-detail">
            <span class="font-weight-bold">نام شرکت:</span>
            <span class="mr-3">{{ user.company }}</span>
          </p>
        </div>

        <div v-if="isMyProfile" class="my-3">
          <NuxtLink
            to="/profile/edit"
            class="btn w-50 d-block mx-auto jn-btn-primary"
          >
            ویرایش پروفایل
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TYPE } from "~/constants/user";
import noImage from "~/assets/images/no-profile.jpg";
import { MESSAGES } from "~/constants/message";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    id() {
      return Number(this.$route.params.id);
    },
    full_name() {
      return `${this.user.user.first_name} ${this.user.user.last_name}`;
    },
    isEmployer() {
      return this.user.user.user_type == TYPE.EMPLOYER;
    },
    imageSrc() {
      const image = this.user.user.image;

      return image ? image : noImage;
    },
    isMyProfile() {
      const user = this.$auth.user;

      return !this.id || this.id === user.user.id;
    },
  },
  methods: {
    ...mapActions("message", ["addErrorMessage"]),
  },
  mounted() {
    if (this.isMyProfile) {
      const user = this.$auth.user;

      this.user = user;
    } else {
      this.$network.profile
        .get(this.id)
        .then((response) => {
          this.user = response.data;
        })
        .catch((error) => {
          this.addErrorMessage(MESSAGES.GLOBAL.LOADING_ERROR);
        });
    }
  },
};
</script>
