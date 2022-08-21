import { defineStore } from "pinia";
import { computed, reactive, toRefs } from "vue";

const useLoginStore = defineStore("LoginStore", () => {
  const state = reactive<{
    loginUser: Record<string, any> | null;
  }>({
    loginUser: null,
  });

  const isLogin = computed(() => state.loginUser !== null);

  const loginAction = async (username: string, password: string) => {
    // 这里是模拟登录
    const res = await Promise.resolve({
      username: "lwf",
      email: "xxx@qq.com",
    });
    state.loginUser = {
      username: res.username,
      email: res.email,
    };
  };

  return {
    ...toRefs(state),
    isLogin,
    loginAction,
  };
});

export default useLoginStore;
