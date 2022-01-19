<template>
  <div :class="`alert text-center ${messageClass} jn-error`">
    {{ message.text }}
  </div>
</template>

<script>
import { TYPES } from "~/constants/message";

export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  computed: {
    messageClass() {
      return this.message.type === TYPES.SUCCESS
        ? "alert-success"
        : "alert-danger";
    },
  },
};
</script>
