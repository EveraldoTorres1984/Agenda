<template>
  <div class="container">
    <ScheduleForm />

    <div class="card mb-5">
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Título</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Descrição</th>
              <th style="width:200px">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>titulo</td>
              <td>data</td>
              <td>horario</td>
              <td>descricao</td>
              <td>
                <div class="btn-action">
                  <button class="btn btn-warning" style="margin-right: 10px;">Editar</button>
                  <button class="btn btn-danger">Excluir</button>
                </div>
              </td>
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
  name: "Home",
  components: {
    ScheduleForm,
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

<style scoped>
.card-body{
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;  
}

button{
  height: 30px;
  font-size: 13px;  
}

</style>
