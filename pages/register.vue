<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");

const router = useRouter();

const submit = async () => {
  try {
    await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });

    await router.push("/login");
  } catch (error) {
    console.error("Registration failed:", error);
  }
};
</script>

<template>
  <!-- <main class="form-signin m-auto">
      <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please register</h1>
        <div class="form-floating" style="display: grid">
          <label for="floatingInput">Name: </label>
          <input
            v-model="name"
            type="name"
            class="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div class="form-floating" style="display: grid">
          <label for="floatingInput">Email address: </label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
        </div>
        <div class="form-floating" style="display: grid">
          <label for="floatingInput">Password: </label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
          />
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">Submit</button>
      </form>
    </main> -->
  <div class="login-page">
    <div class="form">
      <form class="register-form" @submit.prevent="submit">
        <input v-model="name" type="text" placeholder="Name" required />
        <input
          v-model="password"
          type="password"
          placeholder="*********"
          required
        />
        <input
          v-model="email"
          type="email"
          placeholder="name@example.com"
          required
        />
        <button type="submit">Submit</button>
        <p class="message">
          Already registered? <a aria-current="page" href="/login">Sign In</a>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #703a95;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #26073d;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #703a95;
  text-decoration: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before,
.container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #ef3b3a;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: rgb(141, 194, 111);
  background: linear-gradient(
    90deg,
    rgba(141, 194, 111, 1) 0%,
    rgba(118, 184, 82, 1) 50%
  );
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
