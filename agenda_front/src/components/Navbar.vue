<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" :id="logo" />
    </router-link>
    <router-link to="/">Login</router-link> 
    <router-link to="/home">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["logo", "alt"],
};
</script>

<style scoped>
#nav {
  background-color: 	#1e90ff;
  border-bottom: 3px solid #6495ED;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#nav #logo-url {
  margin: auto;
  margin-left: 0;
}
#logo {
  width: 40px;
  height: 40px;
  
}
#nav a {
  color: #000080;
  text-decoration: none;
  margin: 10px;
  transition: 0.5s;
}
#nav a:hover {
  color: #fff;
}
img{
  width: 30px;  
}
</style>
