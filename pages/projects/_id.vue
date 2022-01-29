<template>
  <div class="row mx-0 justify-content-center">
    <div class="col-lg-6 mb-5">
      <Detail
        @sendRequest="handleSendRequest"
        @removeRequest="handleRemoveRequest"
        :project="project"
        :isOwner="isProjectOwner"
      />
    </div>

    <div v-if="requestList.length" class="col-lg-6">
      <h4 class="font-weight-bold text-center mb-3 mr-3">
        لیست درخواست های ثبت شده
      </h4>

      <RequestCardList
        @acceptRequest="handleAcceptRequest"
        :requests="requestList"
        :isOwner="isProjectOwner"
      />
    </div>
  </div>
</template>

<script>
import Detail from "~/components/project/Detail";
import RequestCardList from "~/components/project/RequestCardList";
import { TYPE } from "~/constants/user";
import { MESSAGES } from "~/constants/message";
import { mapActions } from "vuex";

export default {
  components: {
    Detail,
    RequestCardList,
  },
  data() {
    return {
      project: null,
      requestList: [],
    };
  },
  computed: {
    isProjectOwner() {
      if (!this.project) return false;

      const user = this.$auth.user;

      if (user.user.user_type === TYPE.FREELANCER) return false;

      if (user.user.id !== this.project.employer.id) return false;

      return true;
    },
  },
  methods: {
    ...mapActions("message", ["addErrorMessage"]),
    handleError(error) {
      this.addErrorMessage(MESSAGES.GLOBAL.LOADING_ERROR);
    },
    handleAcceptRequest(freelancer) {
      this.project.freelancer = freelancer;
      this.requestList = [];
    },
    handleSendRequest(request) {
      this.requestList.push(request);
    },
    handleRemoveRequest(freelancer_id) {
      const index = this.requestList.findIndex(
        (request) => request.freelancer.id === freelancer_id
      );

      this.requestList.splice(index, 1);
    },
  },
  async mounted() {
    const id = this.$route.params.id;

    try {
      this.project = await this.$network.project
        .get(id)
        .then((response) => response.data);

      if (this.project && !this.project.freelancer) {
        this.$network.projectRequest.list(id).then((response) => {
          this.requestList = response.data;
        });
      }
    } catch (error) {
      this.handleError(error);
    }
  },
};
</script>
