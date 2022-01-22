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

          <!-- <div class="input-group-btn">
            <button class="btn btn-default" type="submit">
              <i class="glyphicon glyphicon-search"></i>
            </button>
          </div> -->
        </div>
      </form>
    </div>

    <CardList :projects="filteredProjects" />

    <!-- <nav av aria-label="Page navigation example">
      <ul class="pagination justify-content-center mt-4 mb-4">
        <li class="page-item">
          <a class="page-link pgl" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link pgl" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav> -->

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
