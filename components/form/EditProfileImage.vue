<template>
  <div>
    <img
      @click="handleClick"
      class="jn-edit-image jn-border d-block mx-auto"
      :src="imageSrc"
      alt="Profile image"
    />

    <input
      @change="handleChange"
      ref="fileChooser"
      type="file"
      accept="image/*"
      hidden
    />
  </div>
</template>

<script>
import noImage from "~/assets/images/no-profile.jpg";
import { mapActions } from "vuex";
import { MESSAGES } from "~/constants/message";

export default {
  computed: {
    imageSrc() {
      const image = this.$auth.user.user.image;

      return image ? image : noImage;
    },
  },
  methods: {
    ...mapActions("message", ["addSuccessMessage", "addErrorMessage"]),
    handleClick() {
      this.$refs.fileChooser.click();
    },
    handleChange() {
      const fileChooser = this.$refs.fileChooser;
      const files = fileChooser.files;

      if (!files.length) return;

      const formData = new FormData();
      formData.append("image", files[0]);

      this.$network.profile
        .image(formData)
        .then((response) => {
          const data = response.data;

          const user = JSON.parse(JSON.stringify(this.$auth.user));

          user.user.image = data.image;

          this.$auth.setUser(user);

          this.addSuccessMessage(MESSAGES.PROFILE_EDIT.IMAGE_SUCCESS);
        })
        .catch((error) => {
          this.addErrorMessage(MESSAGES.PROFILE_EDIT.IMAGE_FAILED);
        });
    },
  },
};
</script>
