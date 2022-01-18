<template>
  <div class="card jn-border">
    <img
      class="card-img-top img-fluid jn-border-bottom"
      src="~/assets/images/detail.jpg"
      alt="Card image"
    />

    <div class="card-body jn-bg-gradiant">
      <div class="text-right">
        <h4 class="card-title font-weight-bold text-center">
          طراحی سایت سایپا
        </h4>

        <!-- <h4 class="card-title">مهارت</h4>

        <ul class="list-inline">
          <li class="list-inline-item">
            <h6 class="font-weight-bold">html</h6>
          </li>
          <li class="list-inline-item">
            <h6 class="font-weight-bold">css</h6>
          </li>
          <li class="list-inline-item">
            <h6 class="font-weight-bold">js</h6>
          </li>
        </ul> -->

        <h4 class="card-title">توضیحات</h4>

        <p class="card-text mb-5">
          برگذاری مسابقات و اهدای جوایز به نفرات برتر هر دوره از مسابقات برگذاری
          مسابقات و اهدای جوایز به نفرات برتر هر دوره از مسابقات برگذاری مسابقات
          و اهدای جوایز به نفرات برتر هر دوره از مسابقات برگذاری مسابقات و اهدای
          جوایز به نفرات برتر هر دوره از مسابقات برگذاری مسابقات و اهدای جوایز
          به نفرات برتر هر دوره از مسابقات برگذاری مسابقات و اهدای جوایز به
          نفرات برتر هر دوره از مسابقات
        </p>

        <div class="row mx-0">
          <div class="col">
            <h6>تاریخ پایان پروژه</h6>
            <time class="d-block font-weight-bold text-center">
              ۱۴۰۰/۱۱/۲۵
            </time>
          </div>

          <div class="col">
            <h6>مبلغ پرداختی</h6>
            <span class="d-block font-weight-bold text-center">
              ۱۲۰۰۰۰ تومان
            </span>
          </div>
        </div>
      </div>

      <div class="my-3">
        <NuxtLink
          to="/projects"
          class="btn w-50 d-block mx-auto jn-btn-primary"
        >
          بازگشت
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
