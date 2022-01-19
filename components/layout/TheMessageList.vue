<template>
  <div class="jn-msg-list">
    <Message
      v-for="message in messages"
      :key="message.time"
      :message="message"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Message from "./Message";

export default {
  components: {
    Message,
  },
  computed: {
    ...mapState({
      messages: (state) => state.message.list,
    }),
  },
};
</script>
