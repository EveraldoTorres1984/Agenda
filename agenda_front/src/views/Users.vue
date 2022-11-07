<template>
  <div class="container">
    <ScheduleForm />

    <div class="card mb-5">
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>             
              <th>Título</th>
              <th>Descrição</th>
              <th>Data</th>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>titulo</td>
              <td>descricao</td>
              <td>data</td>
              <td>horario</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleForm from "../components/ScheduleForm.vue";

export default {
  name: "Users",
  components: {
    ScheduleForm,
  },

  data() {
    return {
      schedules: [{
        
      }],
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
