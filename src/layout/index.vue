<template>
  <div id="layout">
    <topbar />
    <main>
      <app-main />
    </main>
  </div>
</template>

<script>
import { AppMain, Topbar } from "./components";
export default {
  mounted() {},
  destroyed() {},
  components: {
    AppMain,
    Topbar,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body,
#layout {
  height: 100%;
  main {
    height: 100%;
  }
}
</style>
