
<template>
    <div class="mainLayout">
        <nav class="nav-bar">
            <div class="itens">
                <h3>titulo</h3>
                <h3>perfil</h3>
            </div>
            <div class="btns">
                <button class="btn_navbar" v-for="(btn,key) in buttons" :key="key">{{ btn.name }}</button>
                
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
        name:'expenses'
    },
    {
        name:'income'
    },
    {
        name:'debt'
    },
    {
        name:'stocks'
    },
    {
        name:'general'
    },
    {
        name:'investments'
    },
    {
        name:'planning'
    },
])

</script>

<style>
.itens {
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
    background-color:#38b14a;
    color: whitesmoke;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
}

.btn_navbar:hover{
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
    height: 79vh;
}

.routers {
    background: rgb(252, 252, 252);
    width: 90%;
}
</style>