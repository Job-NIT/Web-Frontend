<template>
  <div>
       <div class="container mt-4 ">
        <form action="/action_page.php">
            <div class="input-group mx-5">
                <input type="text" class="form-control formcontrol1" placeholder="جستوجو" name="search">
                <div class="input-group-btn">
                    <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                </div>
            </div>
        </form>
    </div>

    <div class="row justify-content-start mx-4 mt-2">
        <div class="col-md-2  ">
            <Projectcard  image="~assets/images/p4.jpg"></Projectcard>
           
        </div>
        <div class="col-md-2">
           <Projectcard></Projectcard>
        </div>
        <div class="col-md-2  ">
             <Projectcard></Projectcard>
        </div>
        <div class="col-md-2  ">
           <Projectcard></Projectcard>
        </div>
        <div class="col-md-2 ">
           <Projectcard></Projectcard>
        </div>
        <div class="col-md-2 ">
            <Projectcard></Projectcard>
        </div>
    </div>
    <div class="row justify-content-end mx-4 mb-1 mt-2">
        <div class="col-md-2  ">
          <Projectcard></Projectcard>
        </div>
        <div class="col-md-2 ">
            <Projectcard></Projectcard>
        </div>
        <div class="col-md-2 ">
            <Projectcard></Projectcard>
        </div>
        <div class="col-md-2 ">
           <Projectcard></Projectcard>
        </div>
        <div class="col-md-2 ">
            <Projectcard></Projectcard>
        </div>
        <div class="col-md-2 ">
            <Projectcard></Projectcard>
        </div>

    </div>

    
    <nav av aria-label="Page navigation example">
        <ul class="pagination justify-content-center mt-4 mb-4 ">
            <li class="page-item ">
                <a class="page-link pgl" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item"><a class="page-link " href="#">1</a></li>
            <li class="page-item"><a class="page-link " href="#">2</a></li>
            <li class="page-item"><a class="page-link " href="#">3</a></li>
            <li class="page-item">
                <a class="page-link pgl" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
  </div>
</template>
 
<script>
  import Projectcard from "~/components/Projectcard";
export default {
    auth:false,
     components: {
      Projectcard,
  },
  props: ['image'],
}
</script>

<style>

</style>