<template>
  <LoginForm />
</template>

<script>
import LoginForm from "~/components/form/LoginForm";

export default {
  layout: "three_column",
  auth: "guest",
  components: {
    LoginForm,
  },
};
</script>
