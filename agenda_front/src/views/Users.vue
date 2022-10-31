<template>
  <div class="users main-container">
    <h1>Página de usuários</h1>
    <div v-for="user in users" :key="user.id">
      <h3>{{ user.name }}</h3>
      <div v-for="schedules in user.schedules" :key="schedules.id">
        {{ schedules.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
