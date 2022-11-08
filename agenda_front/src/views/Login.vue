<template>
  <div class="container">
    <div class="content first-content">
      <div class="first-column">
        <h2 class="title title-primary">Bem-vindo(a)</h2>
        <p class="description description-primary">
          Por favor, faça o Login para ter acesso.
        </p>
        <form @submit.stop.prevent="VerifyLogin" class="form">
          <label class="label-input" for="">
            <fa icon="envelope" class="icon-modify" />
            <input v-model="email" type="email" placeholder="Email" />
          </label>
          <label class="label-input" for="">
            <fa icon="lock" class="icon-modify" />
            <input type="password" v-model="password" placeholder="Senha" />
          </label>
          <button type="submit" id="signin" class="btn btn-primary">
            ENTRAR
          </button>
        </form>
      </div>
      <div class="second-column">
        <h2 class="title title-second">Criar conta</h2>
        <form class="form">
          <label class="label-input" for="">
            <fa icon="user" class="icon-modify" />
            <input type="text" v-model="form.name" placeholder="Nome" />
          </label>

          <label class="label-input" for="">
            <fa icon="envelope" class="icon-modify" />
            <input type="email" v-model="form.email" placeholder="Email" />
          </label>

          <label class="label-input" for="">
            <fa icon="lock" class="icon-modify" />
            <input
              type="password"
              v-model="form.password"
              placeholder="Senha"
            />
          </label>
        </form>
        <button type="button" class="btn btn-second" @click="submitForm">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Cookies from "js-cookie";

export default {
  name: "Login",

  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      email: "",
      password: "",
    };
  },

  methods: {
    submitForm() {
      axios
        .post("http://localhost/api/register", this.form)
        .then(function (response) {
          window.location = "/home";
        });
    },

    VerifyLogin() {
      let self = this;

      return new Promise(function (resolve, reject) {
        axios
          .post("http://localhost/api/login", {
            email: self.email,
            password: self.password,
          })
          .then(function (response) {
            Cookies.set("_myapp_token", response.data.access_token);
          })
          .finally(function () {
            window.location = "/home";
          });
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/public/img/back-agenda.jpg");
  background-size: cover;
}

.content {
  background-color: #fff;
  border-radius: 15px;
  height: 50%;
  width: 960px;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.content::before {
  content: "";
  position: absolute;
  background-color: #1e90ff;
  width: 50%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  left: 0;
}

.title {
  font-size: 28px;
  font-weight: bold;
}

.title-primary {
  color: #fff;
}

.title-second {
  color: #1e90ff;
}

.form {
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 15px;
}

.form input {
  height: 45px;
  width: 100%;
  border: none;
  background-color: #ecf0f1;
}

textarea:focus,
input:focus,
select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

input:focus::placeholder {
  color: transparent;
}

.label-input {
  background-color: #ecf0f1;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.icon-modify {
  color: #7f8c8d;
  padding: 0 5px;
}

.description {
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  line-height: 30px;
}

.description-primary {
  color: #fff;
}

.btn {
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 10px;
  padding: 10px 50px;
  cursor: pointer;
  font-weight: bold;
  width: 150px;
  align-self: center;
  border: none;
  margin-top: 1rem;
}

.btn-primary {
  background-color: transparent;
  border: 1px solid #fff;
  transition: background-color 0.5s;
}

.btn-primary:hover {
  background-color: #fff;
  color: #1e90ff;
  border: 1px solid #1e90ff;
}

.btn-second {
  background-color: #1e90ff;
  color: #fff;
  transition: background-color 0.5s;
}

.btn-second:hover {
  background-color: #00bfff;
  color: #fff;
}

.first-content {
  display: flex;
}

.first-content .second-column {
  z-index: 11;
}

.first-column {
  text-align: center;
  width: 60%;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.second-column {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
