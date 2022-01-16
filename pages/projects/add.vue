<template>
   <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 mt-1">
        <div class="container mt-3 mb-4">
          <div class="card mx-5 card1">
            <img class="card-img-top img-fluid" src="~/assets/images/ax.jpg" alt="Card image">
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-md-4 mt-3">
                  <div class="btn-gp">
                    <button type="button" class="btn btn-primary dropdown-toggle btntgl" data-bs-toggle="dropdown"><a
                        href="" style="text-decoration: none; color:white">دسته بندی </a></button>
                    <ul class="dropdown-menu ">
                      <li><a class="dropdown-item " href=".html">  </a></li>
                    </ul>
                  </div>               
                 </div>
                <div class="col-md-4 mt-3">
                  <input type="password" class="form-control form-contro1"  placeholder="عنون پروژه">
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control form-contro1" placeholder="مهارت ها">
              </div>
              <div class="form-group  mt-3">
                <input type="text" class="form-control form-contro1" id="tozihat" placeholder="توضیحات">
              </div>
              <div class="row justify-content-center">
                <div class="col-md-4 mt-3">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend" style="background-color:gray;">
                      <div class="input-group-text inptxt" style="color:rgb(131, 122, 122);">تومان</div>
                    </div>
                    <input type="text" class="form-control form-contro1" placeholder="مبلغ پرداختی">
                  </div>
                </div>
                <div class="col-md-4 mt-3">
                  <input type="email" class="form-control form-contro1"  placeholder="تاریخ پایان پروژه">
                </div>
              </div>
              <button type="submit" class="btn btn-primary btnp mt-3 mb-3"> ثبت پروژه</button>

            </div>
          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script>
export default {
    auth:false,
}
</script>

<style>

</style>