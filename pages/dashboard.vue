<template>
  <div>
    <Freelancer v-if="isFreelancer" />

    <Employer v-else />

    <AddButton />
  </div>
</template>

<script>
import AddButton from "~/components/project/AddButton";
import Freelancer from "~/components/dashboard/Freelancer";
import Employer from "~/components/dashboard/Employer";
import { TYPE } from "~/constants/user";

export default {
  components: {
    AddButton,
    Freelancer,
    Employer,
  },
  computed: {
    isFreelancer() {
      const user = this.$auth.user;

      return user.user.user_type === TYPE.FREELANCER;
    },
  },
};
</script>
