import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import pinia from "./store";
import router from "./router";

const bootstrap = async () => {
  // 如果项目需要在挂载之前使用到异步请求来获取数据
  // 异步请求就可以写到这里，保证数据成功获取之后才能创建实例化 Vue 对象
  // 或者在失败之后使用降级使用其他的数据

  const app = createApp(App);
  app.use(pinia).use(router);
  const a = 1;

  app.mount("#app");
};

bootstrap().then(() => {
  console.log("app is running.");
});
