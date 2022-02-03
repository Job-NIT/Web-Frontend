<template>
  <form
    class="col-sm-9 col-md-6 mt-2 text-center py-3 px-4 jn-bg-gradiant jn-border"
    @submit.prevent="formSubmit"
  >
    <h5>ویرایش پروفایل</h5>

    <div class="mb-3">
      <EditProfileImage />
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control jn-border"
        placeholder="نام"
        v-model="first_name"
        required
      />
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control jn-border"
        placeholder="نام خانوادگی"
        v-model="last_name"
        required
      />
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control jn-border"
        placeholder=" نام کاربری"
        v-model="username"
        required
      />
      <span class="input-group-text jn-border">@</span>
    </div>

    <div class="input-group mb-3">
      <input
        type="email"
        class="form-control jn-border"
        placeholder="ایمیل"
        v-model="email"
        required
      />
    </div>

    <div class="input-group mb-3">
      <input
        type="number"
        class="form-control jn-border"
        placeholder="شماره تلفن"
        v-model="phone_number"
        required
      />
      <span class="input-group-text jn-border">۹۸+</span>
    </div>

    <div v-if="isEmployer" class="input-group mb-3">
      <input
        type="text"
        class="form-control jn-border"
        placeholder="نام شرکت"
        v-model="company"
        required
      />
    </div>

    <button type="submit" class="btn mb-3 btn-block jn-btn-primary">
      ویرایش
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { MESSAGES } from "~/constants/message";
import { TYPE } from "~/constants/user";
import EditProfileImage from "./EditProfileImage";

export default {
  components: {
    EditProfileImage,
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone_number: "",
      company: "",
    };
  },
  computed: {
    isEmployer() {
      const user = this.$auth.user;

      return user.user.user_type === TYPE.EMPLOYER;
    },
  },
  methods: {
    ...mapActions("message", ["addSuccessMessage", "addErrorMessage"]),
    getEditProfileData() {
      const data = {
        user: {
          first_name: this.first_name,
          last_name: this.last_name,
          phone_number: this.phone_number,
        },
      };

      const user = this.$auth.user;

      if (this.username !== user.user.username) {
        data.user.username = this.username;
      }
      if (this.email !== user.user.email) {
        data.user.email = this.email;
      }

      if (this.isEmployer) {
        data.company = this.company;
      }

      return data;
    },
    formSubmit() {
      const data = this.getEditProfileData();

      this.$network.profile
        .edit(data)
        .then((response) => {
          this.$auth.setUser(response.data);

          this.addSuccessMessage(MESSAGES.PROFILE_EDIT.SUCCESS);
        })
        .catch((error) => {
          this.addErrorMessage(MESSAGES.PROFILE_EDIT.FAILED);
        });
    },
  },
  mounted() {
    const user = this.$auth.user;

    this.first_name = user.user.first_name;
    this.last_name = user.user.last_name;
    this.username = user.user.username;
    this.email = user.user.email;
    this.phone_number = user.user.phone_number;
    this.company = user.company;
  },
};
</script>
