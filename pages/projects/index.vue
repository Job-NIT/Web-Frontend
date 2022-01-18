<template>
  <div>
    <div class="container my-4">
      <form>
        <div class="input-group mx-5">
          <input
            type="search"
            class="form-control jn-border jn-bg-gradiant"
            placeholder="جستوجو"
          />

          <!-- <div class="input-group-btn">
            <button class="btn btn-default" type="submit">
              <i class="glyphicon glyphicon-search"></i>
            </button>
          </div> -->
        </div>
      </form>
    </div>

    <CardList />

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

export default {
  auth: false,
  components: {
    CardList,
    AddButton,
  },
};
</script>
