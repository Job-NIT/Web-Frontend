<template>
  <div class="card text-center mb-3 jn-border jn-bg-gradiant">
    <img
      class="card-img-top jn-card-image jn-border-bottom"
      :src="imageSrc"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">
        {{ full_name }}
      </h4>

      <NuxtLink
        :to="`/profile/${freelancer.id}`"
        class="btn btn-block jn-btn-outline"
      >
        مشاهده پروفایل
      </NuxtLink>

      <button
        v-if="isOwner"
        @click="acceptRequest"
        class="btn btn-block jn-btn-primary"
      >
        قبول درخواست
      </button>
    </div>
  </div>
</template>

<script>
import noImage from "~/assets/images/no-profile.jpg";
import { backend_url } from "~/constants/backend";
import { MESSAGES } from "~/constants/message";
import { mapActions } from "vuex";

export default {
  props: {
    request: {
      type: Object,
      required: true,
    },
    isOwner: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    freelancer() {
      return this.request.freelancer;
    },
    full_name() {
      return `${this.freelancer.first_name} ${this.freelancer.last_name}`;
    },
    imageSrc() {
      const image = this.freelancer.image;

      return image ? `${backend_url}${image}` : noImage;
    },
  },
  methods: {
    ...mapActions("message", ["addSuccessMessage", "addErrorMessage"]),
    acceptRequest() {
      const id = this.request.id;

      this.$network.projectRequest
        .accept(id)
        .then((response) => {
          this.addSuccessMessage(MESSAGES.PROJECT_REQUEST.ACCEPTED);

          this.$emit("acceptRequest", this.freelancer);
        })
        .catch((error) => {
          this.addErrorMessage(MESSAGES.PROJECT_REQUEST.FAILED);
        });
    },
  },
};
</script>
