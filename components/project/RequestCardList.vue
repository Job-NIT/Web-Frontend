<template>
  <div class="row mx-4 mb-4">
    <div
      v-for="request in requests"
      class="col-md-6 col-xl-4"
      :key="request.id"
    >
      <RequestCard
        @acceptRequest="handleAcceptRequest"
        :request="request"
        :isOwner="isOwner"
      />
    </div>
  </div>
</template>

<script>
import RequestCard from "./RequestCard";

export default {
  components: {
    RequestCard,
  },
  props: {
    requests: {
      type: Array,
      required: true,
    },
    isOwner: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleAcceptRequest(freelancer) {
      this.$emit("acceptRequest", freelancer);
    },
  },
};
</script>
