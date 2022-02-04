<template>
  <div v-if="project" class="card jn-border">
    <div class="position-relative">
      <img
        class="card-img-top img-fluid jn-border-bottom jn-detail-card-image"
        :src="imageSrc"
        alt="Card image"
      />

      <div class="jn-card-category">
        {{ project.category.name }}
      </div>
    </div>

    <div class="card-body jn-bg-gradiant">
      <div class="text-right">
        <h4 class="card-title font-weight-bold text-center">
          {{ project.title }}
        </h4>

        <div>
          <span>کارفرما:</span>
          <NuxtLink :to="`/profile/${employer.id}`">
            {{ employerName }}
          </NuxtLink>
        </div>

        <p class="card-text mb-5 jn-project-detail">
          {{ project.detail }}
        </p>

        <div class="row mx-0 mb-3">
          <div class="col">
            <h6>تاریخ پایان پروژه</h6>
            <time class="d-block font-weight-bold text-center">
              {{ time }}
            </time>
          </div>

          <div class="col">
            <h6>مبلغ پرداختی</h6>
            <span class="d-block font-weight-bold text-center">
              {{ project.budget.toLocaleString() }} تومان
            </span>
          </div>
        </div>

        <div v-if="!isWaiting">
          <div class="mb-2">در حال انجام توسط:</div>

          <Freelancer :freelancer="project.freelancer" />
        </div>
      </div>

      <div class="my-3">
        <div v-if="isWaiting && isFreelancer">
          <button
            @click="sendRequest"
            class="btn w-50 d-block mx-auto jn-btn-primary mb-2"
          >
            فرستادن درخواست
          </button>
          <button
            @click="removeRequest"
            class="btn w-50 d-block mx-auto btn-danger mb-2"
          >
            حذف درخواست
          </button>
        </div>

        <div v-if="isOwner">
          <button
            @click="removeProject"
            class="btn w-50 d-block mx-auto btn-danger mb-2"
          >
            حذف پروژه
          </button>
        </div>

        <div
          class="btn w-50 d-block mx-auto jn-btn-primary"
          @click="goBack"
        >
          بازگشت
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import noImage from "~/assets/images/no-image.jpg";
import { TYPE } from "~/constants/user";
import { MESSAGES } from "~/constants/message";
import { mapActions } from "vuex";
import Freelancer from "./Freelancer";

export default {
  components: {
    Freelancer,
  },
  props: ["project", "isOwner"],
  computed: {
    id() {
      return this.project.id;
    },
    imageSrc() {
      const image = this.project.image;

      return image ? image : noImage;
    },
    time() {
      return new Date(this.project.dead_line).toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    isFreelancer() {
      const user = this.$auth.user;

      return user.user.user_type === TYPE.FREELANCER;
    },
    isWaiting() {
      return !this.project.freelancer;
    },
    employer() {
      return this.project.employer;
    },
    employerName() {
      return `${this.employer.first_name} ${this.employer.last_name}`;
    },
  },
  methods: {
    ...mapActions("message", ["addSuccessMessage", "addErrorMessage"]),
    goBack() {
      this.$router.back();
    },
    handleError(error) {
      this.addErrorMessage(MESSAGES.PROJECT_REQUEST.FAILED);
    },
    sendRequest() {
      this.$network.projectRequest
        .create(this.id)
        .then((response) => {
          const request = response.data;

          this.addSuccessMessage(MESSAGES.PROJECT_REQUEST.CREATED);

          this.$emit("sendRequest", request);
        })
        .catch(this.handleError);
    },
    removeRequest() {
      const user = this.$auth.user;

      this.$network.projectRequest
        .remove(this.id)
        .then((response) => {
          this.addSuccessMessage(MESSAGES.PROJECT_REQUEST.REMOVED);

          this.$emit("removeRequest", user.user.id);
        })
        .catch(this.handleError);
    },
    removeProject() {
      const confirm = window.confirm("آیا از حذف مطمئن هستید؟");

      if (!confirm) return;

      const id = this.project.id;
      this.$network.project
        .delete(id)
        .then((response) => {
          this.addSuccessMessage(MESSAGES.PROJECT.REMOVED);

          this.$router.replace("/dashboard");
        })
        .catch((error) => {
          this.addErrorMessage(MESSAGES.PROJECT_REQUEST.REMOVE_FAILED);
        });
    },
  },
};
</script>
