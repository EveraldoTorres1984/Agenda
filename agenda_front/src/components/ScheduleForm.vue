<template>
  <div>   

    <form id="schedule-form">
      <div class="input-container">
        <label for="title">Título da atividade:</label>
        <input type="text" id="title" name="title" v-model="form.title" />
      </div>
      <div class="input-container">
        <label for="date">Data:</label>
        <input type="date" id="date" name="date" v-model="form.date" />
      </div>
      <div class="input-container">
        <label for="time">Horário:</label>
        <input type="time" id="time" name="time" v-model="form.time" />
      </div>
      <div class="input-container"> <router-view />
        <label for="description">Descrição:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          v-model="form.description"          
        />
      </div>
      <div class="input-container">
        <input type="button" @click="submitForm" class="btn btn-primary" value="Agendar" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
  name: "ScheduleForm",
  
  data() {
      return {
        form:{
          title:"",
          date: "",
          time: "",
          description:"",
        }
      }
    },

    methods:{
      submitForm(e){
        console.log(e);

        let token =  Cookies.get("_myapp_token");

        const config = {
          headers: {Authorization : `Bearer ${token}`}
        }
        axios
        .post('http://localhost/api/create', this.form, config).then(function(){
           window.location = "/home";
        })
      },
    }
  
};
</script>

<style scoped>
#schedule-form {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #222;
  padding: 10px 5px;
  
}

input,
select {
  padding: 2px 5px;
  width: 300px;
}

textarea {
  height: 100px;
  width: 400px;
}

.btn {
  width: 80px;
}
</style>
