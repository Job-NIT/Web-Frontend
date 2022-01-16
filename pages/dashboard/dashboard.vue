<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 mt-3 mb-4">
          <div id="demo" class="carousel slide" data-bs-ride="carousel">
            <!-- Indicators/dots -->
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="0"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="1"
              ></button>
            </div>

            <!-- The slideshow/carousel -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="~/assets/images/e02.jpg"
                  alt=""
                  class="d-block"
                  style="width: 100%"
                />
                <div class="carousel-caption">
                  <h3>رویداد یلدا</h3>
                  <p>
                    جشنواره بزرگ جابنیت برای تازه واردها ویدوهای آموزشی با تخفیف
                    فوق العاده
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="~/assets/images/c1.jpg"
                  alt=""
                  class="d-block"
                  style="width: 100%"
                />
                <div class="carousel-caption">
                  <h3>آزمون استخدامی شرکت دیجیتاتو</h3>
                  <p>
                    فراخوان جذب برنامه نویس وب تا تاریخ 24 آبان 1400 جهت همکاری
                    در شرکت دیجیتاتو
                  </p>
                </div>
              </div>
            </div>

            <!-- Left and right controls/icons -->
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-start mx-4">
      <h4><b>پروژه های درحال انجام </b></h4>
      <div class="col-md-2">
        <Projectcard> </Projectcard>
      </div>
      <div class="col-md-2">
        <Projectcard> </Projectcard>
      </div>
    </div>
    <div class="row justify-content-end mx-4 mb-2">
      <h4><b> پروژه های درصف </b></h4>
      <div class="col-md-2">
        <Projectcard> </Projectcard>
      </div>
      <div class="col-md-2">
        <Projectcard> </Projectcard>
      </div>
      <div class="col-md-2">
        <Projectcard> </Projectcard>
      </div>
      <div class="col-md-2">
        <Projectcard> </Projectcard>
      </div>
      <div class="col-md-2">
        <Projectcard> </Projectcard>
      </div>
      <div class="col-md-2"></div>
      <hr class="ht mt-3" />
    </div>
  </div>
</template>

<script>
import Projectcard from "~/components/Projectcard";
export default {
  auth: false,
  components: {
    Projectcard,
  },
};
</script>

<style>
</style>