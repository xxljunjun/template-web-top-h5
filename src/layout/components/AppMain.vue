<template>
  <div id="app-main">
    <keep-alive>
      <!-- 需要缓存的视图组件 -->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不需要缓存的视图组件 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#app-main {
  height: 100%;
  padding-top: 68px;
}
</style>
