import Vue from 'vue'
import App from './App.vue'
import router from './router'//配置路由
import store from "@/store/"
import i18n from '@/utils/i18n';
import "@/style/common.scss"//引入全局样式
Vue.prototype.$i18nMsg = i18n.messages[i18n.locale] //挂载上去this.$i18nMsg.xxx去访问
console.log("当前的环境是",process.env)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
