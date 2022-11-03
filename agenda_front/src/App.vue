<template>
  <Navbar :logo="logo_src" :alt="app_name" />

  <router-view />
  <Footer />
</template>



<script>

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      logo_src: "/img/agenda_logo.png",
      app_name: "Agenda Pessoal",
    };
  },
};
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&family=Rubik:wght@400;500&display=swap");
* {
  font-family: "Oleo Script Swash Caps", cursive;
  font-family: "Rubik", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
