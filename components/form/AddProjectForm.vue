<template>
  <form @submit.prevent="submitForm" class="card w-50 mx-auto jn-border">
    <div @click="handleClick">
      <img
        class="card-img-top img-fluid jn-border-bottom jn-detail-card-image"
        :src="imageSrc"
        alt="Card image"
      />

      <input
        @change="handleChange"
        type="file"
        accept="image/*"
        ref="fileChooser"
        hidden
      />
    </div>

    <div class="card-body jn-bg-gradiant">
      <div class="row justify-content-center mb-4">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control jn-border"
            placeholder="عنون پروژه"
            v-model="title"
            required
          />
        </div>

        <div class="col-md-6">
          <select
            class="form-control text-center"
            required
            v-model="category_id"
          >
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
      </div>

      <!-- <div class="form-group my-3">
          <input
            type="text"
            class="form-control form-contro1"
            placeholder="مهارت ها"
            required
          />
        </div> -->

      <div class="form-group my-4">
        <textarea
          class="form-control jn-border"
          placeholder="توضیحات"
          v-model="detail"
          rows="4"
        ></textarea>
      </div>

      <div class="row justify-content-center my-4">
        <div class="col-md-4">
          <input
            type="datetime-local"
            class="form-control jn-border"
            placeholder="تاریخ پایان پروژه"
            v-model="dead_line"
            required
          />
        </div>

        <div class="col-md-4">
          <div class="input-group">
            <input
              type="number"
              class="form-control jn-border"
              min="0"
              placeholder="مبلغ"
              v-model="budget"
              required
            />
            <span class="input-group-text jn-border">تومان</span>
          </div>
        </div>
      </div>

      <button type="submit" class="btn w-50 mx-auto d-block jn-btn-primary">
        ثبت پروژه
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { MESSAGES } from "~/constants/message";
import noImage from "~/assets/images/no-image.jpg";

export default {
  data() {
    return {
      categories: [],
      image: null,
      title: "",
      detail: "",
      dead_line: "",
      budget: "",
      category_id: "",
    };
  },
  computed: {
    imageSrc() {
      return this.image ? URL.createObjectURL(this.image) : noImage;
    },
  },
  methods: {
    ...mapActions("message", ["addSuccessMessage", "addErrorMessage"]),
    handleClick() {
      this.$refs.fileChooser.click();
    },
    handleChange() {
      this.image = this.$refs.fileChooser.files[0];
    },
    resetForm() {
      this.image = null;
      this.title = "";
      this.detail = "";
      this.dead_line = "";
      this.budget = "";
      this.category_id = "";
    },
    submitForm() {
      const formData = new FormData();

      if (this.image) {
        formData.append("image", this.image);
      }

      formData.append("title", this.title);
      formData.append("detail", this.detail);
      formData.append("dead_line", this.dead_line);
      formData.append("budget", this.budget);
      formData.append("category_id", Number(this.category_id));

      this.$network.project
        .create(formData)
        .then((response) => {
          this.addSuccessMessage(MESSAGES.PROJECT.SUCCESS);

          this.resetForm();
        })
        .catch((error) => {
          this.addErrorMessage(MESSAGES.PROJECT.FAILED);
        });
    },
  },
  mounted() {
    this.$network.category
      .list()
      .then((response) => {
        this.categories = response.data;
      })
      .catch((error) => {
        this.addErrorMessage(MESSAGES.GLOBAL.LOADING_ERROR);
      });
  },
};
</script>
