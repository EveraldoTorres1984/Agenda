<template>
   <div>
    <p>componente msg</p>

    <form id="schedule-form">
        <div class="input-container">
            <label for="title">Título do compromisso</label>
            <input type="text" id="title" name="title" v-model="title" placeholder="Digite o titulo do seu compromisso">
        </div>
        <div class="input-container">
            <label for="title">Descrição</label>
            <input type="text" id="description" name="description" v-model="description" placeholder="Descreva seu compromisso">
        </div>
        <div class="input-container">
            <label for="title">Data</label>
            <input type="date" id="date" name="date" v-model="date">
            <input type="time" id="time" name="time" v-model="time">
        </div>
    </form>
   </div>
</template>

<script>

export default {
   name:"ScheduleForm"
}
</script>

<style scoped>

</style>