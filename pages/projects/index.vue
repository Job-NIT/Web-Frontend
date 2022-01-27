<template>
  <div>
    <div class="container my-4">
      <form>
        <div class="input-group">
          <input
            type="search"
            class="form-control jn-border jn-bg-gradiant"
            placeholder="جستوجو"
            v-model="search"
          />
        </div>
      </form>
    </div>

    <CardList :projects="filteredProjects" />

    <AddButton />
  </div>
</template>

<script>
import CardList from "~/components/project/CardList";
import AddButton from "~/components/project/AddButton";
import { MESSAGES } from "~/constants/message";
import { mapActions } from "vuex";

export default {
  components: {
    CardList,
    AddButton,
  },
  data() {
    return {
      projects: [],
      search: "",
    };
  },
  computed: {
    filteredProjects() {
      if (!this.search.trim()) return this.projects;

      return this.projects.filter(
        (project) => project.title.indexOf(this.search) > -1
      );
    },
  },
  methods: {
    ...mapActions("message", ["addErrorMessage"]),
    handleError(error) {
      this.addErrorMessage(MESSAGES.GLOBAL.LOADING_ERROR);
    },
  },
  mounted() {
    this.$network.project
      .list()
      .then((response) => {
        this.projects = response.data;
      })
      .catch(this.handleError);
  },
};
</script>
