<template>
    <input class="input" type="text" placeholder="username" />
          <input class="input" type="password" placeholder="password" />
          <div class="buttons">
              <button class="login_btn">Login</button>
              <a href="" class="signUp">Sign Up</a>
          </div>
</template>


<style>
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