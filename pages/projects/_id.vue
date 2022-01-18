<template>
  <div class="row mx-0">
    <div class="col-lg-6 mb-5">
      <Detail></Detail>
    </div>

    <div class="col-lg-6">
      <h4 class="font-weight-bold text-center mb-3 mr-3">
        لیست درخواست های ثبت شده
      </h4>

      <RequestCardList />
    </div>
  </div>
</template>

<script>
import Detail from "~/components/project/Detail";
import RequestCardList from "~/components/project/RequestCardList";

export default {
  components: {
    Detail,
    RequestCardList,
  },
  auth: false,
};
</script>
