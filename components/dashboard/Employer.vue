<template>
  <div>
    <h4 class="font-weight-bold text-right my-2 mr-4">پروژه های درحال انجام</h4>
    <CardList :projects="workingProjects" />

    <h4 class="font-weight-bold text-right my-2 mr-4">
      پروژه های در صف انتظار
    </h4>
    <CardList :projects="waitingProjects" />
  </div>
</template>

<script>
import CardList from "~/components/project/CardList";
import { mapActions } from "vuex";
import { MESSAGES } from "~/constants/message";

export default {
  components: {
    CardList,
  },
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    workingProjects() {
      return this.projects.filter((project) => !!project.freelancer);
    },
    waitingProjects() {
      return this.projects.filter((project) => !project.freelancer);
    },
  },
  methods: {
    ...mapActions("message", ["addErrorMessage"]),
  },
  mounted() {
    this.$network.project
      .employer()
      .then((response) => {
        this.projects = response.data;
      })
      .catch((error) => {
        this.addErrorMessage(MESSAGES.GLOBAL.LOADING_ERROR);
      });
  },
};
</script>
