<script setup lang="ts">
import { reactive } from "vue";
import useLoginStore from "./store/useLoginStore";

const loginStore = useLoginStore();
const model = reactive({
  username: "",
  password: "",
});

const login = () => {
  try {
    loginStore.loginAction(model.username, model.password);
  } catch (e) {
    // 处理错误
  }
};
</script>

<template>
  <div>是否登录: {{ loginStore.isLogin }}</div>
  <input v-model="model.username" type="text" />
  <br />
  <input v-model="model.password" type="text" />
  <br />
  <button @click="login">登录</button>
</template>
