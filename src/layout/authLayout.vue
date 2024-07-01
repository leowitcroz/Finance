<template>
    <div class="container" style="display: flex; justify-content: center">
      <div class="login_box">
        <div class="itens">
          <img class="logo" src="../assets/logo.png" alt="" />
            <router-view/>
        </div>
      </div>
    </div>
  </template>
  
  
  <style>
  .container {
    height: 100vh;
  }
  
  .login_box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .itens {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding-top: 10%;
    padding-bottom: 10%;
    padding-left: 10%;
    padding-right: 10%;
    border-radius: 15px;
  }
  
  .logo {
    width: 100%;
    margin-bottom: 40px;
  }
  
  .input {
    margin-bottom: 15px;
    padding: 4px;
    padding-left: 10px;
    border-radius: 5px;
  }
  .buttons{
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
  
  .login_btn:hover {
    text-decoration: underline;
  }
  
  .signUp{
      margin-top: 15px;
      color: rgb(39, 39, 39);
  }
  </style>