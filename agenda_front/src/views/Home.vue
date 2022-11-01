<template>
  <div class="container">
    <div class="content first-content">
      <div class="first-column">
        <h2 class="title title-primary">Bem-vindo(a)</h2>
        <p class="description description-primary">Por favor, faça o Login para ter acesso.</p>
        <button class="btn btn-primary">ENTRAR</button>
      </div>
      <div class="second-column">
        <h2 class="title title-second">Criar conta</h2>
        <form class="form">
          <label class="label-input" for="">
            <fa icon="user" class="icon-modify" />
            <input type="text" placeholder="Nome" />
          </label>

          <label class="label-input" for="">
            <fa icon="envelope" class="icon-modify" />
            <input type="email" placeholder="Email" />
          </label>

          <label class="label-input" for="">
             <fa icon="lock" class="icon-modify" />
            <input type="password" placeholder="Senha" />
          </label>

          <button class="btn btn-second">Cadastrar</button>
        </form>
      </div>
    </div>
    <div class="content second-content">
      <div class="first-column">
        <h2 class="title title-primary">Olá, Amigo!</h2>
        <p class="description description-primary">
          Por favor, informe seus dados para fazer seu cadastro
        </p>
        <button class="btn btn-primary">CADASTRAR</button>
      </div>
      <div class="second-column">
        <h2 class="title">Faça seu Login</h2>
        <form class="form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <a href="#">Esqueceu a sua senha?</a>
          <button class="btn">ENTRAR</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ecf0f1;
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
  background-color: #58af9b;
  width: 40%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;


  left: 60%;
}

.title {
  font-size: 28px;
  font-weight: bold;
}

.title-primary {
  color: #fff;
}

.title-second {
  color: #58af9b;
}

.form {
  display: flex;
  flex-direction: column;
  width: 55%;
}

.form input {
  height: 45px;
  width: 100%;
  border: none;
  background-color: #ecf0f1;  
}

.label-input{
  background-color:#ecf0f1 ;
  display: flex;
  align-items: center;
  margin: 8px;
}

.icon-modify{
  color: #7f8c8d;
  padding: 0 5px;
}

input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #ecf0f1 inset !important;
  -webkit-text-fill-color: #000 !important;
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
.description-second {
    color: #7f8c8d;
}

.btn {
  border-radius: 15px;
  text-transform: uppercase;
  color: #fff;
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
  color: #58af9b;
  border: 1px solid #58af9b;
}

.btn-second {
  background-color: #58af9b;
  display: flex;
  justify-content: center;
  transition: background-color 0.5s;
}

.btn-second:hover {
  background-color: #fff;
  color: #58af9b;
  border: 1px solid #58af9b;
}

.first-content {
  display: flex;
  display: none;
}
.first-content .second-column {
  z-index: 11;
}

.first-column {
  text-align: center;
  width: 40%;
  z-index: 10;
}

.second-column {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.second-content {
  position: absolute;
  display: flex;
}

.second-content .first-column {
  order: 2;
}

.second-content .second-column {
  order: 1;
}
</style>
