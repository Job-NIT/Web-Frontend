<template>
  <form class="card w-50 mx-auto jn-border">
    <div>
      <img
        class="card-img-top img-fluid jn-border-bottom"
        src="~/assets/images/no-image.jpg"
        alt="Card image"
      />
    </div>

    <div class="card-body jn-bg-gradiant">
      <div class="row justify-content-center mb-4">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control jn-border"
            placeholder="عنون پروژه"
            required
          />
        </div>

        <!-- <div class="col-md-6">
            <select class="form-control text-center" required>
              <option selected>دسته بندی</option>
            </select>
          </div> -->
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
          rows="4"
        ></textarea>
      </div>

      <div class="row justify-content-center my-4">
        <div class="col-md-4">
          <input
            type="datetime-local"
            class="form-control jn-border"
            placeholder="تاریخ پایان پروژه"
          />
        </div>

        <div class="col-md-4">
          <div class="input-group">
            <input
              type="number"
              class="form-control jn-border"
              min="0"
              placeholder="مبلغ"
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
export default {};
</script>
