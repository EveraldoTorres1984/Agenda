<template>
  <div>
    <p>componente msg</p>

    <form id="schedule-form">
      <div class="input-container">
        <label for="title">Título da atividade:</label>
        <input type="text" id="title" name="title" v-model="title" />
      </div>
      <div class="input-container">
        <label for="date">Data:</label>
        <input type="date" id="date" name="date" v-model="date" />
      </div>
      <div class="input-container">
        <label for="time">Horário:</label>
        <input type="time" id="time" name="time" v-model="time" />
      </div>
      <div class="input-container">
        <label for="description">Descrição:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          v-model="description"          
        />
      </div>
      <div class="input-container">
        <input type="submit" class="btn btn-primary" value="Agendar" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ScheduleForm",
  
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
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
  padding: 10px 5px;
  border-left: 3px solid #1e90ff;
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
