<template>
  <div class="container ">
  <ScheduleForm/>

  </div>
</template>

<script>
import ScheduleForm from "../components/ScheduleForm.vue"

export default {

  name:"Users",
  components:{
    ScheduleForm
  },

  data() {
    return {
      users: [],
    };
  },
  created() {
    fetch("http://localhost/api/users")
      .then((response) => response.json())
      .then((r) => {
        this.users = r;
      });
  },
};


</script>
