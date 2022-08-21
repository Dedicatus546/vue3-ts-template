<script setup lang="ts">
const o = reactive({
  a: 1,
  b: 2,
  c: "a",
});
</script>

<template>
  <div>
    o.a = {{ o.a }}
    <br />
    o.b = {{ o.b }}
    <NButton>按钮</NButton>
  </div>
  <RouterView></RouterView>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
