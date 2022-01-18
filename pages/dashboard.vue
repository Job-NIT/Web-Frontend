<template>
  <div>
    <h4 class="font-weight-bold text-right my-2 mr-4">پروژه های درحال انجام</h4>
    <CardList />

    <h4 class="font-weight-bold text-right my-2 mr-4">
      پروژه های در صف انتظار
    </h4>
    <CardList />

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
