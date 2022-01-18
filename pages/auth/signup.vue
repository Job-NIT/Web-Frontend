<template>
  <SignUpForm />
</template>

<script>
import SignUpForm from "~/components/form/SignUpForm";

export default {
  layout: "three_column",
  auth: "guest",
  components: {
    SignUpForm,
  },
};
</script>
