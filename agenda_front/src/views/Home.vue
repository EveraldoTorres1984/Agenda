<template>
  <div class="container">
    <ScheduleForm @getSchedules="getSchedules" />

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
            <tr v-for="task in tasks" :key="task.id">
              <td>{{task.title}}</td>
              <td>{{task.date}}</td>
              <td>{{task.time}}</td>
              <td>{{task.description}}</td>
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
import axios from "axios";
import Cookies from "js-cookie";

export default {

  data(){
    return{
      tasks:[]
    }
  },
  name: "Home",
  components: {
    ScheduleForm, 
  },   

  
  created() {
   this.getSchedules();

  },

  methods: {
    getSchedules() {
      
      let token =  Cookies.get("_myapp_token");
             const config = {
          headers: {Authorization : `Bearer ${token}`}
        }
    axios.get("http://localhost/api/home", config)
      .then((response) => {
     this.tasks = response.data[0].schedules
      });
      }
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
  height: 32px;
  font-size: 14px; 
  
}

</style>
