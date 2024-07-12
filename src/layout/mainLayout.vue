<template>
  <div class="mainLayout">
    <nav class="nav-bar">
      <div class="itens_">
        <img src="../assets/logo.png" alt="" width="20%" />
        <div class="dropdown" style="display: flex; margin-left: 3%">
          <div
            class="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="material-icons" style="font-size: 35px; color: whitesmoke"
              >account_circle</span
            >
          </div>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Security</a></li>
            <li><a class="dropdown-item" href="#">Exit</a></li>
          </ul>
        </div>
      </div>
      <div class="btns">
        <button class="btn_navbar" v-for="(btn, key) in buttons" :key="key">
          {{ btn.name }}
        </button>
      </div>
    </nav>
    <div class="views">
      <div class="routers">
        <router-view />
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from "vue";

const buttons = ref([
  {
    name: "expenses",
  },
  {
    name: "income",
  },
  {
    name: "debt",
  },
  {
    name: "stocks",
  },
  {
    name: "general",
  },
  {
    name: "investments",
  },
  {
    name: "planning",
  },
]);
</script>

<style>
.dropdown-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown-toggle::after {
  content: none !important;
}

.itens_ {
  display: flex;
  justify-content: space-between;
  margin-left: 8%;
  margin-right: 5%;
  margin-top: 5px;
  margin-bottom: 5px;
}

.btns {
  display: flex;
  margin-left: 3%;
  margin-right: 3%;
  padding: 10px;
  background-color: #38b14a;
  border-radius: 15px;
}

.btn_navbar {
  border: none;
  margin-right: 10px;
  margin-left: 10px;
  background-color: #38b14a;
  color: whitesmoke;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.btn_navbar:hover {
  text-decoration: underline;
}

.nav-bar {
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #55ca62;
}

.mainLayout {
  text-align: center;
}

.views {
  display: flex;
  justify-content: center;
  height: 80vh;
}

.routers {
  background: rgb(252, 252, 252);
  width: 90%;
}
</style>