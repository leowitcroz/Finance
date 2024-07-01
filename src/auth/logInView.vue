<template>
  <div class="form-floating mb-3">
    <input
      type="email"
      class="form-control"
      :class="{ 'is-invalid': invalidInput}"
      id="floatingInput"
      placeholder="name@example.com"
      v-model="user.email"
    />
    <label for="floatingInput" style="" >Email address</label>
    <div class="invalid-feedback">Invalid credentials</div>
  </div>
  <div class="form-floating">
    <input
      type="password"
      class="form-control"
      id="floatingPassword"
      placeholder="Password"
      :class="{ 'is-invalid': invalidInput}"
      v-model="user.password"
    />
    <label for="floatingPassword">Password</label>
    <div class="invalid-feedback">Invalid credentials</div>
  </div>
  <div class="buttons">
    <button class="login_btn" @click="login()">Login</button>
    <a href="" class="signUp">Sign Up</a>
  </div>
</template>

<script lang='ts' setup>
import router from "@/router";
import store from "@/store";
import { Utils } from "@/utils/utils";
import { computed, onMounted, ref } from "vue";

const utils = new Utils("http://localhost:3000/");

const user = ref({
  email: "",
  password: "",
});

const errorMessage = ref("");

const invalidInput = ref(false);

async function login() {
  try {
    const request: any = await utils.post("auth/login", user.value);

    if (request) {
      const data = request.data;
      const token = request.token.accessToken;

      store.dispatch("saveToken", token);

      router.push({ name: "home" });
      user.value.email = "";
      user.value.password = "";
      invalidInput.value = false;
      errorMessage.value = "";
    }
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      errorMessage.value = "Erro: Credenciais inválidas.";
      invalidInput.value = true;
    } else {
      console.error("Erro: ", error);
    }
  }
}

onMounted(async () => {
  store.dispatch("removeToken");
});
</script>


<style>

.form-control:focus {
  border-color: #ced4da !important;/* Cor de borda padrão */
  box-shadow: none  !important;/* Remove a sombra ao redor do campo */
}

.form-floating > label::after {
    background-color: transparent !important;
}

.buttons {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.login_btn {
  margin-top: 15px;
  border: none;
  background-color: #38b14a;
  color: whitesmoke;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 15px;
  padding: 5px;
  width: 100%;
}
.invalid {
  border: 2px solid red;
}

.login_btn:hover {
  text-decoration: underline;
}

.signUp {
  margin-top: 15px;
  color: rgb(39, 39, 39);
}
</style>